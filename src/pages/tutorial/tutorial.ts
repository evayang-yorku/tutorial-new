import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { CommunityPage } from '../tutorial-community/community';
import { InstitutionalPage } from '../tutorial-institutional/institutional';
import { AboutUsPage } from '../tutorial-about/about';


@Component({
  selector: 'page-tutorial-ionic',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  toProfile: any;
  toCommunity: any;
  toInstitutional: any;
  toAbout: any;
  constructor(public navController: NavController) {
    this.toProfile = ProfilePage;
    this.toCommunity = CommunityPage;
    this.toInstitutional = InstitutionalPage;
    this.toAbout = AboutUsPage;


  }
}
