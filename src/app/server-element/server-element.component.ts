import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragrph: ElementRef;
  constructor() {
    console.log('construct');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('on Changes');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngoninit');
    console.log('textcontent', this.header.nativeElement.textContent);
    console.log('textcontent of paragraph', this.paragrph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('ngDOCHeck');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit');
    console.log('textcontent of paragraph', this.paragrph.nativeElement.textContent);

  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('textcontentAfter', this.header.nativeElement.textContent);

  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
