import { Popup } from "./pages/popup.js";
import { Router } from "./router.js";
import { Home } from "./pages/home.js";
import { Builder } from "./pages/builder.js";
import { Quiz } from "./pages/quiz.js";
import { Detail } from "./pages/detail.js";
import { History } from "./pages/history.js";
import { Runner } from "./pages/runner.js";
import { Database } from "./database.js";
const router = new Router();
const popup = new Popup();
const home = new Home();
const builder = new Builder();
const quiz = new Quiz();
const detail = new Detail();
const history = new History();
const runner = new Runner();
const database = new Database();

router.addRouter(home).addRouter(builder).addRouter(quiz).addRouter(detail).addRouter(history).addRouter(runner);

router.init();

/// 라우터 테스트용 코드
document.querySelector("#go_home").addEventListener("click", () => router.show("home"));
document.querySelector("#go_builder").addEventListener("click", () => router.show("builder"));
document.querySelector("#go_quiz").addEventListener("click", () => router.show("quiz"));
document.querySelector("#go_detail").addEventListener("click", () => router.show("detail"));
document.querySelector("#go_history").addEventListener("click", () => router.show("history"));
document.querySelector("#go_runner").addEventListener("click", () => router.show("runner"));
