export class QuizGenerator {
        static instance;
        constructor() {
                if (QuizGenerator.instance) return QuizGenerator.instance;
                this.root = document.querySelector("#quiz_generator");
                QuizGenerator.instance = this;
        }
}
