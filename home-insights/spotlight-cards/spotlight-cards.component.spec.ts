import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightCardsComponent } from './spotlight-cards.component';

describe('SpotlightCardsComponent', () => {
  let component: SpotlightCardsComponent;
  let fixture: ComponentFixture<SpotlightCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotlightCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotlightCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
