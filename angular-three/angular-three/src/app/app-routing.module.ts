import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UnityComponent } from "./unity/unity.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/splash", pathMatch: "full" },
  { path: "unity", component: UnityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
