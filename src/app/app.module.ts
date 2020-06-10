import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'; // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
    HttpMethod, NG_ENTITY_SERVICE_CONFIG, NgEntityServiceGlobalConfig
} from '@datorama/akita-ng-entity-service';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { OnboardingComponent } from './onboarding/on-boarding.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OnboardingComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools,
    AkitaNgRouterStoreModule,
    AngularFireModule.initializeApp(environment.firebase), // 追加
    AngularFirestoreModule,  // 追加
    AngularFireAuthModule,  // 追加
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [{
    provide: NG_ENTITY_SERVICE_CONFIG,
    useValue: {
        baseUrl: 'https://jsonplaceholder.typicode.com',
        httpMethods: {
          PUT: HttpMethod.PATCH
        }
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
