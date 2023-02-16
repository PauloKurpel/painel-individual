import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowrnComponent } from './flowrn.component';

describe('FlowrnComponent', () => {
  let component: FlowrnComponent;
  let fixture: ComponentFixture<FlowrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowrnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
