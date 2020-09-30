import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarEscuderiaComponent } from './ruta-editar-escuderia.component';

describe('RutaEditarEscuderiaComponent', () => {
  let component: RutaEditarEscuderiaComponent;
  let fixture: ComponentFixture<RutaEditarEscuderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarEscuderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarEscuderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
