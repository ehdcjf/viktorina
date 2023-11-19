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
                this.timer = 10;
                // this.box = document.querySelector("#option_box");
                document.getElementsByName("member").forEach((element) => {
                        element.addEventListener("click", this.setMemverValue.bind(this));
                });

                document.getElementsByName("timer").forEach((element) => {
                        element.addEventListener("click", this.setTimerValue.bind(this));
                });

        }

        setMemverValue(e) {
                this.member[e.target.value] = !this.member[e.target.value];
        }

        setTimerValue(e){
                console.log(e);
                document.getElementsByName("timer")
                .forEach(element=>{
                        console.log(element.checked)
                        element.checked = false;
                })
                e.target.checked = true;

        }

        getPossilbeMemberType() {
                return Object.entries(this.member)
                        .filter((v) => v[1])
                        .map((v) => v[0]);
        }

        getTimerSetting() {
                const timeout = [...document.getElementsByName("timer")]
                .filter(element=>element.checked)
                .map(element=>element.value)[0];
                return timeout === "none" ? null : Number(timeout);
        }
}
