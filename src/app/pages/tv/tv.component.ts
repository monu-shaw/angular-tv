import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TvserviceService } from 'src/app/services/tvservice.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})

export class TvComponent implements OnInit{
  loading=true
  searchTerm:string
  data = []
  constructor(
    private supabase:TvserviceService
  ){
    if(this.data.length==0){
    supabase.readAll().then((res)=>{
      supabase.setData(res.data);
      this.data = res.data;
      this.loading=false;
    })
    
  }
  }
  ngOnInit(): void {}

  onSearch(e:NgModel):void{
    this.data = this.supabase.data.filter((i:any)=>i.name.includes(e))
    
  }



}
