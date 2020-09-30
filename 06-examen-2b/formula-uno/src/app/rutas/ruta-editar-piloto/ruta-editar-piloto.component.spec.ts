import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarPilotoComponent } from './ruta-editar-piloto.component';

describe('RutaEditarPilotoComponent', () => {
  let component: RutaEditarPilotoComponent;
  let fixture: ComponentFixture<RutaEditarPilotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarPilotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
