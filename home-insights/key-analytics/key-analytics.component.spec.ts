import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyAnalyticsComponent } from './key-analytics.component';

describe('KeyAnalyticsComponent', () => {
  let component: KeyAnalyticsComponent;
  let fixture: ComponentFixture<KeyAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyAnalyticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
