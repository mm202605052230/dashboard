import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-sub-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-sub-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavSubItem {
  label = input.required<string>();
  route = input.required<string>();
}
