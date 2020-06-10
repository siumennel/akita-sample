import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/on-boarding.component';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: 'movie/:id', component: AppComponent },
  { path: 'boarding', component: OnboardingComponent },
  { path: 'story', component: StoryComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
