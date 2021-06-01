import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFullInfoComponent } from './pokemon-full-info.component';

describe('PokemonFullInfoComponent', () => {
  let component: PokemonFullInfoComponent;
  let fixture: ComponentFixture<PokemonFullInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFullInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
