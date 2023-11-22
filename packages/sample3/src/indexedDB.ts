export class Database {
	db: IDBDatabase;
	rw: IDBTransaction;
	ro: IDBTransaction;
	constructor() {
		const requeset = window.indexedDB.open('quiz-db', 1);
		requeset.onerror = (event) => {
			console.error(
				"Why didn't you allow my web app to use IndexedDB?!",
			);
		};

		requeset.onsuccess = (event) => {
			this.db = (event.target as any).result;
		};

		requeset.onupgradeneeded = (event) => {
			// DB 초기 설정

			this.db = (event.target as any).result;
			const objectStore = this.db.createObjectStore('quiz', {
				autoIncrement: true,
			});
		};

		this.rw = this.db.transaction(['quiz'], 'readwrite');
		this.ro = this.db.transaction(['quiz'], 'readonly');
	}
}
