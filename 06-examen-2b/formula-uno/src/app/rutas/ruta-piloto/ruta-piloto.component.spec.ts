import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPilotoComponent } from './ruta-piloto.component';

describe('RutaPilotoComponent', () => {
  let component: RutaPilotoComponent;
  let fixture: ComponentFixture<RutaPilotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaPilotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
