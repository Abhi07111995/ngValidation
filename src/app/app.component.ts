import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb:FormBuilder){}
  registrationForm=this.fb.group({
  userName:['',Validators.required],
   email:['',Validators.required],
   password:['',Validators.required],
   company:['',Validators.required],
   housenumber:['',Validators.required],
    streetname:['',Validators.required],
    city:['',Validators.required],
    postcode:['',Validators.required],
  //  address:this.fb.group({
  //         housenumber:[''],
  //         streetname: [''],
  //         city:[''],
  //         postcode:[''],
  // })
});
//  registrationForm=new FormGroup({
//    userName:new FormControl(''),
//    email:new FormControl(''),
//    password:new FormControl(''),
//    company:new FormControl(''),
//    address: new FormGroup({
//           housenumber: new FormControl(''),
//           streetname: new FormControl(''),
//           city: new FormControl(''),
//           postcode:new FormControl(''),
//    })
//  });
}
