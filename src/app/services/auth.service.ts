import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js'
import { defer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  supabase
  constructor() {
    this.supabase = createClient('https://hbimmaasrgaigjgznzao.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaW1tYWFzcmdhaWdqZ3puemFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA1ODc2NTQsImV4cCI6MTk4NjE2MzY1NH0.PTTRUyVPE-7pI7TanxamWfgcbcNqjeN97F2IaQYA0O8')
   }

  signUp(email:string, password:string){
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
