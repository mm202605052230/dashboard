import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavItem {
  label = input.required<string>();
  route = input.required<string>();
}
