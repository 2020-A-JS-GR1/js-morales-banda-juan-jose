import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearPilotoComponent } from './ruta-crear-piloto.component';

describe('RutaCrearPilotoComponent', () => {
  let component: RutaCrearPilotoComponent;
  let fixture: ComponentFixture<RutaCrearPilotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearPilotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
