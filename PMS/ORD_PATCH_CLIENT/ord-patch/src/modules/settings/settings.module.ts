/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule,  DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as settingsComponents from './components';

/* Containers */
import * as  settingsContainers from './containers';

/* Services */
import * as settingsServices from './services';
import { InterfaceSettingsComponent } from './components/interface_settings/interface-settings.component';
import { ServeurSettingsComponent } from './components/serveur_settings/serveur-settings.component';
import { UserSettingsComponent } from './components/user_settings/user-settings.component';
import { MatTabsModule } from '@angular/material/tabs'; 


@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    MatTabsModule,

  ],
  providers: [
    DecimalPipe,
    ...settingsServices.services],
  declarations: [...settingsContainers.containers, ...settingsComponents.components, InterfaceSettingsComponent, ServeurSettingsComponent, UserSettingsComponent],
  exports: [...settingsContainers.containers, ...settingsComponents.components],
})
export class SettingsModule { }
