import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  constructor() {
    console.log('construct');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('on Changes');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngoninit');
  }
  ngDoCheck() {
    console.log('ngDOCHeck');
  }
  ngAfterContentInit() {
    console.log('ngDOCHecngAfterContentInit');

  }
}
