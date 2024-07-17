import { Component } from '@angular/core';
import { AlertsComponent } from '../alerts/alerts.component';
import { SpotlightComponent } from '../spotlight/spotlight.component';
import { KeyAnalyticsComponent } from '../key-analytics/key-analytics.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertsComponent, SpotlightComponent, KeyAnalyticsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
