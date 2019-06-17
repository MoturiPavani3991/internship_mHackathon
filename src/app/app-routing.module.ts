import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
//import { AddjudgeComponent } from './components/addjudge/addjudge.component';
//import { AddeventComponent } from './components/addevent/addevent.component';
import { ViewsubmissionComponent } from './components/viewsubmission/viewsubmission.component';
import { ViewsortedlistComponent } from './components/viewsortedlist/viewsortedlist.component';
import { ViewresultComponent } from './components/viewresult/viewresult.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { RegisterComponent } from './components/register/register.component';
//import { JudgenavComponent } from './components/judgenav/judgenav.component';
import { ScoringComponent } from './components/scoring/scoring.component';
//import { ViewscoreComponent } from './components/viewscore/viewscore.component';
//import { AddscoreComponent } from './components/addscore/addscore.component';
import { GuardGuard } from './guard.guard';
import { TeaminfoComponent } from './teaminfo/teaminfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { AuthGuard } from './guards/auth.guard';
//import { AuthService } from 'src/app/services/auth.service';
//import { AuthGuard } from '../services/auth.service';
const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full',canActivate:[GuardGuard]},
    { path: 'login', component: LoginComponent },
    {path: 'dashboard', component: MyNavComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'teaminfo', component: TeaminfoComponent},
    
    //{path: 'dashboard1', component:JudgenavComponent},
    //{ path: 'addevent', component: AddeventComponent },
    //{ path: 'viewsubmission', component: ViewsubmissionComponent },
    //{ path: 'viewsortedlist', component: ViewsortedlistComponent },
    //{ path: 'viewresult', component: ViewresultComponent },
    
  {path: 'admin',
     component: MyNavComponent,
     canActivate:[GuardGuard],
     children: [
       {path: '',component: DashboardComponent},
       {path: 'dashboard',component: DashboardComponent},
      //{ path: 'viewscore',component:ViewscoreComponent },
      //{path: 'addscore',component:  AddscoreComponent},
      //{path: 'addjudge',component: AddjudgeComponent},
      //{ path: 'addevent',component: AddeventComponent},
      {path: 'viewsubmission',component: ViewsubmissionComponent},
      {path: 'viewsortedlist',component: ViewsortedlistComponent},
      {path: 'viewresult',component: ViewresultComponent}
   
  ]},
  {path: 'judge',
     component: MyNavComponent,
     canActivate:[GuardGuard],
     children: [
       {path: '',component: DashboardComponent},
       {path: 'dashboard',component: DashboardComponent},
      {path: 'scoring',component: ScoringComponent},
      //{ path: 'viewscore',component:ViewscoreComponent },
      //{path: 'addscore',component:  AddscoreComponent},
      //{path: 'addjudge',component: AddjudgeComponent},
      //{ path: 'addevent',component: AddeventComponent},
      
      {path: 'viewresult',component: ViewresultComponent}
   
  ]},
]

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
