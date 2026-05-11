import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { SideMenu } from './side-menu/side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, SideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
