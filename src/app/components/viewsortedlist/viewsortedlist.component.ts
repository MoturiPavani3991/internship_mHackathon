import { Component, OnInit, Inject } from '@angular/core';
import{ViewsortedlistService} from '../../services/viewsortedlist.service'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewteaminfoService } from 'src/app/services/viewteaminfo.service';
export interface TeamData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-viewsortedlist',
  templateUrl: './viewsortedlist.component.html',
  styleUrls: ['./viewsortedlist.component.css']
})
export class ViewsortedlistComponent implements OnInit {
  public loading = false;
finalteams:any;


openDialog2(name): void {
 
  const dialogRef = this.dialog.open(TeammembersModal, {
    data:{"name":name}

    //data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
  });

 
}

  constructor(private final:ViewsortedlistService,public dialog: MatDialog) { }

  ngOnInit() {
    this.loading = true;
    this.final.Finalteam().subscribe((response)=>{
      this.loading = false;
      console.log(response)
      this.finalteams=response;
      console.log("teams",this.finalteams);
  },err=>{ this.loading = false;})
  }
  
}
@Component({
  selector: 'Team-overview-example-dialog',
  templateUrl: 'teammembers.html',
})
export class TeammembersModal implements OnInit{
  public loading = false;
  teamMembers:any;
  ngOnInit() {
    this.loading = true;
    this.teams.Teamdata(this.data.name).subscribe((response)=>{
     this.loading = false;
      console.log(response)
      this.teamMembers=response;
      console.log("teams",this.teamMembers);
    },err=>{this.loading = false;});
  }


  constructor(
    public dialogRef: MatDialogRef< TeammembersModal>,
    @Inject(MAT_DIALOG_DATA) public data: TeamData,private teams: ViewteaminfoService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

 

}
