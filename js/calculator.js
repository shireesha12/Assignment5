/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function enter(val) {
	"use strict";
 $("result").value += val;
  }

function calculate() {
	"use strict";
	$("result").value = eval($("result").value);
}

function init () {
	"use strict";
	$("buttons").addEventListener("click", function (e) {
		window.console.log(e.target.value);
		if (e.target.value === '=')
			{
				calculate();
			} else {
				enter(e.target.value);
			}
	});
}
/*function init() {
	"use strict";
	document.getElementById("nine").addEventListener("click", function () {
		enter($("nine").value); }, false);
	document.getElementById("eight").addEventListener("click", function () {
		enter($("eight").value); }, false);
	document.getElementById("seven").addEventListener("click", function () {
		enter($("seven").value); }, false);
	document.getElementById("six").addEventListener("click", function () {
		enter($("six").value); }, false);
	document.getElementById("five").addEventListener("click", function () {
		enter($("five").value); }, false);
	document.getElementById("four").addEventListener("click", function () {
		enter($("four").value); }, false);
	document.getElementById("three").addEventListener("click", function () {
		enter($("three").value); }, false);
	document.getElementById("two").addEventListener("click", function () {
		enter($("two").value); }, false);
	document.getElementById("one").addEventListener("click", function () {
		enter($("one").value); }, false);
	document.getElementById("zero").addEventListener("click", function () {
		enter($("zero").value); }, false);
	document.getElementById("add").addEventListener("click", function () {
		enter($("add").value); }, false);
	document.getElementById("subtract").addEventListener("click", function () {
		enter($("subtract").value); }, false);
	document.getElementById("multiply").addEventListener("click", function () {
		enter($("multiply").value); }, false);
	document.getElementById("divide").addEventListener("click", function () {
		enter($("divide").value); }, false);
	document.getElementById("period").addEventListener("click", function () {
		enter($("period").value); }, false);
	document.getElementById("equal").addEventListener("click", function () {
		calculate(); }, false);
	}*/
window.addEventListener("load", init, false);
