import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntencionesPage } from './intenciones.page';

describe('IntencionesPage', () => {
  let component: IntencionesPage;
  let fixture: ComponentFixture<IntencionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntencionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntencionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
