import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-img',
	templateUrl: './img.component.html',
	styleUrls: ['./img.component.css'],
})
export class ImgComponent implements OnInit {
	@Input() img: string = '';

	@Output() loaded = new EventEmitter<string>();

	imgDefault = './assets/default.png';

	imgError() {
		this.img = this.imgDefault;
	}

	imgLoaded() {
		this.loaded.emit(this.img);
	}

	constructor() {}

	ngOnInit(): void {}
}
