$("#mobile").focus(function() {
  $("#log-pwd").hide(),
    $("#log-user").show()
});

$("#pwd").focus(function() {
  $("#log-pwd").show(),
    $("#log-user").hide()
});

$("#login-btn").click(() => {
  if ($("#mobile").val() === "" || $("#pwd").val() === "") {
    $(".prompting").show();
  }
});

$(".close").click(() => {
  $(".prompting").hide();
});

$(".btn-default").click(() => {
  $(".prompting").hide();
});

$(".question_list p#index").each(function(index) {
  $(".question_list p#index").eq(index).click(function(event) {
    var answer = $(this).parent().next().children(".question_list_answer");
    if ($(this).children(".icon").attr('class') === "icon-question-plus icon") {
      $($(this).children(".icon")).addClass('icon-question-minus');
      answer.slideDown(400);

    } else {
      $($(this).children(".icon")).removeClass('icon-question-minus');
      answer.slideUp(400);
    }
  });
});

$("#regist-btn").click(function() {
  var phone = $("#mobile").val();
  if (!(/^1[34578]\d{9}$/.test(phone))) {
    $(".mobile-err").show();
  }

  if ($("#pwd").val() === "") {
    $(".pwd-err1").show();
  } else if ($("#pwd").val().length < 8 || $("#pwd").val().length > 16) {
    $(".pwd-err2").show();
  } else if (/(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{10,}$/) {
    $(".pwd-err3").show();
  }

  if ($("#conpwd").val() === "") {
    $(".conpwd-err1").show();
  } else if ($("#conpwd").val() != $("#pwd").val()) {
    $(".conpwd-err2").show();
  }

  if ($("#imgCode").val() === "") {
    $(".img-err").show()
  }

  if ($("#mobileCode").val() === "") {
    $(".mobileCode-err").show();
  }

  if ($('#xieyi').is(':checked')) {
    $(".xieyi-err").hide();
  } else {
    $(".xieyi-err").show();
  }

  $("#mobileCode").focus(function() {
    $(".mobileCode-err").hide();
  });

  $("#imgCode").focus(function() {
    $(".img-err").hide();
  });

  $("#conpwd").focus(function() {
    $(".conpwd-err1").hide(),
      $(".conpwd-err2").hide();
  });

  $("#mobile").focus(function() {
    $(".mobile-err").hide();
  });

  $("#pwd").focus(function() {
    $(".pwd-err1").hide(),
      $(".pwd-err2").hide(),
      $(".pwd-err3").hide()
  });
});

// $('.carousel').carousel({
//   interval: 2000
// });
$(".left-1 #left_1 li:nth-child(3) a").mouseover(function() {
  $(".left-1 #left_1 .app-1 img").show();
  console.log(this);
});

$(".left-1 #left_1 li:nth-child(3) a").mouseout(function() {
  $(".left-1 #left_1 .app-1 img").hide();
});


$(".left-1 #left_1 li:nth-child(5) a").mouseover(function() {
  $(".left-1 #left_1 .app-2 img").show();
});

$(".left-1 #left_1 li:nth-child(5) a").mouseout(function() {
  $(".left-1 #left_1 .app-2 img").hide();
});

$(".menu li").each(function(index) {
  $(".menu li").eq(index).click(function(event) {
    $(this).addClass('active').siblings().removeClass('active');
  });
});

var tabs = document.getElementsByClassName('abc')[0].children;
var contents = document.getElementsByClassName("show")[0].children;
for (var  i = 0; i < tabs.length; i++) {
  tabs[i].index = i;
  tabs[i].onclick = function(event) {
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].className = "";
      contents[j].className = "";
    }
    this.className = "active";
    console.log(this);
    contents[this.index].className = "active";
  };
}
