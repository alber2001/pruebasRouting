import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPerfilComponent } from './creacion-perfil.component';

describe('CreacionPerfilComponent', () => {
  let component: CreacionPerfilComponent;
  let fixture: ComponentFixture<CreacionPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreacionPerfilComponent]
    });
    fixture = TestBed.createComponent(CreacionPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
