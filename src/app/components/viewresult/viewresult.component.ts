import { Component, OnInit, Inject } from '@angular/core';
import { FinalresultService } from 'src/app/services/finalresult.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ViewteaminfoService } from 'src/app/services/viewteaminfo.service';
export interface TeaminfoData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css']
})
export class ViewresultComponent implements OnInit {
  finalists:any;
  public loading = false;



  openDialog2(name): void {
 
    const dialogRef = this.dialog.open(TeaminfoModal, {
      data:{"name":name}
  
      //data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
    });
  
   
  }
  
//   users:any=[{
//     "name":"surya","idea":"webapp","techstack":"python","marks":"30"
//   },
//   {
//    "name":"sanjay","idea":"androidapp","techstack":"android","marks":"20"
//  },
//  {
//    "name":"ajay","idea":"iot","techstack":"iot","marks":"10"
//  }]

  constructor(private final:FinalresultService,public dialog: MatDialog) { }

  ngOnInit() {
    this.loading = true;
   this.final.Final().subscribe((response)=>{
    this.loading = false;
     console.log(response)
       this.finalists=response;
       console.log("teams",this.finalists);
    },err=>{  this.loading = false;})

   }

}
@Component({
  selector: 'Teaminfo-overview-example-dialog',
  templateUrl: 'teammembers.html',
})
export class TeaminfoModal implements OnInit{
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
    public dialogRef: MatDialogRef<TeaminfoModal>,
    @Inject(MAT_DIALOG_DATA) public data: TeaminfoData,private teams: ViewteaminfoService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

 

}