import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusEmprestimosPage } from './meus-emprestimos.page';

describe('MeusEmprestimosPage', () => {
  let component: MeusEmprestimosPage;
  let fixture: ComponentFixture<MeusEmprestimosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusEmprestimosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusEmprestimosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
