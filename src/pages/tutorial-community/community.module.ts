import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityPage } from './community';
//import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CommunityPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityPage),
    //TranslateModule.forChild()
  ],
  exports: [
    CommunityPage
  ]
})
export class CommunityPageModule { }
