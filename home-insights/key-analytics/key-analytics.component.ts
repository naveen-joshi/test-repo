import { Component } from '@angular/core';
import { AnalyticsCardsComponent } from '../analytics-cards/analytics-cards.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-key-analytics',
  standalone: true,
  imports: [AnalyticsCardsComponent, ButtonModule],
  templateUrl: './key-analytics.component.html',
  styleUrl: './key-analytics.component.scss',
})
export class KeyAnalyticsComponent {}
