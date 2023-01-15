import { Component, Input, OnInit } from '@angular/core'
import { AnnualSales } from 'src/app/interfaces/annualsales.model'
import { OrderService } from 'src/app/services/order-service.service'

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss'],
})
export class Widget2Component implements OnInit {
  @Input() chartColor: string = ''
  @Input() chartHeight: string = '150px'

  currentYear = new Date().getFullYear()
  selectedAnnualSales: number[] = []
  sumOfSales: number = 0

  chartOptions: any = {}

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAnnualSales().subscribe(
      (data: AnnualSales[]) => {
        let annualSales = data
        for (let i = 0; i < annualSales.length; i++) {
          if (annualSales[i].year == this.currentYear.toString()) {
            this.sumOfSales += annualSales[i].sum
            this.selectedAnnualSales.push(annualSales[i].sum)
          }
        }
        while (this.selectedAnnualSales.length != 12) {
          this.selectedAnnualSales.push(0)
        }
      },
      (error) => {}
    )

    console.log(this.selectedAnnualSales[0])
    console.log(this.selectedAnnualSales)

    this.chartOptions = getChartOptions(
      this.chartHeight,
      this.chartColor,
      this.selectedAnnualSales
    )
  }
}

function getChartOptions(chartHeight: string, chartColor: string, data: number[]) {
  const labelColor = '#000'
  const baseColor = '#3699ff'
  const borderColor = '#3699ff'
  const secondaryColor = '#f1faff'

  return {
    series: [
      {
        name: 'Net Profit',
        data: data,
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return '$' + val + ' revenue'
        },
      },
    },
    colors: [baseColor],
    grid: {
      padding: {
        top: 10,
      },
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}
