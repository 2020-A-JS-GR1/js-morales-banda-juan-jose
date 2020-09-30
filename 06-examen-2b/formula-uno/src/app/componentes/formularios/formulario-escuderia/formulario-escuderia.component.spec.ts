import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEscuderiaComponent } from './formulario-escuderia.component';

describe('FormularioEscuderiaComponent', () => {
  let component: FormularioEscuderiaComponent;
  let fixture: ComponentFixture<FormularioEscuderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEscuderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEscuderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
