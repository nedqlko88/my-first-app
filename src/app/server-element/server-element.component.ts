import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None (Emulated, Native)
  // ViewEncapsulation.Emulated is the default if we chose None (it will remove attributes "_ngcontent-owd-c40" on the html
  // elements that holds the view encapsulation) and after that in this element.css file everything becomes global
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // decorator -> @Input() --> now every parent component that is hosting our element can see it
  // @Input('srvElement') - we can use alias and the same alias should be used for binding in the html
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  // @ContentChild wil refer to local reference at the content of the child in parent html
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called first');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ngOnChanges second');
  }

  ngOnInit(): void {
    console.log('ngOnInit called third');
    // we can access the header here it is not initialized (it is not rendered yet)
    console.log('Header : ' + this.header.nativeElement.textContent);
    console.log('ContentParagraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngdocheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit, called only once');
    console.log('ContentParagraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewChecked');
    // here we can access it
    console.log('Header : ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


}
