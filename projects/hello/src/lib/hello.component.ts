import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  text: string;

  constructor() { }

  ngOnInit(): void {
    this.text = 'hello works  again!';

    // setInterval(() => {
    //   this.text += Math.floor(Math.random());
    // });
  }

}
