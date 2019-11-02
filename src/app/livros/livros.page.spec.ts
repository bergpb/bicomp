import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosPage } from './livros.page';

describe('LivrosPage', () => {
  let component: LivrosPage;
  let fixture: ComponentFixture<LivrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
