import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstitutionalPage } from './institutional';
//import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InstitutionalPage,
  ],
  imports: [
    IonicPageModule.forChild(InstitutionalPage),
    //TranslateModule.forChild()
  ],
  exports: [
    InstitutionalPage
  ]
})
export class TutorialPageModule { }
