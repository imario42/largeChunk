import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleNameRoutingModule } from './module-name-routing.module';
import { ModuleNameComponent } from './module-name.component';
import {MonacoEditorModule} from "ngx-monaco-editor";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ModuleNameComponent
  ],
  imports: [
    CommonModule,
    ModuleNameRoutingModule,
    MonacoEditorModule,
    FormsModule
  ]
})
export class ModuleNameModule { }
