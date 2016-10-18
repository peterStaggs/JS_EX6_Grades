var score = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var least = score[0]; 
var most = score[0];


for (var i = 0; i < score.length; i++) {
	if (score[i] <= least) {
		least = score[i];
	}
	else if (score[i] >= most) {
		most = score[i];
	}
}

console.log("The highest grade is ", most);  
console.log("The lowest grade is ", least);
console.log("The grades are ", score);
