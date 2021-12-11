import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleNameComponent } from './module-name.component';

const routes: Routes = [{ path: 'page', component: ModuleNameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleNameRoutingModule { }
