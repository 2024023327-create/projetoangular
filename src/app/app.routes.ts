import { Routes } from '@angular/router';
import { Home } from './components/screens/home/home';
import { Contador } from './components/screens/contador/contador';
import { Tarefas } from './components/screens/tarefas/tarefas';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contador', component: Contador },
  { path: 'tarefas', component: Tarefas }
];
