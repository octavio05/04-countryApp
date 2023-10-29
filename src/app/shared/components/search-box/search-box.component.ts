import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder:string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  emitValue(term: string) {

    if (term === '') return;

    this.onValue.emit(term);

  }

}
