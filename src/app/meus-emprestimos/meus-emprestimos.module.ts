import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MeusEmprestimosPage } from './meus-emprestimos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusEmprestimosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MeusEmprestimosPage]
})
export class MeusEmprestimosPageModule {}
