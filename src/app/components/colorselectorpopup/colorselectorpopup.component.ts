import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/model/Note';

@Component({
  selector: 'app-colorselectorpopup',
  templateUrl: './colorselectorpopup.component.html',
  styleUrls: ['./colorselectorpopup.component.css']
})
export class ColorselectorpopupComponent {

  colors:string[] = ["#bd2f2f", "#bd742f", "#63bd2f", "#2fbd82", "#2f90bd", "#2f34bd", "#a32fbd"];

  @Input()
  referencedNote:Note = new Note("default", "default");

  @Output()
  onSelectColor = new EventEmitter<string>();
  @Output()
  onClearColor = new EventEmitter();

  log(t:string):void
  {
    console.log(t);
  }
}
