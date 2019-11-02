import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LivrosPage } from './livros.page';
import { LivrosPipe } from '../livros.pipe';

const routes: Routes = [
  {
    path: '',
    component: LivrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LivrosPage, LivrosPipe]
})
export class LivrosPageModule {}
