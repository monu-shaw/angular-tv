import { Component, OnInit } from '@angular/core';
import { TvserviceService } from 'src/app/services/tvservice.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit{
  channels
  data = []
  constructor(
    private supabase:TvserviceService
  ){
    if(this.data.length==0){
    supabase.readAll().then((res)=>{
      supabase.setData(res.data);
      this.data = res.data;
    })
    console.log('nono');
    
  }
  }
  ngOnInit(): void {
    
  }




}
