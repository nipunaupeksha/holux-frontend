import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-widget6',
  templateUrl: './widget6.component.html',
  styleUrls: ['./widget6.component.scss'],
})
export class Widget6Component implements OnInit {
  items = [
    { code: 1, name: 'Fish Roll', price: 160, stock: 10, options:'add' },
    { code: 2, name: 'Fried Rice', price: 250, stock: 3, options:'add' },
  ]
  constructor() {}

  ngOnInit(): void {}
}
