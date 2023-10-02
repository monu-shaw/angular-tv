import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user
  supabase
  constructor(s:AuthService){
    this.user = s.user
    this.supabase=s
  }
  ngOnInit(): void {}
}
