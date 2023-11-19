export class Answer {
        constructor() {
                this.box = document.querySelector("#answer_box");
                this.ul = document.querySelector("#answer_list");
                this.input = document.querySelector("#answer_input");
                this.button = document.querySelector("#add_answer_btn");
                this.button.addEventListener("click", this.addItem.bind(this));
        }

        addItem() {
                if (this.input.value.trim() == "") return;
                const li = document.createElement("li");
                li.classList.add("answer_item");
                const strong = document.createElement("strong");
                strong.innerText = this.input.value;
                li.appendChild(strong);
                const btn = document.createElement("button");
                btn.classList.add("answer_btn");
                const minus = document.createElement("img");
                minus.src = "assets/minus.png";
                minus.width = "32px";
                minus.height = "32px";
                btn.appendChild(minus);
                
                this.handleRemoveItemListeners([btn]);
                li.appendChild(btn);
                this.ul.appendChild(li);
                this.input.value = "";
        }

        handleRemoveItemListeners(arrayOfElements) {
                arrayOfElements.forEach((element) => {
                        element.addEventListener("click", this.removeListItem, false);
                });
        }

        removeListItem(e) {
                e.target.parentNode.parentNode.remove();
        }

        getAnswerList() {
                return [...this.ul.childNodes].map((li) => li.innerText);
        }
}
