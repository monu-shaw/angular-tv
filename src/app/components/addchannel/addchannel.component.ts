import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddchannelService } from 'src/app/services/tv/addchannel.service';

@Component({
  selector: 'app-addchannel',
  templateUrl: './addchannel.component.html',
  styleUrls: ['./addchannel.component.css'],
})
export class AddchannelComponent implements OnInit {
  constructor(
    private supabase: AddchannelService
  ) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    this.supabase.addChannel(f.form.value);
  }
}
