export class OXQuizGenerator {
        static instance;
        constructor() {
                if (OXQuizGenerator.instance) return OXQuizGenerator.instance;
                this.root = document.querySelector("#ox_generator");
                OXQuizGenerator.instance = this;
        }
}
