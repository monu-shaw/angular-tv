import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
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
  ){

  }
  ngOnInit(): void {
    
  }
  signUp(email:string,password:string){
   /*  this.supabase.signUp(email,password).then(res=>{
      console.log(res.data);
      if (res.error==null) {
        this.toastr.success('Registerd Successfully');
      }else{
        this.toastr.warning('Something Not Right');
      }
    }); */
  }
}
