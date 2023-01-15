import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
import{ AudiolistComponent} from './audiolist/audiolist.component';
import {AddAudioComponent} from './add-audio/add-audio.component';
import {EditAudiosComponent} from './edit-audios/edit-audios.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import { UserhomeComponent} from './userhome/userhome.component';
import {UserAudioDetailsComponent} from './user-audio-details/user-audio-details.component';
import{UserAudioSearchComponent} from './user-audio-search/user-audio-search.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';




const routes: Routes = [

       {path:'' , component:HomeComponent,canActivate:[AuthGuard]},
       {path:'login' , component:LoginComponent},
       {path:'register' , component:RegisterComponent},
       {path:'adminhome' , component:AdminhomeComponent,canActivate:[AuthGuard]},
       {path:'audiolist',component:AudiolistComponent,canActivate:[AuthGuard]},
       {path:'add-audio', component:AddAudioComponent,canActivate:[AuthGuard]},
       {path:'edit-audio', component:EditAudiosComponent,canActivate:[AuthGuard]},
       {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
       {path:'userhome', component:UserhomeComponent,canActivate:[AuthGuard]},
       {path:'user-audio-details', component:UserAudioDetailsComponent,canActivate:[AuthGuard]},
       {path:'user-audio-search', component:UserAudioSearchComponent,canActivate:[AuthGuard]},
       

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
