import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // allowNewServer = false;
  serverCreationStatus = "No Server is Created!";
  serverName="";
  username="";
  servers=["TestServer","TestServer 2"];
  serverCreated=false;

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server Created:" + this.serverName;
  }
  onDeleteServer(){
    this.serverCreationStatus = "Server Deleted";
    this.serverName = '';
  }

  onUpdateServername(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ResetUser(){
    this.username='';
  }
}
