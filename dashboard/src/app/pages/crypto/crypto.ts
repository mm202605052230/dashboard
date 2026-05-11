import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-crypto',
  standalone: true,
  template: `<div class="p-6"><h1 class="text-2xl font-bold text-gray-800">Crypto</h1></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Crypto {}
