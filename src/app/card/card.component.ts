import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private switchService: SwitchService) {}

  ngOnInit() {}

  openModal() { 
    this.switchService.$modalEdit.emit(true);
  }

}
