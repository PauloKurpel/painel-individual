import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroboletoComponent } from './financeiroboleto.component';

describe('FinanceiroboletoComponent', () => {
  let component: FinanceiroboletoComponent;
  let fixture: ComponentFixture<FinanceiroboletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroboletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroboletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
