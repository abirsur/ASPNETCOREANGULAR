import { Component, OnInit } from '@angular/core';
import { ChanneldataService } from '../channeldata.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  channel$: Object;

  constructor(private data: ChanneldataService) { }

  ngOnInit() {
    this.data.getChannels().subscribe(data => this.channel$ = data)
  }

}
