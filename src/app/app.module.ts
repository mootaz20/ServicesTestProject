import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { UserDetailsComponent } from './header/admin/user-details/user-details.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { subscribeService } from './Services/Subscribe.service';
import { userService } from './Services/User.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// let subToken = new InjectionToken<subscribeService>('subscribeService');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    UserDetailsComponent,
    SidebarComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: subscribeService,useClass: subscribeService},userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
