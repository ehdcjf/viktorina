import { Router } from '../router';
import { RoutingPage } from './routing_page';

export class Quiz extends RoutingPage {
	private router: Router;
	private quizItem: Record<string, any>;
	quizType: NodeListOf<HTMLElement>;
	quizAnswer: NodeListOf<Element>;
	q: HTMLTextAreaElement;
	quizTimer: NodeListOf<HTMLDivElement>;
	quizPoint: NodeListOf<HTMLDivElement>;
	constructor() {
		super('#quiz');
		this.router = Router.getInstance();

		document.querySelector('#resolve_quiz_btn').addEventListener(
			'click',
			() => this.router.show('builder'),
		);

		document.querySelector('#reject_quiz_btn').addEventListener(
			'click',
			() => this.router.show('builder'),
		);

		this.q = document.querySelector('#question_input');

		this.quizType = document.querySelectorAll('.type_item');
		this.quizTimer = document.querySelectorAll('.timer_item');
		this.quizPoint = document.querySelectorAll('.point_box');

		this.quizAnswer = document.querySelectorAll('.quiz_answer');
		this.quizAnswer.forEach((element: HTMLDivElement) => {
			element.style.display = 'none';
		});

		this.quizType.forEach((element) => {
			element.addEventListener(
				'click',
				this.setQuizType.bind(this),
			);
		});

		this.quizTimer.forEach((element) => {
			element.addEventListener(
				'click',
				this.setQuizTimer.bind(this),
			);
		});

		this.quizPoint.forEach((element) => {
			element.addEventListener(
				'click',
				this.setQuizPoint.bind(this),
			);
		});
	}

	render(): void {
		this.quizItem = {};
	}

	setQuizType(event: any) {
		this.quizType.forEach((element) => {
			element.style.backgroundColor = '#fff';
		});
		event.target.style.backgroundColor = '#60F7F2';

		this.quizItem['type'] = event.target.dataset.value;
		this.quizAnswer.forEach((element: HTMLDivElement) => {
			if (this.quizItem['type'] === element.id) {
				element.style.display = 'flex';
			} else {
				element.style.display = 'none';
			}
		});
	}
	setQuizTimer(event: any) {
		this.quizTimer.forEach((element) => {
			element.style.backgroundColor = '#fff';
		});
		event.target.style.backgroundColor = '#60F7F2';
		this.quizItem['timer'] =
			Number(event.target.dataset.value) * 1000;
	}

	setQuizPoint(event: Event & any) {
		this.quizPoint.forEach((element) => {
			element.style.backgroundColor = '#fff';
			element.childNodes.forEach((child: any) => {
				if (child.nodeType == 1)
					child.style.backgroundColor = '#fff';
			});
		});

		event.currentTarget.style.backgroundColor = '#60F7F2';

		event.currentTarget.childNodes.forEach((child: HTMLElement) => {
			if (child.nodeType == 1)
				child.style.backgroundColor = '#60F7F2';
		});

		this.quizItem['point'] = event.currentTarget.dataset.value;
	}
}
