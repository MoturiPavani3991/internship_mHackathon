import { Component, ChangeDetectorRef,OnInit, Inject} from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddeventService} from '../../services/addevent.service';
import {AddjudgeService} from '../../services/addjudge.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
export interface EventData {
  animal: string;
  name: string;
}
export interface JudgeData {
  animal: string;
  name: string;
}
export interface AddData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit{

  closeResult: string;
  ngOnInit() {

  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  //constructor(private breakpointObserver: BreakpointObserver,public auth:AuthService,private router:Router) {}
logout(){
  localStorage.clear();
  this.router.navigateByUrl('/login');

  
}

mobileQuery: MediaQueryList;

  fillerNav = ['link1','link2']

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private breakpointObserver: BreakpointObserver,public auth:AuthService,private router:Router,private modalService: NgbModal, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(EventOverviewExampleDialog, {
  //     // data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
  //   });
  // }
  // openDialog2(): void {
  //   const dialogRef = this.dialog.open(JudgeOverviewExampleDialog, {
  //    // data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
  //   });

    
  // }
  openDialog3(): void {
    const dialogRef = this.dialog.open(AddOverviewExampleDialog, {
     // data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
    });

    
  }

  public showMe = false;
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
@Component({
  selector: 'event-overview-example-dialog',
  templateUrl: 'addevent.html',
})
export class EventOverviewExampleDialog {

  name:any;
  eventdata:any
  datetime:any;

  venue:any;
  rule:any;
  info:any;
  eventInfo:any
  constructor(public dialogRef: MatDialogRef<EventOverviewExampleDialog>,public addEvent:AddeventService,
     @Inject(MAT_DIALOG_DATA) public data: EventData) {}
  clickEvent(){
this.eventInfo={
  "eventName":this.name,
  "eventData":this.eventdata,
  "venue":this.venue,
  "datetime":this.datetime,

  "rules":this.rule,
  "info":this.info
}
console.log("eventInfo",this.eventInfo);
this.addEvent.addEvent(this.eventInfo).subscribe((response)=>{
  console.log("response")
  
})
this.dialogRef.close();

 }
 onNoClick(): void {
  this.dialogRef.close();
}



options: DatepickerOptions = {
  minYear: 1970,
  maxYear: 2030,
  displayFormat: 'MMM D[,] YYYY',
  barTitleFormat: 'MMMM YYYY',
  dayNamesFormat: 'dd',
  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  locale: frLocale,
  minDate: new Date(Date.now()), // Minimal selectable date
  maxDate: new Date(Date.now()),  // Maximal selectable date
  barTitleIfEmpty: 'Click to select a date',
  placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
  addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
  addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
  fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
  useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
};


}
@Component({
  selector: 'judge-overview-example-dialog',
  templateUrl: 'addjudge.html',
})
export class JudgeOverviewExampleDialog implements OnInit {  
  events:any;
  judgeInfo:any;
email:any;
event:any;
  ngOnInit()
  {
    this.addJudge.getevent().subscribe((response)=>{
      this.events=response;
      console.log(response)
     
  });
  }

  constructor(
    public dialogRef: MatDialogRef<JudgeOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: JudgeData,public addJudge:AddjudgeService) {}

 onNoClick(): void {
     this.dialogRef.close();
     
  }
  addJudges(){
    this.judgeInfo={
      "email":this.email,
      "event":this.event
    }

    this.addJudge.addJudge(this.judgeInfo).subscribe((response)=>{
      console.log("response")
    
    })
    this.dialogRef.close();
  }

}
@Component({
  selector: 'add-overview-example-dialog',
  templateUrl: 'add.html',
})
export class AddOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<AddOverviewExampleDialog>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: AddData) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(EventOverviewExampleDialog, {
        // data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
      });
    }
    openDialog2(): void {
      const dialogRef = this.dialog.open(JudgeOverviewExampleDialog, {
       // data: {downloadUrl: "https://firebasestorage.googleapis.com/v0/b/mhack-1fb20.appspot.com/o/webadmin%2F1559733410549?alt=media&token=3b2fd4c0-a3b4-4419-b7f4-fd7f777b3503"}
      });
  
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

