
/**
 * 获得短信验证码，60秒倒计时
 * <button type="button" data-state="1" onclick="setCountDown(this,'获取验证码')">获取验证码</button>
 * data-state="1"  表示按钮处于可点击状态
 * data-state="0"  表示按钮处于倒计时状态，不可重新获取验证码
 * 参数：obj          倒计时按钮的dom对象
 *       buttonText   按钮的初始文字
 */
var countdown=60;
function setCountDown(obj,buttonText) {
    if (countdown == 0) {
        obj.innerHTML = buttonText;
        obj.setAttribute("data-state",1);
        countdown = 60;
    } else {
    	obj.setAttribute("data-state",0);
        obj.innerHTML = "(" + countdown + ")s";
        countdown--;
        setTimeout(function() {
            setCountDown(obj);
        },1000);
    }
}