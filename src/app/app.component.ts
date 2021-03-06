import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';


// import { FebruaryPage } from '../pages/february/february';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { MarchPage } from '../pages/march/march';
import { SettingPage } from '../pages/setting/setting';

import { MonthPage } from '../pages/month/month';// import { FebruaryPage} from  '../pages/february/february';
/* */
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl:MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' },
     { title: 'Bookmark', component: ListPage, icon:"bookmark" },
      { title: 'About', component: AboutPage, icon:"info" },
      { title: 'Login', component: LoginPage, icon:"person" }
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  navHomePage(){
    this.nav.setRoot(HomePage);
    this.menuCtrl.toggle();
  }

    navMarchPage(){
    this.nav.setRoot(MarchPage);
    this.menuCtrl.toggle();
  }
  navAboutPage(){
    this.nav.setRoot(AboutPage);
    this.menuCtrl.toggle();
    
  }
 navMonthPage(){
    this.nav.setRoot(MonthPage);
    this.menuCtrl.toggle();
  }
  
 navSettingPage(){
  this.nav.setRoot(SettingPage);
  this.menuCtrl.toggle();
}
}
