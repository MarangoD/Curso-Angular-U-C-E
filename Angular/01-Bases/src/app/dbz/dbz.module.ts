import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListPersonajesComponent } from './componentes/list-personajes/list-personajes.component';
import { AddCharacterComponent } from './componentes/add-character/add-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListPersonajesComponent,
    AddCharacterComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
