export class Result {
        constructor() {
                this.ul = document.querySelector("#result_list");
        }
        addItem(userInfo) {
                const li = document.createElement("li");
                li.innerText = `${userInfo.userNickname}(${userInfo.userId})`;
                this.ul.appendChild(li);
        }
}
