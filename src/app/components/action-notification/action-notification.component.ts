import { Component } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { NotificationService } from 'src/app/services/notificationservice/notificationservice.service';

@Component({
  selector: 'app-action-notification',
  templateUrl: './action-notification.component.html',
  styleUrls: ['./action-notification.component.css']
})
export class ActionNotificationComponent
{
  notificationSubscription: Subscription;
  constructor(public notifications:NotificationService)
  {
    this.notificationSubscription = notifications.notificationCreated$.subscribe( notificationString => {
      this.showNotification(notificationString);
    });
  }

  isShowing:boolean = false;
  notificationText:string = "";
  displayClass:string = "";
  showNotification(text:string):void
  {
    this.notificationText = text;
    this.displayClass = "show";
    this.isShowing = true;
    timer(10000).subscribe(() => {
      this.displayClass = "";
    });
  }

}
