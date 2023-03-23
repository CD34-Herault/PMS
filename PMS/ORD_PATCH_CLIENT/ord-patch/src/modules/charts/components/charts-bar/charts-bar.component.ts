import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';

import Chart from 'chart.js/auto'

@Component({
    selector: 'sb-charts-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-bar.component.html',
    styleUrls: ['charts-bar.component.scss'],
})
export class ChartsBarComponent implements OnInit, AfterViewInit {
    @ViewChild('myBarChart') myBarChart!: ElementRef;
    chart!: Chart;


    constructor() {
        
    }
    ngOnInit() {
        
    }

    ngAfterViewInit() {
  
        this.chart = new Chart(this.myBarChart.nativeElement, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Revenue',
                        backgroundColor: 'rgba(2,117,216,1)',
                        borderColor: 'rgba(2,117,216,1)',
                        data: [4215, 5312, 6251, 7841, 9821, 14984],
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: 
                        {
                            time: {
                                unit: 'month',
                            },
                            grid: {
                                display: false,
                            },
                            ticks: {
                                maxTicksLimit: 6,
                            },
                        },
                    
                    yAxes: 
                        {
                            ticks: {

                                maxTicksLimit: 5,
                            },
                            min: 0,
                            max: 15000,
                            grid: {
                                display: true,
                            },
                        },
                        
                    
                },
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                
            },
            
        });
       
    }
}
