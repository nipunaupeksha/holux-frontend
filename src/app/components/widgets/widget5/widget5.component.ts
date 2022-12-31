import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-widget5',
  templateUrl: './widget5.component.html',
  styleUrls: ['./widget5.component.scss'],
})
export class Widget5Component implements OnInit {
  @Input() items: number = 6
  constructor() {}

  ngOnInit(): void {}
}
