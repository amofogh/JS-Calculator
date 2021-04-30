$(document).ready(function () {

  $(".equal").on("click", function () {
    Calc();
  });

  $(".Clear").on("click", function () {
    Clear();
  });

  $(".btn:not(.equal,.Clear)").on("click", function () {
    $(".Show").append(this.value);
  });

  function Calc() {
    var res = $(".Show").text();
    var result = eval(res);
    $(".Show").text(result);
  }

  function Clear() {
    $(".Show").text("");
  }
});
