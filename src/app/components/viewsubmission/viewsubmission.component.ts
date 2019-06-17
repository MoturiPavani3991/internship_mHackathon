import { Component, OnInit, Inject } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ViewsubmissionService} from '../../services/viewsubmission.service';
import { ParticipantmailService } from 'src/app/services/participantmail.service';


declare var $: any;
export interface DialogData {
  animal: string;
  name: string;
}
export interface RejectData {
  animal: string;
  name: string;
}
export interface AcceptData {
  leadername: any;
  animal: string;
  name: string;
}

@Component({
  selector: 'app-viewsubmission',
  templateUrl: './viewsubmission.component.html',
  styleUrls: ['./viewsubmission.component.css']
})
export class ViewsubmissionComponent implements OnInit {
  public loading = false;
  submittedteams:any;
  closeResult: string;
  lead
  email
  // openDialog3(leadername)
  // {
  //   this.lead={
  //     "teamleadername":leadername
  //   }
  //   this.view.enterteam(this.lead).subscribe((response)=>{
  //     console.log(response)
      
  //     console.log("inserted succesfully");
  //   })
  // }
 


  constructor(private modalService: NgbModal, public dialog: MatDialog,private view:ViewsubmissionService,private participant:ParticipantmailService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1560516074409%2FfileName?alt=media&token=b921d1b9-b489-4b22-bc49-5d39b6f8a8c8"}
    });

   
  }
  openDialog2(): void {
    const dialogRef = this.dialog.open(RejectOverviewExampleDialog, {
     // data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
    });

    
  }

  openDialog3(leadername,email): void {
    const dialogRef = this.dialog.open(AcceptOverviewExampleDialog, {
      data:{"leadername":leadername}
      
    });
  this.lead={
           "teamleadername":leadername
        }
        this.view.enterteam(this.lead).subscribe((response)=>{
        console.log(response)
          
          console.log("inserted succesfully");
      })
      this.email={
        "email":email
     }
     this.participant.addparticipant(this.email).subscribe((response)=>{
     console.log(response)
       
       console.log("email sent");
   })

   this.view.updateregistrations({"teamLeadName":leadername}).subscribe((response)=>{
    console.log(response)
  })
  setTimeout(()=>{
    this.loading = true;

    this.view.viewsubmission().subscribe((response)=>{
      this.loading = false;
      console.log(response);
      this.submittedteams=response;
      console.log("teams",this.submittedteams);
    },err=>{this.loading = false;})
  },2000)

   
  }
  public showMe = false;
  
  ngOnInit() {
    this.loading = true;

    this.view.viewsubmission().subscribe((response)=>{
      this.loading = false;
      console.log(response);
      this.submittedteams=response;
      console.log("teams",this.submittedteams);
    },err=>{this.loading = false;})
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dilaogex.html',
})
export class DialogOverviewExampleDialog {
 
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'reject-overview-example-dialog',
  templateUrl: 'reject.html',
})
export class RejectOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<RejectOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: RejectData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'accept-overview-example-dialog',
  templateUrl: 'accept.html',
})
export class AcceptOverviewExampleDialog implements OnInit {
  ngOnInit() {
   this.teamleadername=this.data.leadername
  }
  teamleadername:any;
  constructor(
    public dialogRef: MatDialogRef<AcceptOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: AcceptData) {}
   
  onNoClick(): void {
    this.dialogRef.close();
  }

}