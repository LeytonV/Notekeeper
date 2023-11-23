export class Note
{
    name: string = "New Note";
    desc: string = "Some description";
    imageURL: string = "";
    pinned: boolean = false;
    archived: boolean = false;
    trashed: boolean = false;
    
    colorHex:string = "";

    constructor(name: string, desc: string)
    {
        this.name = name;
        this.desc = desc;
    }
}