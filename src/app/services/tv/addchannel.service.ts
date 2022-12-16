import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AddchannelService {

  private supabase
 private data:[];
  constructor() { 
    this.supabase = createClient('https://hbimmaasrgaigjgznzao.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaW1tYWFzcmdhaWdqZ3puemFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA1ODc2NTQsImV4cCI6MTk4NjE2MzY1NH0.PTTRUyVPE-7pI7TanxamWfgcbcNqjeN97F2IaQYA0O8')
  }
  addChannel(x){
    const { name, imgUrl, low, mid, high, hd, language, category } = x;
    if(name == ' '|| imgUrl ==' '|| low=='' || language ==''|| category==''){
      
    }else{
  this.supabase
  .from('channel')
  .insert([
    { name, imgUrl, quality:{low,mid,high,hd}, language,category},
  ]).then((r)=>{
    return r;
  });
         }
  }
}
