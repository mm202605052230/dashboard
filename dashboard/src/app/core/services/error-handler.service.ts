import { Injectable, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  readonly lastError = signal<string | null>(null);

  handle(error: HttpErrorResponse): void {
    const message =
      error.status === 0
        ? 'Network error — check your connection'
        : `Request failed with status ${error.status}`;
    this.lastError.set(message);
    console.error('[HTTP Error]', error);
  }

  clear(): void {
    this.lastError.set(null);
  }
}
