import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	OnChanges,
	AfterViewInit,
	OnDestroy,
} from '@angular/core';

@Component({
	selector: 'app-img',
	templateUrl: './img.component.html',
	styleUrls: ['./img.component.css'],
})
export class ImgComponent
	implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
	img: string = '';
	@Input('img') set changeImg(newImg: string) {
		this.img = newImg;
	}

	@Output() loaded = new EventEmitter<string>();

	imgDefault = './assets/images/default.jpg';
	counter = 0;
	interval: number | undefined;

	imgError() {
		this.img = this.imgDefault;
	}

	imgLoaded() {
		this.loaded.emit(this.img);
	}

	constructor() {
		// before render --> async  -- once time
		console.log('constructor', 'imgValue=>', this.img);
	}

	ngOnChanges() {
		// before - during render
		// change inputs -- n times
		console.log('ngOnChange', 'imgValue=>', this.img);
	}

	ngOnInit() {
		//before render
		// async - fetch -- once time
		console.log('ngOnInit', 'imgValue=>', this.img);

		/* 		this.interval = window.setInterval(() => {
			this.counter++;
			console.log(this.counter);
		}, 1000); */
	}

	ngAfterViewInit() {
		// after render
		// handler children
		console.log('ngAfterViewInit');
	}

	ngOnDestroy() {
		// delete
		console.log('ngOnDestroy');
		//window.clearInterval(this.interval);
	}
}
