import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-widget7',
  templateUrl: './widget7.component.html',
  styleUrls: ['./widget7.component.scss'],
})
export class Widget7Component implements OnInit {
  items = [
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 2, name: 'Fried Rice', price: 250, stock: 3, options:'add' },
  ]
  constructor() {}

  ngOnInit(): void {}
}
