import { Component } from '@angular/core';
import { NoteService } from './services/noteservice/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notekeeper';

  constructor(public noteService:NoteService)
  {

  }

  fetchNotesFromLocalStorage()
  {
    this.noteService.fetchNoteData();
  }
}
