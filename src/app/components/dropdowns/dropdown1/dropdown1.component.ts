import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { elementAt } from 'rxjs'

@Component({
  selector: 'app-dropdown1',
  templateUrl: './dropdown1.component.html',
  styleUrls: ['./dropdown1.component.scss'],
})
export class Dropdown1Component implements OnInit {
  @Input('items') items
  @Output('result') result
  selectedCheckBoxes = new Set()
  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>
  constructor() {}

  ngOnInit(): void {}

  resetCheckBoxes() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false
    })
  }

  getSelectedCheckBoxes() {
    let temporarySet = new Set()
    this.checkboxes.forEach((element) => {
      if (element.nativeElement.checked) {
        temporarySet.add(element.nativeElement.value)
      }
    })
    this.selectedCheckBoxes = temporarySet
    console.log(this.selectedCheckBoxes)
  }
}
