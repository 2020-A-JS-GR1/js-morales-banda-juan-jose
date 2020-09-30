import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearEscuderiaComponent } from './ruta-crear-escuderia.component';

describe('RutaCrearEscuderiaComponent', () => {
  let component: RutaCrearEscuderiaComponent;
  let fixture: ComponentFixture<RutaCrearEscuderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearEscuderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearEscuderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
