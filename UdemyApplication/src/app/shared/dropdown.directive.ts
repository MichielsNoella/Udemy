import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
  })
export class DropdownDirective {

  @HostBinding('class.open')isOpen = false;

  // closing the dropdown by clicking on the dropdown button
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  // a dropdown can also be closed by a click anywhere outside
  // (which also means that a click on one dropdown closes any other one),
  // (placing the listener not on the dropdown, but on the document):
  // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //   this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  // }
  constructor(private elRef: ElementRef) {}

}
