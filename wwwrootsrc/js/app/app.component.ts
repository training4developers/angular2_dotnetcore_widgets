import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Widget } from './models/widget';

import { AppStorage } from './services/app-storage';

@Component({
	selector: 'main',
	styles: [require('./app.component.scss')],
	template: require('./app.component.html'),
	exportAs: 'AppComponent'
})
export class AppComponent implements OnInit {

	widgets: Widget[] = null;

	constructor(private http: Http) { }

	ngOnInit() {
		this.http.get('/widgets')
			.map(res => res.json())
			.subscribe(widgets => {
				this.widgets = widgets;	
			});
	}



}