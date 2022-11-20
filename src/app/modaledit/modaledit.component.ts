import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/modal.service';

@Component({
  selector: 'app-modaledit',
  templateUrl: './modaledit.component.html',
  styleUrls: ['./modaledit.component.css']
})
export class ModaleditComponent implements OnInit {

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.switchService.$modalEdit.emit(false);
  }

}
