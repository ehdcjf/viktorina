import { Router } from '../router';
import { RoutingPage } from './routing_page';
export class Home extends RoutingPage {
	router: Router;
	create_quiz_btn: HTMLButtonElement;
	constructor() {
		super('#home');
		this.router = Router.getInstance();
		document.querySelector('#create_quiz_btn').addEventListener(
			'click',
			() => this.router.show('builder'),
		);
	}

	render() {
		// local storage 에서 내 퀴즈 불러오기
		// local storage에서  퀴즈 결과 불러오기
	}
}
