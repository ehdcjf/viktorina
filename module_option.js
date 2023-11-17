export class Option {
        constructor() {
                this.member = "all";
                // this.box = document.querySelector("#option_box");
                document.getElementsByName("member").forEach((element) => {
                        element.addEventListener("click", this.setMemverValue);
                });

                this.timer_selector = document.querySelector("#timer");
        }

        setMemverValue(e) {
                this.member = e.target.value;
        }

        getPossilbeMemberType() {
                return this.member;
        }

        getTimerSetting() {
                return this.timer_selector.value;
        }
}
