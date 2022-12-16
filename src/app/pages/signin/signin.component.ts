import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private supabase: AuthService,
    private router: Router,
    private toastr:ToastrService
  ){

  }
  ngOnInit(): void {
    
  }

  signIn(email:string,password:string){
    
  }
  onSubmit(f: NgForm){
    const {email, password} = f.form.value;
    this.supabase.signIn(email,password).then((res)=>{
      const {data ,error} = res;
      if(data.session == null){
        this.toastr.warning("some error Occured")
      }else{
        this.router.navigateByUrl('/')
        this.toastr.success("Logged In")
      }
    })
    .catch((err)=>{
      console.log("err"+err);
    })
  }
}
