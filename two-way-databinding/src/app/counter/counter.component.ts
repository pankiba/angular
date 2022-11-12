import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() 
  count: number = 0;

  @Output()
  countChange: EventEmitter<number> = new EventEmitter<number>();

  incrementCount() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrementCount() {
    this.count--;
  }

}
