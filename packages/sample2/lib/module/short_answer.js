export class ShortAnswerQuizGenerator {
        static instance;
        constructor() {
                if (ShortAnswerQuizGenerator.instance) return ShortAnswerQuizGenerator.instance;
                this.root = document.querySelector("#short_answer_generator");
                ShortAnswerQuizGenerator.instance = this;
        }
}
