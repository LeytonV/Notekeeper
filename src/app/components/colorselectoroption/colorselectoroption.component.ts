import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-colorselectoroption',
  templateUrl: './colorselectoroption.component.html',
  styleUrls: ['./colorselectoroption.component.css']
})
export class ColorselectoroptionComponent {

  @Input()
  colorHex:string = "";
  @Input()
  colorIsSelected:boolean = false;

  @Output()
  onDeselect = new EventEmitter();
  @Output()
  onSelect = new EventEmitter<string>();



}
