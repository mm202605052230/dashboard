import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { SideMenu } from './side-menu/side-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
