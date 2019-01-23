import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faSignInAlt, faEnvelope, faPlusCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from '../app/features/home/home.component';
import { LoginComponent } from '../app/features/login/login.component';
import { BracketComponent } from './features/bracket/bracket.component';
import { FeaturesComponent } from './features/features.component';
import { TeamRegistrationComponent } from './features/team-registration/team-registration.component';
import { TournamentRegistrationComponent } from './features/tournament-registration/tournament-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleComponent } from './features/schedule/schedule.component';
import { SliderComponent } from './shared/components/slider/slider.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    BracketComponent,
    FeaturesComponent,
    TeamRegistrationComponent,
    TournamentRegistrationComponent,
    ScheduleComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/api/authenticate']
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TeamRegistrationComponent
  ]
})
export class AppModule { 
  constructor() {
    // Add an icon to the library for convenient access in other components.
    library.add(faSearch, faSignInAlt, faCaretDown, faEnvelope, faFacebook, faTwitter, faInstagram, faGooglePlus, faPlusCircle);
  }
}
