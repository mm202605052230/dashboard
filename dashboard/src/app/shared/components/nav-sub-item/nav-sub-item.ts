import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-sub-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-sub-item.html',
})
export class NavSubItem {
  label = input.required<string>();
  route = input.required<string>();
}
