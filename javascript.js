$(function(){

	var player1;
	var player2;

function randomStart() {
	var random = Math.random();
	if (random>0.5) {player2=true; player1=false;}
	else {player1=true; player2=false;}
}

randomStart();

	var clickID = "";
	var hash = {
		"a":1,
		"b":2,
		"c":3,
		"d":4,
		"e":5,
		"f":6,
		"g":7,
		"h":8,
		"i":9,
	};
	var gameover=false;
	// var verticalLogic =[1,-1];
	// var horizontalLogic = [3,-3];
	// var leftDiaLogic = [4,-4];
	// var rightDiaLogic = [2,-2]

	//1=9
	//2=4=6=8
	//3=7
	//5

	// var leftToRightCornersLogic = [1,-1,3,-3,4,-4]; 	//1=9
	// var midLogic = [1,-1,2,-2,3,-3,4,-4];				//5
	// var RightToLeftCornersLogic = [1,-1,2,-2,3,-3]; 	//3=7
	// var othersLogic = [1,-1,3,-3]; 						//2=4=6=8

	var checkingID = ["a","b","c","d","e","f","g","h","i"];
	var array = [[],[],[]];
	var count = 0;
	for(var i=0; i<3; i++){
		for(var d=0;d<3;d++){
			if(i>0) {
				array[i][d] = checkingID[i+d+i*2];
			}
			else {
				 array[i][d] = checkingID[i+d];
			}
		}
	}

	function win() {
	var winner = false;
	var winCount=0;
	for(var i=0; i<3; i++){
		for(var d=0;d<3;d++){
			if(document.getElementById(array[i][d]).childNodes[0]){
			if(document.getElementById(array[i][d]).childNodes[0].id==checkHTML){
				winCount++;
				if(winCount==3){
					winner=true;
				}
			}
		}
		}
		winCount=0;
	}
	for(var i=0; i<3; i++){
		for(var d=0;d<3;d++){
			if(document.getElementById(array[d][i]).childNodes[0]){
			if(document.getElementById(array[d][i]).childNodes[0].id==checkHTML){
				console.log("HI");
				winCount++;
				if(winCount==3){
					winner=true;
				}
			}
		}
		}
		winCount=0;
	}
		var i =0;
		while(i<3) {
			if(document.getElementById(array[i][i]).childNodes[0]) {
			if(document.getElementById(array[i][i]).childNodes[0].id==checkHTML){
				winCount++;
			}
			}
			i++;
		}
		if(winCount==3) {
			winner=true;
		}
		else {
		winCount=0;
	}
		var i =2;
		var k =0;
		while(i>=0) {
			if(document.getElementById(array[k][i]).childNodes[0]) {
			if(document.getElementById(array[k][i]).childNodes[0].id==checkHTML){
				winCount++;
			}
			}
			i--;
			k++;
		}
		if(winCount==3) {
			winner=true;
		}
		else {
		winCount=0;
	}
	if (winner==true) {document.getElementById("youWin").style.zIndex="999"; gameover=true;}

}

var checkHTML = "";
var turnCount =0;
$(".box").click(function(){
	if (!gameover) {
	if (player1) {
		if ($(this).html()=="") {
			$(this).html("<img src='o.jpg' width='100px' id='o'/>");
			player1 = false;
			player2 = true;
			checkHTML="o";
			turnCount++;
			document.getElementById("turnCount").innerHTML="player1";
		};
	}

	else if (player2) {
			if ($(this).html()=="") {
				$(this).html("<img src='x.png' width='100px' id='x'/>");
				player1 = true;
				player2 = false;
				checkHTML="x";
				turnCount++;
				document.getElementById("turnCount").innerHTML="player2";
			};
	};

	// clickID = $(this).attr("id");
					console.log("after player1= "+player1);
				}
	 win();
	 // document.getElementById("turnCount").innerHTML();
 });

	// function win() {
	// 	// var clickKey = hash[clickID]; 
	// 	// checkKey(clickKey,checkHTML);
	// 		alert("winner!");
	// 	}

	// };

	// function getID(id) {
	// 	return document.getElementById(id).innerHTML();
	// }

// 	function checkKey(clickKey,checkHTML) {
// 		var count=0;
// 		var checkKey;

// 		switch(clickKey) {

// 		case 0,8: 
// 			while (count<leftToRightCornersLogic.length) {
// 				checkKey = clickKey+leftToRightCornersLogic[count];
// 				checkID(checkKey,leftToRightCornersLogic[count],checkHTML);
// 				// checkKey.push(clickKey+leftToRightCornersLogic[count]);
// 				// direction = leftToRightCornersLogic;
// 				count++;
// 			}
// 			break;

// 		case 1,3,5,7:
// 			while (count<othersLogic.length) {
// \				checkKey = clickKey+othersLogic[count];
// 				checkID(checkKey,othersLogic[count],checkHTML);
// 				count++;
// 			}
// 			break;

// 		case 2,6:
// 			while (count<RightToLeftCornersLogic.length) {
// 				checkKey = clickKey+RightToLeftCornersLogic[count];
// 				checkID(checkKey,RightToLeftCornersLogic[count],checkHTML);
// 				count++;
// 			}
// 			break;

// 		case 4:
// 			while (count<midLogic.length) {
// 				checkKey = clickKey+midLogic[count];
// 				checkID(checkKey,midLogic[count],checkHTML);
// 				count++;
// 			}
// 			break;

// 		default:
// 			break;
// 		};
// 	};


// 	function checkID(checkKey,increment,checkHTML) {
// 		var checkID='';
// 		if(checkingID[checkKey]){
// 			checkID=checkingID[checkKey];
// 			checkingHTML(checkID,increment,checkHTML);
// 		};
// 	};


// 	function checkingHTML(checkID, increment, checkHTML) {
// 		var count=0;
// 		var winner = false;
// 			if (document.getElementById(checkID).innerHTML == checkHTML) {
// 				var secCheckKey = hash[checkID];
// 				secCheckKey=secCheckKey + increment;
// 					if(checkingID[secCheckKey]){
// 						var secCheckID = checkingID[secCheckKey];
// 						if (document.getElementById(secCheckID).innerHTML == checkHTML) {
// 							alert("winner!");
// 						};
// 					};
// 				};
// 			};




$("#restart").click(function(){
	$(".box").html("");
	winner=false;
	gameover=false;
	document.getElementById("youWin").style.zIndex="-1"
	randomStart();
});

});
