import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEscuderiaComponent } from './ruta-escuderia.component';

describe('RutaEscuderiaComponent', () => {
  let component: RutaEscuderiaComponent;
  let fixture: ComponentFixture<RutaEscuderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEscuderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEscuderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
