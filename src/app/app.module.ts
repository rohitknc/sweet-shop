import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './navigate/about/about.component';
import { ContactComponent } from './navigate/contact/contact.component';
import { RegiComponent } from './navigate/regi/regi.component';
import { LoginComponent } from './navigate/login/login.component';
import { HomeComponent } from './navigate/home/home.component';
import { NavigateComponent } from './navigate/navigate.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { ProfileComponent } from './afterlogin/profile/profile.component';
import { ViewproductsComponent } from './afterlogin/viewproducts/viewproducts.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { CatagaryComponent } from './admin/catagary/catagary.component';
import { ViewcustomersComponent } from './admin/viewcustomers/viewcustomers.component';
import { AddproductComponent } from './admin/products/addproduct/addproduct.component';
import { ViewcatagaryComponent } from './admin/catagary/viewcatagary/viewcatagary.component';
import { AddcatagaryComponent } from './admin/catagary/addcatagary/addcatagary.component';
import { NavigateService } from './navigate/navigate.service';
import {HttpClientModule} from '@angular/common/http';
import { ViewproductComponent } from './admin/products/viewproduct/viewproduct.component';
import { BookproductComponent } from './afterlogin/bookproduct/bookproduct.component';
import { ViewbookingComponent } from './admin/viewbooking/viewbooking.component';
import { ViewbookComponent } from './afterlogin/viewbook/viewbook.component';

const routes:Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'Regi',component:RegiComponent
  },
  {
    path:'login',component:LoginComponent
  }
  ];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    RegiComponent,
    LoginComponent,
    HomeComponent,
    NavigateComponent,
    AfterloginComponent,
    ProfileComponent,
    ViewproductsComponent,
    AdminComponent,
    DashboardComponent,
    ProductsComponent,
    CatagaryComponent,
    ViewcustomersComponent,
    AddproductComponent,
    ViewcatagaryComponent,
    AddcatagaryComponent,
    ViewproductComponent,
    BookproductComponent,
    ViewbookingComponent,
    ViewbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NavigateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
