import { Component } from '@angular/core';
import { NavItem } from '../shared/components/nav-item/nav-item';

@Component({
  selector: 'app-side-menu',
  imports: [NavItem],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {}
