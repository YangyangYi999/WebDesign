import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from'@angular/forms';
@Component({
  selector: 'app-checkout-component',
  templateUrl: './checkout-component.component.html',
  styleUrls: ['./checkout-component.component.scss']
})
export class CheckoutComponentComponent implements OnInit {
  myForm:FormGroup

  onSubmit(){
    this.myForm.reset();
  }
  constructor() { }

  ngOnInit() {
    this.myForm=new FormGroup({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      address1:new FormControl(null,Validators.required),
      address2:new FormControl(null,Validators.required),
      city:new FormControl(null,Validators.required),
      state:new FormControl(null,Validators.required),
      phone:new FormControl(null,[
        Validators.required,
        Validators.pattern('[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}')
      ]),
      zip:new FormControl(null,[
        Validators.required,
        Validators.pattern('[0-9]{5}')
      ])
 
     });
  }

  
}
