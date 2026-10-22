import { Routes } from '@angular/router';
import { PaginaInicial } from './components/screens/paginainicial/paginainicial';
import { Contador } from './components/screens/contador/contador';
import { Tarefas } from './components/screens/tarefas/tarefas';

export const routes: Routes = [
  { path: '', component: PaginaInicial },
  { path: 'contador', component: Contador },
  { path: 'tarefas', component: Tarefas }
];
