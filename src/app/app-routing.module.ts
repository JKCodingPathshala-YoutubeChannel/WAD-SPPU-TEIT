import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component imports — zaruri hain routing ke liye
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/register', pathMatch: 'full' },  // Redirect to '/register' instead of '/registration'
  { path: 'register', component: RegistrationComponent },  // Keep this lowercase for consistency
  { path: 'login', component: LoginComponent },            // Path should be lowercase 'login'
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
