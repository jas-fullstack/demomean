import { Component, OnInit } from '@angular/core';
import { ConteService  } from '../shared/conte.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private ConteService : ConteService) { }

  ngOnInit() {
  }
  contect_us(contect_data)
  {
     return this.ConteService.send_email_and_save(contect_data);
  }

}
