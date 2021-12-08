import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturePersonneComponent } from './miniature-personne.component';

describe('MiniaturePersonneComponent', () => {
  let component: MiniaturePersonneComponent;
  let fixture: ComponentFixture<MiniaturePersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniaturePersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniaturePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
