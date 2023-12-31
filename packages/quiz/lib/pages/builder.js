import { dragNdrop } from "../components/dragdrop.js";
import { Router } from "../router.js";
import { Database } from "../database.js";
import { Memory } from "../memory.js";
const TITLE_DECO = [
        "가냘픈",
        "가는",
        "가엾은",
        "가파른",
        "거센",
        "거친",
        "건조한",
        "게으른",
        "게을러빠진",
        "게을러터진",
        "고달픈",
        "고른",
        "고마운",
        "고운",
        "곧은",
        "괜찮은",
        "구석진",
        "굳은",
        "굵은",
        "귀여운",
        "그른",
        "그리운",
        "기다란",
        "기쁜",
        "깊은",
        "깎아지른",
        "깨끗한",
        "나쁜",
        "난데없는",
        "날랜",
        "날카로운",
        "너그러운",
        "널따란",
        "넓은",
        "네모난",
        "느닷없는",
        "느린",
        "늦은",
        "더러운",
        "덜된",
        "동그란",
        "돼먹잖은",
        "뒤늦은",
        "드문",
        "딱한",
        "때늦은",
        "뛰어난",
        "뜨거운",
        "막다른",
        "막중한",
        "매운",
        "멋진",
        "메마른",
        "메스꺼운",
        "모난",
        "못난",
        "못된",
        "못생긴",
        "무거운",
        "무딘",
        "무른",
        "무서운",
        "미끈미끈한",
        "미친",
        "바람직스러운",
        "반가운",
        "밝은",
        "보드라운",
        "보람찬",
        "보잘것없는",
        "부드러운",
        "빠른",
        "뼈저린",
        "뽀얀",
        "뿌연",
        "새로운",
        "서툰",
        "섣부른",
        "성가신",
        "수줍은",
        "쉬운",
        "스스러운",
        "슬픈",
        "시원찮은",
        "싼",
        "쌀쌀맞은",
        "쏜살같은",
        "쓰디쓴",
        "아니꼬운",
        "아름다운",
        "아쉬운",
        "아픈",
        "안쓰러운",
        "안타까운",
        "알맞은",
        "약빠른",
        "얕은",
        "어두운",
        "어려운",
        "언짢은",
        "엄청난",
        "예쁜",
        "올바른",
        "옳은",
        "외로운",
        "우스운",
        "의심쩍은",
        "이른",
        "잘난",
        "잘빠진",
        "재미있는",
        "젊은",
        "점잖은",
        "조그만",
        "좋은",
        "주제넘은",
        "즐거운",
        "지나친",
        "지혜로운",
        "질긴",
        "짓궂은",
        "짙은",
        "케케묵은",
        "큰",
        "탐스러운",
        "푸른",
        "한결같은",
        "흐린",
        "희망찬",
        "힘겨운",
        "힘찬",
];

export class Builder {
        constructor() {
                this.router = new Router();
                this.memory = new Memory();
                if (!this.memory.newQuiz) {
                        this.memory.newQuiz = {
                                title: this.getRandomDeco() + " 퀴즈",
                        };
                }
                this.root = document.querySelector("#builder");
                this.create_btn = document.querySelector("#add_quiz_btn");
                // this.thema = document.querySelector("#quiz_thema");
                // this.thema.appendChild(dragNdrop());
                this.quiz_head = document.querySelector("#quiz_head_input");
                this.quiz_head.value = this.memory.newQuiz.title;
                this.quiz_list = document.querySelector("#quiz_list");
                this.create_btn.addEventListener("click", () => this.router.show("quiz"));
        }

        getRandomDeco() {
                const rand = Math.floor(Math.random() * 10000) % TITLE_DECO.length;
                console.log();
                return TITLE_DECO[rand];
        }
}
