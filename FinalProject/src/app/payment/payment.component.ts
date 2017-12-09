import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from'@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  myForm:FormGroup
  onSubmit(){
    this.myForm.reset();
  }
  constructor() { }

  ngOnInit() {
    this.myForm=new FormGroup({
      holderName:new FormControl(null,Validators.required),
      cardNumber:new FormControl(null,[
        Validators.required,
        Validators.pattern('[0-9]{12}')
      ]),
      cvv:new FormControl(null,[
        Validators.required,
        Validators.pattern('[0-9]{3}')
      ])
 
     });
  }

}
