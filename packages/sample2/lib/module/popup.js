import { Router } from "./router.js";

export class Popup {
        static instance;
        constructor() {
                if (Popup.instance) return Popup.instance;
                this.router = new Router();
                this.popupBox = document.querySelector("#popup_box");
                this.popupContainer = document.querySelector("#popup_container");

                this.openBtn = document.querySelector("#open_popup_btn");
                this.closeBtn = document.querySelectorAll(".close_popup_btn");

                this.openBtn.addEventListener("click", this.openPopup.bind(this));
                this.closeBtn.forEach((btn) => {
                        btn.addEventListener("click", this.closePopup.bind(this));
                });
                this.popup = {
                        quiz: document.querySelector("#quiz_popup"),
                        timer: document.querySelector("#timer_popup"),
                };

                this.setQuizPopup();
                Popup.instance = this;
                return Popup.instance;
        }

        openPopup(type) {
                this.popupContainer.childNodes.forEach((child) => {
                        if (child.nodeType == 1) child.style.display = "none";
                });
                this.popup[type].style.display = "block";
                this.popupContainer.style.display = "block";
        }

        closePopup() {
                this.popupContainer.style.display = "none";
        }

        setQuizPopup() {
                document.querySelector("#multi_choice_quiz_btn").addEventListener("click", () => {
                        this.router.show("quiz_generator");
                        this.closePopup();
                });
                document.querySelector("#ox_quiz_btn").addEventListener("click", () => {
                        this.router.show("ox_generator");
                        this.closePopup();
                });
                document.querySelector("#short_answer_quiz_btn").addEventListener("click", () => {
                        this.router.show("short_answer_generator");
                        this.closePopup();
                });
        }
}
