import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import {HttpClientModule} from '@angular/common/http';
import { AddnoteComponent } from './components/addnote/addnote.component'

import { FormsModule } from '@angular/forms';
import { AddchannelComponent } from './components/addchannel/addchannel.component';
import { TvComponent } from './pages/tv/tv.component';
import { ChannelComponent } from './pages/channel/channel.component';

// Video player

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgStreamingModule} from '@videogular/ngx-videogular/streaming';
import { HomeComponentEComm } from './ecommerce/home/home.component';
import { CheckoutComponent } from './ecommerce/checkout/checkout.component';
import { CategoryComponent } from './ecommerce/category/category.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './services/redux/slice/cart/slice';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    AddnoteComponent,
    AddchannelComponent,
    TvComponent,
    ChannelComponent,
    HomeComponentEComm,
    CheckoutComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    StoreModule.forRoot({'cart':cartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
