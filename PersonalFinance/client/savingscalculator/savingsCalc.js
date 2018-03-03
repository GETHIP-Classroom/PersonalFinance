$(document).ready(function() {
    $('select').material_select();
  });

var P = document.getElementById("initial").value;
var R = document.getElementById("rate").value;
var T = document.getElementById("time").value;
var D = document.getElementById("deposit").value;
var N = 12;

function savingsAmount (P,R,T,D,N) {
  console.log("P = " + P)
  console.log("R = " + R)
  console.log("T = " + T)
  console.log("D = " + D)
  return (P + D) * (1 + ((R/100) / N ))^(N * T)
}