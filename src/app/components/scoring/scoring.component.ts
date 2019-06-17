
import { Component, OnInit, Inject } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { subMinutes } from 'date-fns';
import { ViewsortedlistService } from 'src/app/services/viewsortedlist.service';
import { AddscoreService } from 'src/app/services/addscore.service';
import { ViewteaminfoService } from 'src/app/services/viewteaminfo.service';



export interface DialogData {
  animal: string;
  name: string;
}
export interface TeamData {
  animal: string;
  name: string;
}
 @Component({
   selector: 'app-scoring',
   templateUrl: './scoring.component.html',
   styleUrls: ['./scoring.component.css']
 })

export class ScoringComponent implements OnInit {
  closeResult: string;
   finalteams: Object;
   public loading = false;

  constructor(private modalService: NgbModal, public dialog: MatDialog,public finals:ViewsortedlistService) { }
  users:any=[{
    "name":"surya","idea":"webapp","techstack":"python"
  },
  {
   "name":"sanjay","idea":"androidapp","techstack":"android"
 },
 {
   "name":"ajay","idea":"iot","techstack":"iot"
 }]
  openDialog(name): void {
    const dialogRef = this.dialog.open(scoringModal, {
    data:{"name":name}
      //data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
    });
    console.log("name",name);
  
   
  }
  openDialog2(name): void {
    const dialogRef = this.dialog.open(TeamModal, {
      data:{"name":name}
      //data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
    });

   
  }

  public showMe = false;
  ngOnInit() {  
    this.loading = true;
    this.finals.Finalteam().subscribe((response)=>{
      this.loading = false;
      console.log(response)
      this.finalteams=response;
      console.log("teams",this.finalteams);
    },err => {
      this.loading = false;
     
  })
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addscore.html',
})
export class scoringModal {
  public m1: string = "0";
  public m2: string = "0";
  public m3: string = "0";
 public m4: string = "0";
 public m5: string = "0";
 public m6: string = "0";
 public m7: string = "0";
 public m8: string = "0";
 score:any;
 public result: number = 0;
  isSubmitted: boolean =false;

  constructor(
    public dialogRef: MatDialogRef<scoringModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public addscore:AddscoreService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit()
    {
       this.result =parseInt(this.m1) + parseInt(this.m2)+parseInt(this.m3)+parseInt(this.m4)+parseInt(this.m5)+parseInt(this.m6)+parseInt(this.m7)+parseInt(this.m8);
              console.log(this.result)
              console.log(this.data.name);
              this.score={
                "teamleadname":this.data.name,
                "finalscore":this.result
              }
              console.log("this.score",this.score);
              this.addscore.addScore(this.score).subscribe((response)=>{
                console.log(response)
             
              })
              this.isSubmitted = true
              this.dialogRef.close();
  }

}
@Component({
  selector: 'Team-overview-example-dialog',
  templateUrl: 'teamdetails.html',
})
export class TeamModal implements OnInit{
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
    public dialogRef: MatDialogRef<TeamModal>,
    @Inject(MAT_DIALOG_DATA) public data: TeamData,private teams: ViewteaminfoService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

 

}