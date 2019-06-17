import { Component, OnInit, Inject } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddteamService } from '../services/addteam.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
export interface DialogData {
  teaminfo: any;
  sampledata: any;
  animal: string;
  name: string;
}

@Component({
  selector: 'app-teaminfo',
  templateUrl: './teaminfo.component.html',
  styleUrls: ['./teaminfo.component.css']
})
export class TeaminfoComponent implements OnInit {
 public teamsinfo:any;

 teamlead: any;
  member1:any;
  email1:any;
  contact1:any;
  member2:any;
  email2:any;
  contact2:any;
  member3:any;
  email3:any;
  contact3:any;
  registerForm: FormGroup;
  constructor(public modalService: NgbModal, public dialog: MatDialog,private fb:FormBuilder) { }
  closeResult: string;
  
  openDialog(): void {
    this.teamsinfo=  {
      "teamleadName":this.teamlead,
       "teamMembers":[
           {
               "name":this.member1,
               "phone":this.contact1,
               "email":this.email1
           },
           {
               "name":this.member2,
               "phone":this.contact2,
               "email":this.email2
           },
           {
            "name":this.member3,
            "phone":this.contact3,
            "email":this.email3
        }
           ]
           
  }
    const dialogRef = this.dialog.open(TeamregisterModal, {
      data:{"teaminfo":this.teamsinfo}
      //data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
    });
 
  
  console.log("inside teaminfo",this.teamsinfo);
  
  

  
   
  }
 
  public showMe = false;

  ngOnInit() {
    this.registerForm = this.fb.group({
      teamleadername: ['', Validators.required],
     member1: ['', Validators.required],
     email1: ['', Validators.required],
      contact1: ['', Validators.required],
      member2: ['', Validators.required],
     email2: ['', Validators.required],
     contact2: ['', Validators.required],
     member3: ['', Validators.required],
     email3: ['', Validators.required],
     contact: ['', Validators.required],
    })
  }
  
}
@Component({
  selector: 'team-overview-example-dialog',
  templateUrl: 'teamregister.html',
})
export class TeamregisterModal {
  constructor(
    public dialogRef: MatDialogRef<TeamregisterModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private route:Router,public teams:AddteamService,public modalService: NgbModal, public dialog: MatDialog) {
   
  }
  
    
    

  onNoClick(): void {
    this.dialogRef.close();
  }  
  onsubmit(){
    console.log(this.data.teaminfo)
  //console.log("this.teamsinfo",super.teamsinfo);
    this.teams.addTeam(this.data.teaminfo).subscribe((response)=>{
      console.log("response")
    })
    this.dialogRef.close();
    this.route.navigate(['/login'])
  }
}
