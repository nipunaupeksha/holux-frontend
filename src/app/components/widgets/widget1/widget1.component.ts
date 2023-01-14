import { Component, OnInit } from '@angular/core'
import { Order } from 'src/app/interfaces/order.model'
import { OrderService } from 'src/app/services/order-service.service'

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss'],
})
export class Widget1Component implements OnInit {
  constructor(private orderService: OrderService) {}

  date = new Date()
  numberOfSales: number = 0
  allOrders: Order[] = []
  noOfSales: number = 0
  outlets = new Set()

  dropDownMenu: boolean = false

  ngOnInit(): void {
    this.orderService.getDailyOutletOrders(1, '2023').subscribe(
      (data: Order[]) => {
        this.allOrders = data
        this.noOfSales = this.allOrders.length
        for (let i = 0; i < this.allOrders.length; i++) {
          this.outlets.add(this.allOrders[i].outletname)
        }
      },
      (error) => {}
    )
  }

  showDropDown() {
    if (this.dropDownMenu) {
      this.dropDownMenu = false
    } else {
      this.dropDownMenu = true
    }
  }
}
