import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent, EventOverviewExampleDialog, JudgeOverviewExampleDialog, AddOverviewExampleDialog } from './components/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
//import { AddjudgeComponent } from './components/addjudge/addjudge.component';
//import { AddeventComponent } from './components/addevent/addevent.component';
import { ViewsubmissionComponent, DialogOverviewExampleDialog, RejectOverviewExampleDialog, AcceptOverviewExampleDialog } from './components/viewsubmission/viewsubmission.component';
import { ViewsortedlistComponent, TeammembersModal } from './components/viewsortedlist/viewsortedlist.component';
import { ViewresultComponent, TeaminfoModal } from './components/viewresult/viewresult.component';
import { RegisterComponent } from './components/register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
//import { JudgenavComponent } from './components/judgenav/judgenav.component';
import { ScoringComponent, scoringModal, TeamModal } from './components/scoring/scoring.component';
//import { AddscoreComponent } from './components/addscore/addscore.component';
//import { ViewscoreComponent } from './components/viewscore/viewscore.component';
//import { UploadListComponent } from './components/uploads/upload-list/upload-list.component';
//import { UploadFormComponent } from './components/uploads/upload-form/upload-form.component';
import { AngularFireModule, FirebaseOptionsToken } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from 'src/environments/environment';
//import { AuthService } from 'src/app/services/auth.service';
//import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule } from '@angular/router';
//import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TeaminfoComponent, TeamregisterModal } from './teaminfo/teaminfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgDatepickerModule } from 'ng2-datepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyNavComponent,
    //AddjudgeComponent,
    //AddeventComponent,
    ViewsubmissionComponent,
    ViewsortedlistComponent,
    ViewresultComponent,
    RegisterComponent,
    //JudgenavComponent,
    ScoringComponent,
    RejectOverviewExampleDialog,
    TeamregisterModal ,
    TeamModal,
    AddOverviewExampleDialog,
    //AddscoreComponent,
   // ViewscoreComponent,
    DialogOverviewExampleDialog,
    TeaminfoComponent,
    scoringModal,
    EventOverviewExampleDialog,
    JudgeOverviewExampleDialog,
    DashboardComponent,
    TeammembersModal,TeaminfoModal,
    
    AcceptOverviewExampleDialog
    
    //ConfirmComponent
   // UploadListComponent,
   // UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatDialogModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxChartsModule,
    Ng2SearchPipeModule,NgDatepickerModule,OwlDateTimeModule, OwlNativeDateTimeModule , 
      NgxLoadingModule.forRoot({}),
      FormsModule,
    // NgHttpLoaderModule.forRoot(),
    
    //DialogOverviewExampleDialog,
    ReactiveFormsModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
      // RouterModule.forRoot(myRoots,
      // { enableTracing: true } // <-- debugging purposes only
      //  )
  ],
  entryComponents: [DialogOverviewExampleDialog,scoringModal,RejectOverviewExampleDialog,TeamregisterModal,EventOverviewExampleDialog ,JudgeOverviewExampleDialog,TeamModal,TeammembersModal,AcceptOverviewExampleDialog,AddOverviewExampleDialog,TeaminfoModal],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
