import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutUsPage } from './about';
//import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AboutUsPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutUsPage),
    //TranslateModule.forChild()
  ],
  exports: [
    AboutUsPage
  ]
})
export class AboutUsPageModule { }
