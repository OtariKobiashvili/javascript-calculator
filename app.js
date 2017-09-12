var entries = [];
var number = "";
var lc; //last clicked
var total;

$(document).ready(function(){
	$(".ac-btn").on("click", function(){
		$(".calc-screen").empty();
		number = "";
		entries = [];
		total;
	});
	$(".clear-btn").on("click", function(){

		$(".calc-screen").empty();
		number = "";
	});
	$(".num-btn").on("click",function(){
		var num = $(this).html();
		if(lc){
			$(".calc-screen").empty();
			lc = undefined;
		}
		if($(".calc-screen").html().length > 13){
		} else {
			$(".calc-screen").append(num);
			number += num;
		}
	})
	$(".op-btn").on("click",function(){
		lc = $(this).html();

		entries.push(Number(number));

		entries.push(lc);
		number = "";
	});
	$(".equ-btn").on("click",function(){
		lc = "="
		entries.push(Number(number));

		total = entries[0];
		for(i = 1; i < entries.length; i= i+2){
			var newNum = (entries[i+1]);
			var operator = entries[i]
			if (operator === "+"){
				total += newNum;
			} else if (operator === "-"){
				total -= newNum;
			} else if (operator === "x"){
				total *= newNum;
			} else if (operator === "÷"){
				total /= newNum;
			}
		}
		if(total.toString().length > 13){
			$(".calc-screen").html(total.toString().substring(0,14))
		} else {
			$(".calc-screen").html(total);
		}
		number = "";
		entries = [];
	});
})
