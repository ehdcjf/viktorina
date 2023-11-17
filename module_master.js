import { Answer } from "./module_answer.js";
import { Question } from "./module_question.js";
import { Option } from "./module_option.js";
import { Result } from "./module_result.js";
const SDK = window.AFREECA.ext;
export class Master {
        constructor() {
                this.sdk = SDK();
                this.question = new Question();
                this.answer = new Answer();
                this.option = new Option();
                this.result = new Result();
                this.button = document.querySelector("#start_btn");
                this.button.addEventListener("click", this.start.bind(this));
        }

        stop() {
                // 타이머 멈추는 기능
        }

        start() {
                this.answerList = this.answer.getAnswerList();
                this.member = this.option.getPossilbeMemberType();
                this.timerSetting = this.option.getTimerSetting();
                
                this.noticeQuiz(this.question.getValue());

                // 타이머 작동하기

                // 정답 채팅 option member 결과창 insert
                // 퀴즈 종료 => 결과 공지하기
                //
        }

        isAnswer(message){
                return this.answerList.includes(message);
        }

        isPossibleMemberType(userInfo){
                switch(this.member){
                        case 'all': return true;        
                        case 'fan':
                                return userInfo.isFan || userInfo.is;
                        case 'topFan':
                                return userInfo.isTopFan;
                        case 'manager':
                                return userInfo.isManager;
                                
                        
                }

        }


        noticeQuiz(question) {
                this.sdk.chat.send("MESSAGE", question);
        }

        handleChatInfoReceived(action, message) {
                // if (action === "MESSAGE") {
                //         if(message.message=== this.answer)
                // }
        }
}

// function run() {
//         const q = question.getValue();
//         const a = answer.getAnswerList();
//         console.log(a);
// }

// const handleChatInfoReceived = (action, message) => {
//         console.log(message);
//         document.querySelector("#test").innerHTML = message;
//         alert(message);
//         if (quizList.length > 0 && action === "MESSAGE") {
//         }
// };

// extensionSdk.chat.listen(handleChatInfoReceived);
