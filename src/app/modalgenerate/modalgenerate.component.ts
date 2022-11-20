import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/modal.service';

@Component({
  selector: 'app-modalgenerate',
  templateUrl: './modalgenerate.component.html',
  styleUrls: ['./modalgenerate.component.css']
})
export class ModalgenerateComponent implements OnInit {

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.switchService.$modal.emit(false);
  }

}
