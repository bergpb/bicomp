import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'livros', loadChildren: './livros/livros.module#LivrosPageModule' },
  { path: 'emprestimo', loadChildren: './emprestimo/emprestimo.module#EmprestimoPageModule' },
  { path: 'meus-livros', loadChildren: './meus-livros/meus-livros.module#MeusLivrosPageModule' },
  { path: 'meus-emprestimos', loadChildren: './meus-emprestimos/meus-emprestimos.module#MeusEmprestimosPageModule' },
  { path: 'solicitacoes', loadChildren: './solicitacoes/solicitacoes.module#SolicitacoesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
