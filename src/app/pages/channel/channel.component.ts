import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvserviceService } from 'src/app/services/tvservice.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  id;
  play:string='';
  quality=[];
  channel = []
  constructor(private route: ActivatedRoute, private supabase: TvserviceService) {
   this.updateChannel(this.route.snapshot.paramMap.get('id'))
  }
  updatePlay(x){
    this.play= x;
    
  }
  updateChannel(x){
    this.supabase.readAll().then(res=>{
      this.id = res.data.filter(r=> r.id== x)[0];
      this.channel=res.data.filter(r=> r.category== this.id.category);
      this.play= this.id?.quality?.low;
      this.quality=Object.keys(this.id?.quality).map((key) => { return [ key ,this.id?.quality[key]]});
    });
    
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }

}