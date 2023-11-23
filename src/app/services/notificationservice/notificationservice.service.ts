import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSource = new Subject<string>();
  notificationCreated$ = this.notificationSource.asObservable();


  createNotification(text:string):void
  {
    this.notificationSource.next(text);
  }
}
