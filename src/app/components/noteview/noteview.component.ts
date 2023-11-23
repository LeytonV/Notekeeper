import { Component, EventEmitter, Input, Output, ViewChildren } from '@angular/core';
import { Note } from 'src/app/model/Note';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-noteview',
  templateUrl: './noteview.component.html',
  styleUrls: ['./noteview.component.css']
})
export class NoteviewComponent
{

  constructor(public noteService:NoteService)
  {

  }
  @Input()
  referenceNoteIndex:number = 0;

  noteCopy:Note = this.currentNote;

  isAttachingImage:boolean = false;
  attachImageURL:string = "";

  @Output()
  onUpdateNote = new EventEmitter<{index:number, newNote:Note}>();

  @Output()
  onClose = new EventEmitter();

  get currentNote():Note
  {
    return this.noteService.getNoteAtIndex(this.referenceNoteIndex);
  }

  updateNote():void
  {
    this.onUpdateNote.emit({index: this.referenceNoteIndex, newNote: this.noteCopy});
  }

  binNote():void
  {
    this.onUpdateNote.emit({index: this.referenceNoteIndex, newNote: this.noteCopy});
  }

  openImageAttachWindow():void
  {
    this.isAttachingImage = true;
  }

  closeNote():void
  {
    console.log("click");
    this.onClose.emit();
  }

  attachImage():void
  {
    console.log(this.attachImageURL);
    this.noteCopy.imageURL = this.attachImageURL;
    this.isAttachingImage = false;
    this.updateNote();
  }
}
