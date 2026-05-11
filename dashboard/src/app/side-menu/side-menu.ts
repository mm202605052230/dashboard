import { Component } from '@angular/core';
import { NavItem } from '../shared/components/nav-item/nav-item';
import { NavSubItem } from '../shared/components/nav-sub-item/nav-sub-item';

@Component({
  selector: 'app-side-menu',
  imports: [NavItem, NavSubItem],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {}
