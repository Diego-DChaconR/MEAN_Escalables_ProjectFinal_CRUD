import { EventEmitter, Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})

export class SwitchService {

    $modal = new EventEmitter<any>();
    $modalEdit = new EventEmitter<any>();
    
    constructor(){ }
}