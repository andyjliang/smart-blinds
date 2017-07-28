import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	slide: number
	rotate: number
	constructor(public navCtrl: NavController) {
		this.slide = 50
		this.rotate = 60
	}

}
