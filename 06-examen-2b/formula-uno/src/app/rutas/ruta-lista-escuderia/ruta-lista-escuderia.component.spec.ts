import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaEscuderiaComponent } from './ruta-lista-escuderia.component';

describe('RutaListaEscuderiaComponent', () => {
  let component: RutaListaEscuderiaComponent;
  let fixture: ComponentFixture<RutaListaEscuderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaEscuderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaEscuderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
