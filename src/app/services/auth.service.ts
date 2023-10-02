import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { defer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  supabase
  user:any = null;
  constructor() {
    this.supabase = createClient('https://hbimmaasrgaigjgznzao.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaW1tYWFzcmdhaWdqZ3puemFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4MjM0MzIsImV4cCI6MjAwNDM5OTQzMn0.xI9WiOycNLOyGEi9nK7v-n4VJpkKQcTlmwR3Ctak13s')
    defer(()=>this.supabase.auth.getSession().then(r=>{this.user=r.data.session}))
   }

  register(email:string, password:string){
    return this.supabase.auth.signUp({
      email,
      password
    });
  }
  signIn(email:string, password:string){
    return this.supabase.auth.signInWithPassword({
      email,
      password
    });
  }
   getUser():Observable<any>{
    return  defer(()=>this.supabase.auth.getSession())
  }
  logOut(){
    return this.supabase.auth.signOut()
  }
  get(){
    return this.supabase;
  }
}
