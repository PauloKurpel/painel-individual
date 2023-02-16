import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroinfoComponent } from './financeiroinfo.component';

describe('FinanceiroinfoComponent', () => {
  let component: FinanceiroinfoComponent;
  let fixture: ComponentFixture<FinanceiroinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
