import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { JanuaryPage} from '../pages/january/january';
import { SettingPage} from '../pages/setting/setting';
import { ListPage } from '../pages/list/list';
import { FebruaryPage } from '../pages/february/february';
import { MarchPage } from '../pages/march/march';
import {DetailsPage } from '../pages/details/details';
import { MonthPage } from '../pages/month/month';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { CalenderDataProvider } from '../providers/calender-data/calender-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ListPage,
    JanuaryPage,
    SettingPage,
    FebruaryPage,
    LoginPage,
    DetailsPage,
    MarchPage,
    MonthPage
    
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
    AboutPage,
    ListPage,
    JanuaryPage,
    SettingPage,
    FebruaryPage,
    LoginPage,
    DetailsPage,
    MarchPage,
    MonthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CalenderDataProvider
  ]
})
export class AppModule {


  
}
