import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JanuaryPage} from '../pages/january/january';
import { ListPage } from '../pages/list/list';
import { FebruaryPage } from '../pages/february/february';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { CalenderDataProvider } from '../providers/calender-data/calender-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    JanuaryPage,
    FebruaryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    JanuaryPage,
    FebruaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CalenderDataProvider
  ]
})
export class AppModule {}
