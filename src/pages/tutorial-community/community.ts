import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { PeerModule } from '../peer/peer';
import { ChatsPage } from '../chats/chats';
import { ResourcesPage } from '../resources/resources';
import { SearchPage } from '../search/search';
//import { RootScope } from '../../providers/root-scope';
//import { AuthService } from '../../providers/auth-service';

@Component({
    selector: 'page-community-ionic',
    templateUrl: 'community.html',
})
export class CommunityPage {
    toPeer: any;
    toChats: any;
    toResources: any;
    toSearch: any;
    constructor(public navController: NavController) {
      this.toPeer = PeerModule;
      this.toChats = ChatsPage;
      this.toResources = ResourcesPage;
      this.toSearch = SearchPage;

    //infoPage: any;

    // slides = [
    //     {
    //         description: "If you have just finished registering <b>PLEASE NOW, LOG-IN!</b>",
    //         image: "assets/img/1.png",
    //     },
    //     {
    //         description: "<ol><li>Campus Maps</li><li>Resources in your community</li><li>Search for Indigenous People</li><li>Chats</li><li>Forums</li><li>Frequently Asked Questions</li><li>Events</li><li>Immediate crisis help ( if necessary)</li></ol>",
    //         image: "assets/img/2.png",
    //     },
    //     {
    //         description: "<ol><li>Native Youth Crisis Hotline (Emergency):</li><li>Anishnawbe Health Mental Health Crisis Line:</li><li>Willow Place Crisis Line</li><li>911 Emergency line</li><li>Your Mentor (Eagle / Yellow)</li><li>Your Guide (Owl / Red)</li></ol>",
    //         image: "assets/img/3.png",
    //     },
    //     {
    //         description: "Our biggest commitment is to keep this space as safe as possible.<br />In order to succeed in our objective, we haveincorporated traditional teachings of Healing Circle inside the Aoo(the four dimensions of the human being:Emotional, Physical, Intellectual andSpiritual Dimensions.)",
    //         image: "assets/img/4.jpg",
    //     }
    // ];

    // constructor(public navCtrl: NavController, public navParams: NavParams, private rootScope: RootScope, private authService: AuthService) {
    //     this.infoPage = this.rootScope.pagesInit[9];
    // }

    // ionViewDidLoad() {
    //     console.log('ionViewDidLoad TutorialPage');
    // }

    // ionViewDidEnter() {
    //     this.rootScope.currentPage = this.infoPage;
    // }
    }
}
