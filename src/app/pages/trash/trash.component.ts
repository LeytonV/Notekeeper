import { Component } from '@angular/core';
import { Note } from 'src/app/model/Note';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent {

  constructor(public noteService:NoteService)
  {

  }

  destroyNotePopup:boolean = false;
  destroyingNoteIndex:number = -1;

  getTrashedNotes():Note[]
  {
    return this.noteService.trashedNotes;
  }

  showDestroyNotePrompt(noteIndex: number):void
  {
    console.log("Shwoing [proppmt");
    this.destroyNotePopup = true;
    this.destroyingNoteIndex = noteIndex;
  }

  destroyNote():void
  {
    this.noteService.deleteNote(this.destroyingNoteIndex);
    this.destroyingNoteIndex = -1;
    this.destroyNotePopup = false;
  }

  hideDestroyNotePrompt():void
  {
    this.destroyingNoteIndex = -1;
    this.destroyNotePopup = false;
  }

  removeNoteFromTrash(index:number):void
  {
    this.noteService.untrashNote(index);
  }

}
