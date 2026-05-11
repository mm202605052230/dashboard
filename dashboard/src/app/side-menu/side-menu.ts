import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavItem } from '../shared/components/nav-item/nav-item';
import { NavSubItem } from '../shared/components/nav-sub-item/nav-sub-item';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [NavItem, NavSubItem],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu {}
