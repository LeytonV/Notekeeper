import { Injectable } from '@angular/core';
import { Note } from '../../model/Note';
import { UserNoteData } from '../../model/UserNoteData';

@Injectable({
  providedIn: 'root'
})
export class NoteService {


  noteData: UserNoteData = new UserNoteData();

  fetchNoteData():void
  {
    let noteDataJSON = localStorage.getItem("noteData");
    if (noteDataJSON != null)
    {
      this.noteData = JSON.parse(noteDataJSON);
    }
    else
    {
      this.noteData = new UserNoteData();
    }
  }

  getNotes(): Note[]
  {
    this.fetchNoteData();

    return this.noteData.notes;
  }

  saveNotesToLocalStorage(): void
  {
    localStorage.setItem("noteData", JSON.stringify(this.noteData));
  }

  addNote(note: Note)
  {
    this.noteData.notes.push(note);
    this.saveNotesToLocalStorage();
  }

  trashNote(index: number)
  {
    this.noteData.notes[index].trashed = true;
    this.saveNotesToLocalStorage();
  }

  untrashNote(index:number):void
  {
    this.noteData.notes[index].trashed = false;
    this.saveNotesToLocalStorage();
  }

  deleteNote(index: number)
  {
    this.noteData.notes.splice(index, 1);
    this.saveNotesToLocalStorage();
  }

  setNotePin(index: number, pin: boolean)
  {
    this.noteData.notes[index].pinned = pin;
    this.saveNotesToLocalStorage();
  }

  getNoteAtIndex(index:number): Note
  {
    return this.noteData.notes[index];
  }

  updateNote(noteInfo: any):void
  {
    var index:number = noteInfo.index;
    var newNote = noteInfo.newNote;
    console.log("editing note " + index + " with new name " + newNote.name + " and description " + newNote.desc);

    this.noteData.notes[index] = newNote;
    this.saveNotesToLocalStorage();
  }

  archiveNote(index:number):void
  {
    this.noteData.notes[index].archived = true;
    this.saveNotesToLocalStorage();
  }

  unArchiveNote(index:number):void
  {
    this.noteData.notes[index].archived = false;
    this.saveNotesToLocalStorage();
  }

  changeNoteColor(index:number, colorHex:string)
  {
    console.log(index);
    this.noteData.notes[index].colorHex = colorHex;
    this.saveNotesToLocalStorage();
  }

  getNoteIndex(note:Note):number
  {
    return this.noteData.notes.indexOf(note);
  }

  get trashedNotes():Note[]
  {
    var trashed:Note[] = [];
    this.noteData.notes.forEach((element) =>
    {
      if(element.trashed)
        trashed.push(element);
    })
    return trashed;
  }

  get archivedNotes():Note[]
  {
    var archived:Note[] = [];
    this.noteData.notes.forEach((element) =>
    {
      if(element.archived)
        archived.push(element);
    })
    return archived;
  }

  get getPinnedNotes(): Note[]
  {
    var pins: Note[] = [];
    this.noteData.notes.forEach((note) =>
    {
      if(note.pinned)
      {
        pins.push(note);
      }
    })
    return pins;
  }

  get getUnpinnedNotes(): Note[]
  {
    var pins: Note[] = []
    this.noteData.notes.forEach((note) =>
    {
      if(!note.pinned)
      {
        pins.push(note);
      }
    })
    return pins
  }
    

}
