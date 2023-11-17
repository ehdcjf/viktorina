export class Option {
        constructor() {
                this.member = {
                        normal: true,
                        supporter: true,
                        follower: true,
                        fan: true,
                        topFan: true,
                        manager: true,
                };
                // this.box = document.querySelector("#option_box");
                document.getElementsByName("member").forEach((element) => {
                        element.addEventListener("click", this.setMemverValue.bind(this));
                });
                this.timer_selector = document.querySelector("#timer");
        }

        setMemverValue(e) {
                this.member[e.target.value] = !this.member[e.target.value];
        }

        getPossilbeMemberType() {
                return Object.entries(this.member)
                        .filter((v) => v[1])
                        .map((v) => v[0]);
        }

        getTimerSetting() {
                return this.timer_selector.value;
        }
}
