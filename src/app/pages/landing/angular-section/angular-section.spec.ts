import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSection } from './angular-section';

describe('AngularSection', () => {
  let component: AngularSection;
  let fixture: ComponentFixture<AngularSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
