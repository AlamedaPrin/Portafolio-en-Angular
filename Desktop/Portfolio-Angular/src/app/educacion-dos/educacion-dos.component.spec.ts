import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionDosComponent } from './educacion-dos.component';

describe('EducacionDosComponent', () => {
  let component: EducacionDosComponent;
  let fixture: ComponentFixture<EducacionDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
