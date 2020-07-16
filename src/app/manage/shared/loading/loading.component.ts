import { Component, OnInit } from '@angular/core';
import { LoadingService } from "./loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loading: boolean = false;
  constructor(
    private LoadingService: LoadingService,
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.loading = this.LoadingService.getLoading();
  }



}
