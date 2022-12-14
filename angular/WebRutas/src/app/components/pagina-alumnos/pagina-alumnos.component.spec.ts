import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlumnosComponent } from './pagina-alumnos.component';

describe('PaginaAlumnosComponent', () => {
  let component: PaginaAlumnosComponent;
  let fixture: ComponentFixture<PaginaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
