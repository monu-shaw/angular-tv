import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddchannelComponent } from './components/addchannel/addchannel.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TvComponent } from './pages/tv/tv.component';
import { authGuard } from './services/auth.guard';
import { secureGuard } from './services/guards/secure.guard';

const routes: Routes = [
  
  {path:'tv' , component:TvComponent},
  {path:'channel/:id' , component:ChannelComponent},
  { path: 'signin', component: SigninComponent , canActivate:[secureGuard]},
  { path: 'signup', component: SignupComponent , canActivate:[secureGuard]},
  { path: 'home', component: HomeComponent, canActivate: [authGuard],
  children:[
    {path:'add', component:AddnoteComponent},
    {path:'addchannel', component:AddchannelComponent}
  ]
  },
  { path: '', redirectTo:'/tv', pathMatch:'full'}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
