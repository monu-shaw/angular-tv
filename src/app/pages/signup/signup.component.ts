import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(
    private supabase:AuthService,
    private toastr: ToastrService
  ){}
  ngOnInit(): void {
    
  }
  signUp(e:NgForm){
    const {email,password} = e.value
    
     this.supabase.register(email,password).then(res=>{
      console.log(res.data);
      if (res.error==null) {
        this.toastr.success('Registerd Successfully');
      }else{
        this.toastr.warning(res.msg);
      }
    }); 
  }
}
