import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhiComponent } from './ghi.component';

describe('GhiComponent', () => {
  let component: GhiComponent;
  let fixture: ComponentFixture<GhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
