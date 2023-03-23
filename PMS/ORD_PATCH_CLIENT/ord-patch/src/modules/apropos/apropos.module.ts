/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule,  DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as aproposComponents from './components';

/* Containers */
import * as  aproposContainers from './containers';

/* Services */
import * as aproposServices from './services';

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    
  ],
  providers: [
    DecimalPipe,
    ...aproposServices.services],
  declarations: [...aproposContainers.containers, ...aproposComponents.components],
  exports: [...aproposContainers.containers, ...aproposComponents.components],
})
export class AproposModule { }
