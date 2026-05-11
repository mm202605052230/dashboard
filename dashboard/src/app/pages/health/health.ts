import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-health',
  standalone: true,
  template: `<div class="p-6"><h1 class="text-2xl font-bold text-gray-800">Health</h1></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Health {}
