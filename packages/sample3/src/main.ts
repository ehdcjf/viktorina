import './index.css';
import { Router } from './router';
import { Home } from './pages/home';
import { Builder } from './pages/builder';
import { Quiz } from './pages/quiz';
Router.getInstance()
	.addRouter(new Home())
	.addRouter(new Builder())
	.addRouter(new Quiz());

Router.getInstance().init();
