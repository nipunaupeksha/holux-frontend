import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'

import { Order } from '../interfaces/order.model'

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private BACKEND_URL = 'http://localhost:8000'

  private HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })

  constructor(private http: HttpClient) {}

  public getDailyOutletOrders(id: number, date: string) {
    return this.http
      .post(this.BACKEND_URL + '/orders/get-daily-orders', {
        id: id,
        date: date,
      })
      .pipe(
        map((res) => {
          const orderArr: Order[] = []

          for (const key in res) {
            if (key == 'data') {
              orderArr.push(...res[key])
            }
          }
          return orderArr
        })
      )
  }
}
