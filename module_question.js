export class Question {
        constructor() {
                this.box = document.querySelector("#question_box");
                this.target = document.querySelector("#question");
        }

        getValue() {
                return this.target.value;
        }
}
