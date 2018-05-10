import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { VendorModule } from '@reaction/vendor';
import { environment } from '../environments/environment';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root.routing';
import { ReactionRouterSerializer, reducers, metaReducers } from './state';
import { MainEffects } from './state/main.effects';
import { DatumModule } from '@reaction/datum';

@NgModule({
  imports: [
    // @npm vendor modules
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    NxModule.forRoot(),
    // @reaction modules
    VendorModule,
    RootRoutingModule,
    // @ngrx redux store
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([MainEffects]),
    StoreRouterConnectingModule,
    DatumModule,
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  providers: [MainEffects, { provide: RouterStateSerializer, useClass: ReactionRouterSerializer }],
})
export class RootModule {}
