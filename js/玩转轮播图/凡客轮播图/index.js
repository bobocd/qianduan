var flash=document.getElementById('flash');
var is = flash.getElementsByTagName('img');
var li = flash.getElementsByTagName('li');
var c=0;
setInterval(function(){
	c++;
	c = c==4?0:c;
	for(var i=0;i<is.length;i++){
		is[i].style.display='none';
		li[i].style.background='#DDDDDD';
	}
	// console.log(c);
	is[c].style.display='block';
	li[c].style.background='#A10000';
},1000);