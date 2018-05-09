import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { TrophiesPage } from '../trophies/trophies';



@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = TrophiesPage;
  tab4Root: any = NotificationsPage;
  tab5Root: any = ProfilePage;
  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToSearch(params){
    if (!params) params = {};
    this.navCtrl.push(SearchPage);
  }goToTrophies(params){
    if (!params) params = {};
    this.navCtrl.push(TrophiesPage);
  }goToNotifications(params){
    if (!params) params = {};
    this.navCtrl.push(NotificationsPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }
}
