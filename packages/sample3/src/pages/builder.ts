// import { dragNdrop } from '../components/dragdrop.js';
import { Router } from '../router';
import { TITLE_DECO } from '../title_deco';
import { Memory } from '../memory';
import { RoutingPage } from './routing_page';

export class Builder extends RoutingPage {
	private router: Router;
	private state: Memory;
	private create_btn: HTMLButtonElement;
	private quiz_head: HTMLInputElement;
	private quiz_list: HTMLUListElement;

	constructor() {
		super('#builder');
		this.router = Router.getInstance();
		this.state = Memory.getInstance();

		this.create_btn = document.querySelector('#add_quiz_btn');
		this.quiz_head = document.querySelector('#quiz_head_input');
		this.quiz_list = document.querySelector('#quiz_list');

		this.create_btn.addEventListener('click', () =>
			this.router.show('quiz'),
		);
	}

	render() {
		// 새로 만들기 일 경우
		if (this.state.getQuiz()) {
			const tempTitle = this.getRandomDeco() + ' 퀴즈';
			this.state.setQuiz({ title: tempTitle });
		}
		this.quiz_head.value = this.state.getQuiz().title;
		// 그냥 view일 때,
		// 로컬스토리지에서 퀴즈리스트에 있는거 불러오기
	}

	getRandomDeco() {
		const rand =
			Math.floor(Math.random() * 10000) % TITLE_DECO.length;
		return TITLE_DECO[rand];
	}
}
