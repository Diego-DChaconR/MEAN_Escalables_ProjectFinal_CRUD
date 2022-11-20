import { Component, OnInit } from '@angular/core';
import { SwitchService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-final-project';
  modalStatus = false;
  modalEditStatus = false;

  constructor(private switchService: SwitchService) {}

  ngOnInit() {
    this.switchService.$modal.subscribe((value) => (this.modalStatus = value));
    this.switchService.$modalEdit.subscribe((value) => (this.modalEditStatus = value));

  }

  openModal() { 
    this.modalStatus = true;
  }
}
