import { Answer } from "./module_answer.js";
import { Question } from "./module_question.js";
import { Option } from "./module_option.js";
import { Result } from "./module_result.js";
import { Notification } from "./module_Notification.js";
const SDK = window.AFREECA.ext;
export class Master {
        constructor() {
                this.sdk = SDK();
                this.question = new Question();
                this.answer = new Answer();
                this.option = new Option();
                this.result = new Result();
                this.noti = new Notification();
                this.button = document.querySelector("#start_btn");
                this.button.addEventListener("click", this.start.bind(this));
                this.state = "off";
        }

        stop() {
                // 타이머 멈추는 기능
        }

        start() {
                if (this.state === "on") return;
                const question = this.question.getValue();
                if (!question) {
                        this.noti.showNoti("질문을 입력해주세요");
                        return;
                }

                this.answerList = this.answer.getAnswerList();
                if (this.answerList.length == 0) {
                        this.noti.showNoti("정답을 1개 이상 추가해주세요");
                        return;
                }

                this.member = this.option.getPossilbeMemberType();
                this.timerSetting = this.option.getTimerSetting();

                this.noticeQuiz(question);

                this.sdk.chat.listen(this.handleChatInfoReceived.bind(this));
                if (this.timerSetting) {
                        setTimeout(() => {
                                this.sdk.chat.listen(() => {});
                        }, this.timerSetting * 1000);
                }

                // 정답 채팅 option member 결과창 insert
                // 퀴즈 종료 => 결과 공지하기
                // 타이머 작동하기
                this.state = "on";
        }

        isAnswer(message) {
                return this.answerList.includes(message);
        }

        isPossibleMemberType(status) {
                if (status.isBJ) return false;
                if (this.member.includes("isNormal")) {
                        return true;
                }

                status = Object.entries(status)
                        .filter((v) => v[0].startsWith("is") && v[1] === true)
                        .map((v) => v[0]);

                console.log(status);
                for (let i = 0; i < status.length; i++) {
                        if (this.member.includes(status[i])) return true;
                }

                return false;
        }

        noticeQuiz(question) {
                this.sdk.chat.send("MESSAGE", question);
        }

        handleChatInfoReceived(action, chat) {
                this.result.addItem(JSON.stringify(this.isPossibleMemberType(chat.userStatus)));
                if (action === "MESSAGE" && this.isPossibleMemberType(chat.userStatus) && this.isAnswer(chat.message)) {
                        this.result.addItem(chat);
                }
        }
}

// extensionSdk.chat.listen(handleChatInfoReceived);
