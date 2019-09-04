import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { appRoutes } from './routes/routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BlogComponent,
    FooterComponent,
    ResumeComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
