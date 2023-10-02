import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class TvserviceService {
 private supabase
 public data:[];
  constructor() { 
    this.supabase = createClient('https://hbimmaasrgaigjgznzao.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaW1tYWFzcmdhaWdqZ3puemFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4MjM0MzIsImV4cCI6MjAwNDM5OTQzMn0.xI9WiOycNLOyGEi9nK7v-n4VJpkKQcTlmwR3Ctak13s')
  }

  insertMultiple(data:[]){
    return this.supabase
  .from('channel')
  .insert(data)
  }

  insert(data){
    return this.supabase
  .from('channel')
  .insert(data)
  }

  readAll(){
    return this.supabase
    .from('channel')
    .select('*')  
  }

  setData(data){
    this.data = data;
  }
  getData(){
   return this.data;
  }

}
