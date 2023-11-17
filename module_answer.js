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
                li.innerText = this.input.value;
                const btn = document.createElement("button");
                btn.innerHTML = "─";
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
                e.target.parentNode.remove();
        }

        getAnswerList() {
                return [...this.ul.childNodes].map((li) => li.innerText);
        }
}
