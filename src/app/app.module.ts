import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';




import { ReactiveFormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AudiolistComponent } from './audiolist/audiolist.component';
import { AddAudioComponent } from './add-audio/add-audio.component';
import { EditAudiosComponent } from './edit-audios/edit-audios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserAudioDetailsComponent } from './user-audio-details/user-audio-details.component';
import { UserAudioSearchComponent } from './user-audio-search/user-audio-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// import {ActivatedRoute} from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminhomeComponent,
    HomeComponent,
    AudiolistComponent,
    AddAudioComponent,
    EditAudiosComponent,
    DashboardComponent,
    UserhomeComponent,
    UserAudioDetailsComponent,
    UserAudioSearchComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    // ActivatedRoute
  ],

  providers: [MyserviceService],
  bootstrap: [AppComponent]

})

export class AppModule { }