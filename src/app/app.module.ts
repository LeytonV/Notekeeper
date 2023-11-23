import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NoteviewComponent } from './components/noteview/noteview.component';
import { TrashComponent } from './pages/trash/trash.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { ActionNotificationComponent } from './components/action-notification/action-notification.component';
import { ColorselectorpopupComponent } from './components/colorselectorpopup/colorselectorpopup.component';
import { ColorselectoroptionComponent } from './components/colorselectoroption/colorselectoroption.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesComponent,
    NavbarComponent,
    NoteviewComponent,
    TrashComponent,
    ArchiveComponent,
    ActionNotificationComponent,
    ColorselectorpopupComponent,
    ColorselectoroptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
