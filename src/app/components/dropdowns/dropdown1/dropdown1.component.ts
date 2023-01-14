import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core'

@Component({
  selector: 'app-dropdown1',
  templateUrl: './dropdown1.component.html',
  styleUrls: ['./dropdown1.component.scss'],
})
export class Dropdown1Component implements OnInit {
  @Input('items') items
  @Output('result') result = new EventEmitter<string>()
  @ViewChildren('radiobuttons') radiobuttons: QueryList<ElementRef>

  selectedItem: string = ''
  constructor() {}

  ngOnInit(): void {}

  getSelectedCheckBoxes() {
    this.radiobuttons.forEach((element) => {
      if (element.nativeElement.selected) {
        this.selectedItem = element.nativeElement.id
      }
    })
    this.result.emit(this.selectedItem)
  }
}
