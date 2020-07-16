import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: boolean = false;
  constructor() { }

  openLoading(): void {
    this.loading = true;
  }

  closeLoading(): void {
    this.loading = false;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
