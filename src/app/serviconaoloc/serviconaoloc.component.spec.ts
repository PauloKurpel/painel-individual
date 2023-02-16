import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiconaolocComponent } from './serviconaoloc.component';

describe('ServiconaolocComponent', () => {
  let component: ServiconaolocComponent;
  let fixture: ComponentFixture<ServiconaolocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiconaolocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiconaolocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
