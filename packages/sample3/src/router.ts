import { RoutingPage } from './pages/routing_page';

export class Router {
	private static instance: Router;
	private main: HTMLElement;
	private viewMap: Map<any, RoutingPage>;
	private constructor() {
		if (Router.instance) return Router.instance;
		this.main = document.querySelector('main');
		this.viewMap = new Map();
		Router.instance = this;
		return this;
	}

	public static getInstance() {
		Router.instance ??= new Router();
		return Router.instance;
	}

	addRouter(component: any) {
		const key = component.root.id;
		const value = component;
		this.viewMap.set(key, value);
		return this;
	}

	hideAll() {
		this.viewMap.forEach((v: RoutingPage) => v.hide());
	}

	show(name: string) {
		const component = this.viewMap.get(name);
		this.hideAll();
		component.show();
	}

	init() {
		this.viewMap.get('quiz').show();
	}
}

//red D01937
//blue 1368CE
//yellow D89E00
//green 26890C
//cyan 099696
//puple 846cbf
