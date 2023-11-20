import { Popup } from "./module/popup.js";
import { Router } from "./module/router.js";
import { Home } from "./module/home.js";
import { Generator } from "./module/generator.js";
import { QuizGenerator } from "./module/quiz.js";
import { Database } from "./module/database.js";
import { ShortAnswerQuizGenerator } from "./module/short_answer.js";
import { OXQuizGenerator } from "./module/ox.js";
const popup = new Popup();
var router = new Router();
const home = new Home();
const generator = new Generator();
const quizGenerator = new QuizGenerator();
const oxGenerator = new OXQuizGenerator();
const shortAnswerGenerator = new ShortAnswerQuizGenerator();
const db = new Database();

router.addRouter(home)
        .addRouter(generator)
        .addRouter(quizGenerator)
        .addRouter(oxGenerator)
        .addRouter(shortAnswerGenerator);

router.init();

/// 테스트용 버튼
const home_btn = document.querySelector("#home_btn");

const quiz_btn = document.querySelector("#quiz_make_btn");

home_btn.addEventListener("click", () => router.show("home"));

quiz_btn.addEventListener("click", () => router.show("generator"));
