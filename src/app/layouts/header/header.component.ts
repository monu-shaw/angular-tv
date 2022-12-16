import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user:any = null;
  constructor(
    private supabase: AuthService,
    private router: Router,
    private toastr: ToastrService
  ){
     
     
     
  }
  ngOnInit(): void {
    
  }

  async logOut(){
    try {
      console.log("pressed");
      
      const res = await this.supabase.get().auth.signOut();
      console.log(res);
      
      this.router.navigateByUrl('/signin');
      this.toastr.success('Logged Out');
      this.user=null;
    } catch (error) {
      
    }
  }
  getter(){
    console.log(this.user);
    
  }
 
}
