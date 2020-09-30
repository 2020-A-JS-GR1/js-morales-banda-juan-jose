import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPilotoComponent } from './formulario-piloto.component';

describe('FormularioPilotoComponent', () => {
  let component: FormularioPilotoComponent;
  let fixture: ComponentFixture<FormularioPilotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPilotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
