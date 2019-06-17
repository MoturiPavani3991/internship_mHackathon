import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: any;

  registerForm: FormGroup;
  constructor(private afStorage: AngularFireStorage,private route:Router,private register:RegisterService,private fb:FormBuilder) { }
  model: any = {};
  teamleadername: any;
  email:any;
  contact:any;
  idea:any;
  stack:any;
  file:any;
  user:any;

  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  // }
  

  

  submitForm(){

    this.user={
      "teamleadername":this.model.teamleadername,
      "email":this.model.email,
      "contact":this.model.contact,
      "idea":this.model.idea,
      "stack":this.model.stack,
      "file":this.model.file,

    }
    this.register.Register(this.user).subscribe((response)=>{
      console.log("response")
    })

    console.log("calling");
   
   
    this.route.navigateByUrl('/teaminfo')
      
    }
  ngOnInit() {
    this.registerForm = this.fb.group({
      teamleadername: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      stack: ['', Validators.required],
     file: ['', Validators.required],
 
    
  });
  }
  upload(event) {
    console.log("event",event.target.files[0]);

   // var file = event.target.files[0];
    const file = event.target.files[0]
    const path = `webadmin/${new Date().getTime()}`;
    const fileRef = this.afStorage.ref(path);
    const task = this.afStorage.ref(path).put(file);
    //  console.log('task---' + task)
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${path}/${"fileName"}`).put(file);
    // console.log('task---' + task)
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
      },
      (error) => {
        // fail
        console.log(error);

      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          this.downloadURL = downloadURL
        })
      })
  }
}
