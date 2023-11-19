export class Result {
        constructor() {
                this.ul = document.querySelector("#result_list");

                this.icons = {
                        isManager: (document.createElement("img").src = "assets/ic_manager.gif"),
                        isTopFan: (document.createElement("img").src = "assets/ic_hot.gif"),
                        isFan: (document.createElement("img").src = "assets/ic_fanclub.gif"),
                        isFollower: (document.createElement("img").src = "assets/ic_gudok.gif"),
                        isSupporter: (document.createElement("img").src = "assets/ic_support.gif"),
                };
        }
        addItem(userInfo) {
                const li = document.createElement("li");
                const order = (document.createElement("").innerText = `${this.ul.length + 1}.`);
                const icons = this.getIcons(userInfo.userStatus);
                const nick = (document.createElement("strong").innerText = userInfo.userNickname);
                const id = (document.createElement("span").innerText = `(${userInfo.userId})`);
                li.appendChild(order);
                icons.forEach((icon) => {
                        li.appendChild(icon);
                });
                li.appendChild(nick);
                li.appendChild(id);
                this.ul.appendChild(li);
        }

        getIcons(userStatus) {
                const icons = [];
                if (userStatus.isManager) {
                        icons.push(this.icons.isManager);
                        return icons;
                }

                if (userStatus.isFan || userStatus.isTopFan) {
                        if (userStatus.isFan) {
                                icons.push(this.icons.isFan);
                        } else {
                                icons.push(this.icons.isTopFan);
                        }
                }

                if (userStatus.isFollower) {
                        icons.push(this.icons.isFollower);
                }

                if (userStatus.isSupporter) {
                        icons.push(this.icons.isSupporter);
                }

                return icons;
        }
}
