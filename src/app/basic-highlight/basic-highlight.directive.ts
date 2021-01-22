import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    // when we put the name in [] we say to the compiler that we will use it like attribute directive
selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // if we use angular for service we may have not access to the DOM and it will give us error
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
