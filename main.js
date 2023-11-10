const SDK = window.AFREECA.ext;
const extensionSDK = SDK();
function init() {
        // do something
        console.log(extensionSDK);
}
console.log(extensionSDK);

extensionSDK.handleInitialization((userInfo, broadInfo, playerInfo) => {
        init();
});
user_screen.html, bj_screen.html, mo_user_screen.html;
