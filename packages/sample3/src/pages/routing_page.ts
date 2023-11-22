import { Router } from '../router';

export abstract class RoutingPage {
	root: HTMLDivElement;
	constructor(elementId: string) {
		this.root = document.querySelector(elementId);
	}
	hide() {
		this.root.style.display = 'none';
	}

	show() {
		this.root.style.display = 'flex';
		this.render();
	}

	abstract render(): void;
}
