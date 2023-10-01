import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RauterUsersComponent } from './ngsyntax/routing/rauter-users/rauter-users.component';
import { AdminComponent } from './ngsyntax/routing/admin/admin.component';
const routes: Routes = [{
path:"users",
component:RauterUsersComponent
},
{
  path:"admin",
  component:AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
