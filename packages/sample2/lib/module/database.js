export class Database {
        constructor() {
                if (!("indexedDB" in window)) {
                        console.log("This browser doesn't support IndexedDB.");
                        return;
                }

                const DBOpenRequest = window.indexedDB.open("quiz-db", 1);

                DBOpenRequest.onerror = (event) => {
                        console.error("Erorr Loading database");
                        console.error(event);
                };

                DBOpenRequest.onsuccess = (event) => {
                        console.log("Database initialized");
                        this.db = DBOpenRequest.result;
                };

                DBOpenRequest.onupgradeneeded = (event) => {
                        const db = event.target.result;

                        db.onerror = (event) => {
                                console.error("Erorr Loading database");
                                console.error(event);
                        };

                        const objectStore = db.createObjectStore("quizList", {
                                keyPath: "quizTitle",
                        });
                };
        }
}
