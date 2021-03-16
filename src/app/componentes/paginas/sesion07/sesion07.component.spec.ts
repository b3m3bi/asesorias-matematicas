import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesion07Component } from './sesion07.component';

describe('Sesion07Component', () => {
  let component: Sesion07Component;
  let fixture: ComponentFixture<Sesion07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesion07Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sesion07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
