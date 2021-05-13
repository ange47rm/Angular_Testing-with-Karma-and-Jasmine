import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})

export class AlertButtonComponent implements OnInit {

  // content: Observable<any>; 

  content: string = "You have been warned";
  hideContent: boolean = true;
  severity: number = 423;

  constructor(private msgService: MessageService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  // run the toggle method after a 500 ms rxjs timer runs out
  toggleAsync() {
    timer(500).subscribe(() => {
      this.toggle();
    });
  }
}