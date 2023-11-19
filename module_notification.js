export class Notification {
        constructor() {
                this.noti_bar = document.querySelector(".noti_bar");
                this.noti_msg = document.querySelector("#noti_msg");
        }

        showNoti(message) {
                this.noti_msg.innerHTML = message;
                this.noti_bar.classList.add("show");
                setTimeout(() => {
                        this.noti_bar.classList.remove("show");
                }, 1500);
        }
}
