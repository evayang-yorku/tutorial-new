import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { PeerModule } from '../pages/peer/peer';
import { ChatsPage } from '../pages/chats/chats';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ResourcesPage } from '../pages/resources/resources';
import { MapsPage } from '../pages/maps/maps';
import { SearchPage } from '../pages/search/search';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make TutorialPage the root (or first) page
  rootPage = TutorialPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Peer Support', component: PeerModule },
      { title: 'Chats', component: ChatsPage },
      { title: 'Tutorial', component: TutorialPage },
      { title: 'Resources', component: ResourcesPage },
      { title: 'Maps', component: MapsPage },
      { title: 'Search', component: SearchPage }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
