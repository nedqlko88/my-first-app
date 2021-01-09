import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // - if we use this method we select it like element style <app-servers></app-servers>
  // selector: '[app-servers]',  - if we use this method we select it by attribute -> <div app-servers></div>
  // selector: '.app-servers',  // if we use this method we select it like a class -> <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // onUpdateServerName(event: Event) {
    //     this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = event.target.value;
  }
}
