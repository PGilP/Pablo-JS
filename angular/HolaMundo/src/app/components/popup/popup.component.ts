import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  public state: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public open(){
    this.state = true;
  }

  public close(){
    this.state = false;
  }

}
