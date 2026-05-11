import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Finance</h1>
      <router-outlet />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Finance {}
