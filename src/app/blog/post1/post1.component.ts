import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss']
})
export class Post1Component implements OnInit {

  isCliked = false;
  constructor(private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
  }

  installAngular=`
  npm install -g @angular/cli
  `;

  setExecutionPolicy=`
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
  `;

  startedProject=`
  ng new my-app
  `;

  cancelIsCliked(){
    this.isCliked = true;
    setTimeout(() => {
      this.isCliked = false;
    }, 2000);
  }
  copyText() {
    this.cancelIsCliked();
    this.clipboardApi.copyFromContent(this.installAngular);
  }
  copyText2() {
    this.cancelIsCliked();
    this.clipboardApi.copyFromContent(this.setExecutionPolicy);
  }
  copyText3() {
    this.cancelIsCliked();
    this.clipboardApi.copyFromContent(this.startedProject);
  }
}
