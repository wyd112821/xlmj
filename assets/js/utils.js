// 获取地址栏参数
function getUrlParam () {
  var _arr = location.search.substr(1).split('&');
  var _obj = {};
  for (var i = 0; i < _arr.length; i++) {
    _obj[_arr[i].split('=')[0]] = _arr[i].split('=')[1]
  };
  return _obj;
}

// 正则验证
var regex = {
  isPhone: function (value) {
      //验证手机号
      var tmp1 = /^1[3456789][0-9]{9}$/;
      if (tmp1.test(value)) {
          return true;
      } else {
          return false;
      }
  }
}

// 倒计时
function countDown(obj) {
  var yzmBtn = $(obj);
  var count = 60;
  var resend = setInterval(function () {
      count--;
      if (count > 0) {
          yzmBtn.text(count + "秒后重发")
      } else {
          clearInterval(resend);
          yzmBtn.text("发送验证码").removeAttr('disabled');
          yzmBtn.removeClass('disabled_btn');
      }
  }, 1000)
  yzmBtn.attr('disabled', true).addClass('disabled_btn');
}