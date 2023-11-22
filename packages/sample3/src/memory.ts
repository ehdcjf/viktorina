export class Memory {
	private static instance: Memory;
	private quiz: any;
	private constructor() {
		this.quiz = {};
	}

	public static getInstance() {
		Memory.instance ??= new Memory();
		return Memory.instance;
	}

	public getQuiz() {
		return this.quiz;
	}

	public setQuiz(obj: any) {
		this.quiz = obj;
	}
}
