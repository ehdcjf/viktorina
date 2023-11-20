export class Memory {
        static instance;
        constructor() {
                if (Memory.instance) return Memory.instance;
                this.newQuiz = null;
                Memory.instance = this;
        }
}
