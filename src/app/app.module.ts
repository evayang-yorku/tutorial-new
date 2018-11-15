import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { ChatsPage } from '../pages/chats/chats';
import { PeerModule } from '../pages/peer/peer';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ResourcesPage } from '../pages/resources/resources';
import { MapsPage } from '../pages/maps/maps';
import { AboutUsPage } from '../pages/tutorial-about/about';
import { CommunityPage } from '../pages/tutorial-community/community';
import { InstitutionalPage } from '../pages/tutorial-institutional/institutional';
import { SearchPage } from '../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ChatsPage,
    PeerModule,
    TutorialPage,
    ResourcesPage,
    MapsPage,
    AboutUsPage,
    CommunityPage,
    InstitutionalPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ChatsPage,
    PeerModule,
    TutorialPage,
    ResourcesPage,
    MapsPage,    
    AboutUsPage,
    CommunityPage,
    InstitutionalPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
