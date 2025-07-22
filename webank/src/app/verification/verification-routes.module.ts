import { NgModule } from "@angular/core";
import { VerificationComponent } from "./verification.component";
import { RouterModule, Routes } from "@angular/router";

const route: Routes=[
    {path:'' , component:VerificationComponent}
];

@NgModule(
{
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
}
)
export class verificationRoutes{

}