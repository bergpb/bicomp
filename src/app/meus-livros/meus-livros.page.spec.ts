import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusLivrosPage } from './meus-livros.page';

describe('MeusLivrosPage', () => {
  let component: MeusLivrosPage;
  let fixture: ComponentFixture<MeusLivrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusLivrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusLivrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
