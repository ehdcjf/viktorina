import { Answer } from "./module_answer.js";
import { Question } from "./module_question.js";

const SDK = window.AFREECA.ext;
const extensionSdk = SDK();
let question;
let answer;
const quizList = [];
window.addEventListener("DOMContentLoaded", () => init());

function init() {
        question = new Question();
        answer = new Answer();

        console.log(question.box);
        console.log(answer.box);
}
document.querySelector("#start_btn").addEventListener("click", () => run());

function run() {
        const q = question.getValue();
        const a = answer.getAnswerList();
        console.log(a);
}

const handleChatInfoReceived = (action, message) => {
        console.log(message);
        document.querySelector("#test").innerHTML = message;
        alert(message);
        if (quizList.length > 0 && action === "MESSAGE") {
        }
};

extensionSdk.chat.listen(handleChatInfoReceived);
