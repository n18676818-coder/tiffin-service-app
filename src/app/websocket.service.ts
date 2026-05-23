import { Injectable } from '@angular/core';

import {
  Client,
  IMessage
} from '@stomp/stompjs';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  menuUpdates =
    new Subject<string>();

  private client!: Client;

  connect() {

    this.client = new Client({

      brokerURL: 'ws://localhost:8080/ws',

      reconnectDelay: 5000,

      debug: (str) => {
        console.log(str);
      }
    });

    this.client.onConnect = () => {

      console.log(
        'Connected to WebSocket'
      );

      this.client.subscribe(
        '/topic/orders',

        (message: IMessage) => {

          console.log(
            'LIVE MESSAGE:',
            message.body
          );

          // 🔥 notify Angular
          this.menuUpdates.next(
            message.body
          );
        }
      );
    };

    this.client.activate();
  }
}