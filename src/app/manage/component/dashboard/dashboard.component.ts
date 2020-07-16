import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { SidebarService } from '../sidebar/sidebar.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sidebar: any = 'home';
  faPlus = faPlus;
  lineChartData: ChartDataSets[] = [
    { data: [150, 120, 50, 125, 110, 115, 90, 95, 75, 85, 70, 50], label: '근로계약', fill: false },
    { data: [85, 72, 78, 75, 77, 75, 125, 80, 75, 78, 72, 90], label: '2020년 연봉계약', fill: false },
    { data: [69, 90, 140, 85, 72, 78, 50, 72, 78, 75, 77, 70], label: '계약', fill: false }
  ];

  lineChartLabels: Label[] = ['11월', '12월', '01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월'];

  lineChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
      align: "end",
      rtl: false,
    },
    title: {
      display: false,
      text: 'Chart.js Polar Area Chart'
    },
    elements: {
      line: {
        tension: 0.000001
      }
    },
    plugins: {
      filler: {
        propagate: true
      },
      'samples-filler-analyser': {
        target: 'chart-analyser'
      }
    }
  };

  lineChartColors: Color[] = [
    // {
    //   borderColor: 'black',
    //   backgroundColor: 'rgba(255,255,0,0.28)',
    // },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(
    private sidebarService: SidebarService,
  ) {
    this.sidebarService.setManuActive(this.sidebar);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sidebarService.setManuActive(this.sidebar);
  }

}
