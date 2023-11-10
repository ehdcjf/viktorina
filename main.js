const SDK = window.AFREECA.ext;
const extensionSdk = SDK();

const myStorage = window.localStorage;

function setLocalStorage(key, value) {}

myStorage.setItem("quizList", JSON.stringify());

const quizList = [];

console.log(extensionSdk);

const handleChatInfoReceived = (action, message) => {
        if (quizList.length > 0 && action === "MESSAGE") {
        }
};

extensionSdk.chat.listen(handleChatInfoReceived);