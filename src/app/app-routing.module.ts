import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddcatagaryComponent } from './admin/catagary/addcatagary/addcatagary.component';
import { CatagaryComponent } from './admin/catagary/catagary.component';
import { ViewcatagaryComponent } from './admin/catagary/viewcatagary/viewcatagary.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddproductComponent } from './admin/products/addproduct/addproduct.component';
import { ProductsComponent } from './admin/products/products.component';
import { ViewcustomersComponent } from './admin/viewcustomers/viewcustomers.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { ProfileComponent } from './afterlogin/profile/profile.component';
import { ViewproductsComponent } from './afterlogin/viewproducts/viewproducts.component';
import { AboutComponent } from './navigate/about/about.component';
import { ContactComponent } from './navigate/contact/contact.component';
import { HomeComponent } from './navigate/home/home.component';
import { LoginComponent } from './navigate/login/login.component';
import { NavigateComponent } from './navigate/navigate.component';
import { RegiComponent } from './navigate/regi/regi.component';
import { ViewproductComponent } from './admin/products/viewproduct/viewproduct.component';
import { BookproductComponent } from './afterlogin/bookproduct/bookproduct.component';
import { ViewbookingComponent } from './admin/viewbooking/viewbooking.component';
import { ViewbookComponent } from './afterlogin/viewbook/viewbook.component';

const routes: Routes = [
{ path:'',redirectTo:'/navigate',pathMatch:'full'},
{path:'navigate',component:NavigateComponent,
children:
[
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
]
},
{
  path:'afterlogin',component:AfterloginComponent,
  children:
  [
    {
      path:'',component:HomeComponent
    } ,
    {
      path:'bookproduct',component:BookproductComponent
    },
    {
      path:'viewproducts',component:ViewproductsComponent
    },
    {
      path:'viewbookings',component:ViewbookComponent
    },
    {
      path:'profile',component:ProfileComponent
    }
  ]
},
{
  path:'admin',component:AdminComponent,
  children:
  [
    {
      path:'',component:DashboardComponent
    },
    {
      path:'catagiry',component:CatagaryComponent,
      children:
      [
        {
          path:'addcatagary',component:AddcatagaryComponent
        },
        {
          path:'viewcatagary',component:ViewcatagaryComponent
        }
      ]
    },
    {
      path:'products',component:ProductsComponent,
      children:
      [
        {
          path:'addproduct',component:AddproductComponent
        },
        {
          path:'viewproduct',component:ViewproductComponent
        }
        
      ]
    },
    {
      path:'viewbookings',component:ViewbookingComponent
    },
    {
      path:'viewcustomers',component:ViewcustomersComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
