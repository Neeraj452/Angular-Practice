import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RauterUsersComponent } from './ngsyntax/routing/rauter-users/rauter-users.component';
import { AdminComponent } from './ngsyntax/routing/admin/admin.component';
import { PageNotFoundComponent } from './ngsyntax/routing/page-not-found/page-not-found.component';
const routes: Routes = [{
path:"users",
component:RauterUsersComponent
},
{
  path:"admin",
  component:AdminComponent
  },{
    path:"**",
    component:PageNotFoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
