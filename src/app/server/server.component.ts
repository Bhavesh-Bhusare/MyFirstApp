import { Component } from "@angular/core";

@Component({
    selector:'app-server', //by this name we will use this component in project
    templateUrl:'./server.component.html', //in this file we are going to write the code of server component
    styles: [`
        .online{
          color : white;  
        }
    `]

})

export class ServerComponent{
    //properties
    serverId: number = 10; //writing the type of comoponent 
    //serverId = 10; //both are same
    serverStatus: string = 'Offline'; //serverStatus = 'offline'

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    //defining the method or function
    getServerStatus(){
        return this.serverStatus;
    }

    //changing background color dynamically
    getcolor(){
         return this.serverStatus === 'Online' ? 'green' : 'red'; 
    }
}