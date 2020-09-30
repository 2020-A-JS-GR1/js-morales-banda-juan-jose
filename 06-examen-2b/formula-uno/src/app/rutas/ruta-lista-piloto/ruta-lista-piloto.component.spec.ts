import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaPilotoComponent } from './ruta-lista-piloto.component';

describe('RutaListaPilotoComponent', () => {
  let component: RutaListaPilotoComponent;
  let fixture: ComponentFixture<RutaListaPilotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaPilotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
