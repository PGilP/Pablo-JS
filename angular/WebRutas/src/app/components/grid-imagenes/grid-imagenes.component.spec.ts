import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImagenesComponent } from './grid-imagenes.component';

describe('GridImagenesComponent', () => {
  let component: GridImagenesComponent;
  let fixture: ComponentFixture<GridImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridImagenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
