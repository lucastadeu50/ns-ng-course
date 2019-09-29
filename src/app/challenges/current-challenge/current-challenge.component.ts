import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { Page } from 'tns-core-modules/ui/page/page';
import { Transition } from 'tns-core-modules/ui/transition/transition';

declare var android: any;

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
  moduleId: module.id
})
export class CurrentChallengeComponent {
  constructor(private router: RouterExtensions) {}

  onEdit() {
    this.router.navigate(['/edit-challenge'], {transition: { name: 'slideLeft'}}) ;
  }



}
