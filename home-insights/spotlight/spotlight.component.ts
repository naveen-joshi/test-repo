import { Component } from '@angular/core';
import { SpotlightCardsComponent } from '../spotlight-cards/spotlight-cards.component';
import { NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [SpotlightCardsComponent, NgFor, ButtonModule],
  templateUrl: './spotlight.component.html',
  styleUrl: './spotlight.component.scss',
})
export class SpotlightComponent {
  public cards = [
    {
      title: 'Self-Through Rate',
      subtitle: 'Inventory Sold vs Amount Received',
      revenue: '$100,000',
      growth: 20,
    },
    {
      title: 'Self-Through Rate',
      subtitle: 'Inventory Sold vs Amount Received',
      revenue: '$100,000',
      growth: 20,
    },
    {
      title: 'Self-Through Rate',
      subtitle: 'Inventory Sold vs Amount Received',
      revenue: '$100,000',
      growth: 20,
    },
    {
      title: 'Self-Through Rate',
      subtitle: 'Inventory Sold vs Amount Received',
      revenue: '$100,000',
      growth: 20,
    },
  ];
}
