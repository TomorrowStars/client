import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../shared/web-socket.service';

@Component({
  selector: 'app-web-scoket',
  templateUrl: './web-scoket.component.html',
  styleUrls: ['./web-scoket.component.css']
})
export class WebScoketComponent implements OnInit {

  constructor(private wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.createObservableSocket("ws://localhost:8085")
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log("流已经结束。")

    );
  }

  sendMessageToServer(){
    this.wsService.sendMessage("Hello From Client");
  }
}
