// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
function f(n) {
  return n ? n * f(n - 1) : 1;
}

function a(n, k) {
  return f(n)/f(n-k);
}

function c(n, k) {
  return f(n)/(f(k)*f(n-k));
}

function c_p(m, n) {
  return f(n+m-1)/(f(m)*f(n-1));
}

function p_p(n, n1, n2, n3, n4, n5) {
  return f(n)/(f(n1) * f(n2) * f(n3) * f(n4) * f(n5));
}

function print_pr_res() {
  var pr1 = document.getElementById("pr1").value;
  var pr2 = document.getElementById("pr2").value;
  var pr3 = document.getElementById("pr3").value;
  var pr4 = document.getElementById("pr4").value;
  var pr5 = document.getElementById("pr5").value;
  if (parseInt("0" + pr1) == 0) pr1 = parseInt("0" + pr1);
  if (parseInt("0" + pr2) == 0) pr2 = parseInt("0" + pr2);
  if (parseInt("0" + pr3) == 0) pr3 = parseInt("0" + pr3);
  if (parseInt("0" + pr4) == 0) pr4 = parseInt("0" + pr4);
  if (parseInt("0" + pr5) == 0) pr5 = parseInt("0" + pr5);
  var allpr = (parseInt(pr1) + parseInt(pr2) + parseInt(pr3) + parseInt(pr4) + parseInt(pr5));
  var res_pr = p_p(allpr, pr1, pr2, pr3, pr4, pr5);
  document.getElementById("result_pr").innerHTML = res_pr;
}

function print_p_res() {
  var pers = document.getElementById("vvod_p").value;
  var res_p = f(pers);
  document.getElementById("result_p").innerHTML=res_p;
}

function print_a_res() {
  var a_m = document.getElementById("vvod_a_m").value;
  var a_n = document.getElementById("vvod_a_n").value;
  if (a_m > a_n) {
    document.getElementById("result_a").innerHTML = "m > n"
  } else {
    var res_a = a(a_n, a_m);
    document.getElementById("result_a").innerHTML=res_a;
  }
}

function print_ar_res() {
  var a_m = document.getElementById("vvod_ar_m").value;
  var a_n = document.getElementById("vvod_ar_n").value;
  var res_ar = Math.pow(a_n, a_m);
  document.getElementById("result_ar").innerHTML=res_ar;
}

function print_c_res() {
  var m = document.getElementById("vvod_c_m").value;
  var n = document.getElementById("vvod_c_n").value;
  if (m > n) {
    document.getElementById("result_c").innerHTML = "m > n"
  } else {
    var res_c = c(n, m);
    document.getElementById("result_c").innerHTML=res_c;
  }
}
function print_cr_res() {
  var m = document.getElementById("vvod_cr_m").value;
  var n = document.getElementById("vvod_cr_n").value;
  if (m < n) {
    document.getElementById("result_cr").innerHTML = "m > n";
  } else {

    // alert(mr + " " + nr + " " + c_p(4, 2));
    // var res_cr = c_p(mr, nr);

    document.getElementById("result_cr").innerHTML = c_p(parseInt("10", m), parseInt("10", n));
  }

}
