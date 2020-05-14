import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hello',
  templateUrl: './hello.component.html',
  styles: []
})
export class HelloComponent implements OnInit {
  text: string;

  constructor() { }

  ngOnInit(): void {
    this.text = 'hello works!';
  }

}
