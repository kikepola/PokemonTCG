import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonResumeCardComponent } from './pokemon-resume-card.component';

describe('PokemonResumeCardComponent', () => {
  let component: PokemonResumeCardComponent;
  let fixture: ComponentFixture<PokemonResumeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonResumeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonResumeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
