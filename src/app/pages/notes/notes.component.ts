import { Component } from '@angular/core';
import { Note } from 'src/app/model/Note';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { NotificationService } from 'src/app/services/notificationservice/notificationservice.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  
  constructor(public noteservice: NoteService, public notificationService: NotificationService)
  {
    
  }

  isTakingNote: boolean = false;

  newNoteName: string = "";
  newNoteDescription: string = "";

  viewingNoteIndex:number = -1;


  choosingColorNoteIndex:number = -1;


  
  get regularNotes():Note[]
  {
    return this.noteservice.noteData.notes.filter(function (item){return !item.pinned && !item.archived && !item.trashed});
  }

  get pinnedNotes():Note[]
  {
    return this.noteservice.noteData.notes.filter(function (item){return item.pinned && !item.archived && !item.trashed});
  }


  createNewNote():void
  {
    console.log(this.newNoteName);
    let note = new Note(this.newNoteName, this.newNoteDescription);
    this.noteservice.addNote(note);


    this.isTakingNote = false;
    this.newNoteName = "";
    this.newNoteDescription = "";
  }

  cancelNote():void
  {
    this.isTakingNote = false;
    this.newNoteName = "";
    this.newNoteDescription = "";
    this.notificationService.createNotification("Note discarded.");
  }

  startTakingNote():void
  {
    this.isTakingNote = true;
  }

  openNote(noteIndex:number):void
  {
    console.log("Pressed open note on " + noteIndex);
    this.viewingNoteIndex = noteIndex;
  }

  getNoteIndex(note:Note):number
  {
    return this.noteservice.getNoteIndex(note);
  }

  updateNote(noteInfo:{index:number, newNote:Note}):void
  {
    this.noteservice.updateNote(noteInfo);
  }

  removeNote(noteIndex: number)
  {
    console.log("Trashing note " + this.noteservice.noteData.notes[noteIndex].name);
    this.noteservice.trashNote(noteIndex);
    this.notificationService.createNotification("Note sent to trash.");
  }

  archiveNote(noteIndex: number)
  {
    this.noteservice.archiveNote(noteIndex);
    this.notificationService.createNotification("Note sent to archive.");
  }

  closeNoteView():void
  {
    this.viewingNoteIndex = -1;
  }

  showNoteColorPopup(index:number):void
  {
    this.choosingColorNoteIndex = index;
  }

  changeNoteColor(colorHex:string):void
  {
    this.noteservice.changeNoteColor(this.choosingColorNoteIndex, colorHex);
    this.choosingColorNoteIndex = -1;
  }
}
