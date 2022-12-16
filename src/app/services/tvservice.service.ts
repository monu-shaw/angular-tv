import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class TvserviceService {
 private supabase
 private data:[];
  constructor() { 
    this.supabase = createClient('https://hbimmaasrgaigjgznzao.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaW1tYWFzcmdhaWdqZ3puemFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA1ODc2NTQsImV4cCI6MTk4NjE2MzY1NH0.PTTRUyVPE-7pI7TanxamWfgcbcNqjeN97F2IaQYA0O8')
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
