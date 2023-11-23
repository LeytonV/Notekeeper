import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router)
  {

  }

  tabClass(routes:string[]):boolean
  {
    var foundRoute = false;
    routes.forEach(element => {
      if(element == "hi")
      {
        foundRoute = true;
      }
    });
    
    return foundRoute;
  }


}
