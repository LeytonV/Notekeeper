import { Component } from '@angular/core';
import { Note } from 'src/app/model/Note';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {

  constructor(public noteService: NoteService)
  {

  }


  trashNote(index:number):void
  {
    this.noteService.trashNote(index);
  }

  unarchiveNote(index:number):void
  {
    this.noteService.unArchiveNote(index)
  }

  getArchivedNotes():Note[]
  {
    return this.noteService.archivedNotes;
  }

}
