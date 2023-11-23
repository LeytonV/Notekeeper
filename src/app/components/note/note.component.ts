import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/model/Note';
import { NotesComponent } from 'src/app/pages/notes/notes.component';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  constructor(public noteservice: NoteService)
  {

  }

  @Input()
  referenceNote: Note = new Note("Note Name", "Note Description");

  @Input()
  noteIndex: number = 0;

  @Output()
  onRemove = new EventEmitter<number>();

  @Output()
  onOpen = new EventEmitter<number>();

  @Output()
  onArchive = new EventEmitter<number>();

  @Output()
  onUntrash = new EventEmitter<number>();

  @Output()
  onSelectColor = new EventEmitter<number>();

  onClickRemove():void
  {
    this.onRemove.emit(this.noteIndex);
  }

  onClickPin():void
  {
    this.noteservice.setNotePin(this.noteIndex, !this.referenceNote.pinned);
  }

  onClickOpen():void
  {
    this.onOpen.emit(this.noteIndex);
  }

  onClickArchive():void
  {
    this.onArchive.emit(this.noteIndex);
  }

  onClickUntrash():void
  {
    this.onUntrash.emit(this.noteIndex);
  }


  get noteIsTrashed():boolean
  {
    return this.noteservice.trashedNotes.includes(this.referenceNote);
  }

  get noteIsArchived():boolean
  {
    return this.noteservice.archivedNotes.includes(this.referenceNote);
  }

  

}
