import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; 
import { FeedbackService, Feedback } from '../../services/feedback';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  providers: [DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})


export class DashboardComponent implements OnInit { 
  private feedbackService = inject(FeedbackService);
  private datePipe = inject(DatePipe);


  feedbacks: Feedback[] = [];
  isLoading = true;

  activeFilter: 'week' | 'month' | 'year' = 'month';

  public lineChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      {
        data: [], 
        label: 'Média de Notas',
        fill: true,
        tension: 0.3,
        borderColor: 'rgba(0,123,255,1)',
        backgroundColor: 'rgba(0,123,255,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: { y: { min: 1, max: 5 } } 
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;


  public doughnutChartData: ChartConfiguration['data'] = {
    labels: [ '1 Estrela', '2 Estrelas', '3 Estrelas', '4 Estrelas', '5 Estrelas' ],
    datasets: [
      { 
        data: [],
        backgroundColor: ['#dc3545', '#ffc107', '#fd7e14', '#17a2b8', '#28a745']
      }
    ]
  };

  constructor() {
    Chart.register(...registerables);
  }


  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe({
      next: (data) => {
        this.feedbacks = data;
        this.isLoading = false; 
        this.updateCharts();
      },
      error: (err) => {
        console.error('Erro ao carregar feedbacks:', err);
        this.isLoading = false;
      }
    });
  }

  // Método chamado pelos botões para definir o filtro e atualizar
  setFilter(period: 'week' | 'month' | 'year'): void {
    this.activeFilter = period;
    this.updateCharts();
  }

  // Orquestrador que chama as funções de preparação
  private updateCharts(): void {
    this.prepareDoughnutChartData();
    this.prepareLineChartData();
  }

  // Lógica do gráfico de rosca (separada)
  private prepareDoughnutChartData(): void {
    const ratingCounts = [0, 0, 0, 0, 0];
    for (const fb of this.feedbacks) {
      if (fb.rating >= 1 && fb.rating <= 5) {
        ratingCounts[fb.rating - 1]++;
      }
    }
    this.doughnutChartData.datasets[0].data = ratingCounts;
  }

  // Lógica nova e inteligente para o gráfico de linha
  private prepareLineChartData(): void {
    const now = new Date();
    let startDate = new Date();
    
    // DEFINIR O PERÍODO DE TEMPO
    switch(this.activeFilter) {
      case 'week':
        startDate.setDate(now.getDate() - 6);
        break;
      case 'month':
        startDate.setDate(now.getDate() - 29);
        break;
      case 'year':
        startDate.setFullYear(now.getFullYear() - 1);
        break;
    }

    // FILTRAR OS FEEDBACKS RELEVANTES PARA O PERÍODO
    const relevantFeedbacks = this.feedbacks.filter(fb => new Date(fb.createdAt) >= startDate);

    // AGREGAR NOTAS: calcular a média de notas por dia
    const dailyAverages = new Map<string, { total: number, count: number }>();
    for (const fb of relevantFeedbacks) {
      const day = this.datePipe.transform(fb.createdAt, 'yyyy-MM-dd')!;
      if (!dailyAverages.has(day)) {
        dailyAverages.set(day, { total: 0, count: 0 });
      }
      const dayData = dailyAverages.get(day)!;
      dayData.total += fb.rating;
      dayData.count++;
    }

    // GERAR O RANGE COMPLETO DE DATAS E PREENCHER OS DADOS (A MÁGICA)
    const labels: string[] = [];
    const data: (number | null)[] = [];
    let lastKnownAverage: number | null = null;

    for (let d = startDate; d <= now; d.setDate(d.getDate() + 1)) {
      const dayKey = this.datePipe.transform(d, 'yyyy-MM-dd')!;
      const label = this.datePipe.transform(d, 'dd/MM')!;
      labels.push(label);

      if (dailyAverages.has(dayKey)) {
        const dayData = dailyAverages.get(dayKey)!;
        lastKnownAverage = dayData.total / dayData.count;
        data.push(lastKnownAverage);
      } else {
        // Se não houver feedback no dia, use a última média conhecida
        data.push(lastKnownAverage);
      }
    }

    // ATUALIZAR O GRÁFICO
    this.lineChartData.labels = labels;
    this.lineChartData.datasets[0].data = data;
    this.chart?.update();
  }
}