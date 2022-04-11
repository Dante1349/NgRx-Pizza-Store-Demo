import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import { HomeComponent } from './pages/home/home.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {effects, reducers} from "./store/AppStateModel";
import {EffectsModule} from "@ngrx/effects";
import { ProductComponent } from './components/product/product.component';
import { PricePipe } from './pipes/price.pipe';
import { SettingsComponent } from './components/settings/settings.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    PricePipe,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
    NoopAnimationsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
