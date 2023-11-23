import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { TrashComponent } from './pages/trash/trash.component';
import { ArchiveComponent } from './pages/archive/archive.component';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'trash',
    component: TrashComponent
  },
  {
    path: 'archive',
    component: ArchiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
