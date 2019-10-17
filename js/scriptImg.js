// JavaScript Document
function showImage(imgName) {
                document.getElementById('largeImg').src = imgName;
				showLargeImagePanel();
                unselectAll();
            }
            function showLargeImagePanel() {
                document.getElementById('largeImgPanel').style.visibility = 'visible';
				document.getElementById('msg').style.visibility='visible';
            }
            function unselectAll() {
                if(document.selection) document.selection.empty();
                if(window.getSelection) window.getSelection().removeAllRanges();
            }
            function hideMe(obj) {
                obj.style.visibility = 'hidden';
				document.getElementById("msg").style.visibility= 'hidden';
            }
			
function changeColor(){
		document.getElementById("msg").style.color="#D94A38";
}

function changeBack(){
	    document.getElementById("msg").style.color="#DCDCDC";
}

function borderColor(obj){
	obj.style.borderColor="red";
	obj.style.boxShadow="5px 7px 4px #333333";
	obj.style.color="red";
	obj.style.backgroundColor="#0C0";
	obj.style.borderTopColor="red";
}

function borderColor2(obj){
	obj.style.borderColor="#036";
	obj.style.boxShadow="2px 4px 2px #333333";	
	obj.style.color="black";
	obj.style.backgroundColor="#090";
	obj.style.borderTopColor="#036";
}

function borderColor3(obj){
	obj.style.color="red";
	obj.style.backgroundColor="#0C0";
	obj.style.borderTopColor="red";
}

function borderColor4(obj){
	obj.style.color="black";
	obj.style.backgroundColor="#090";
	obj.style.borderTopColor="#036";
}

function anchorIn(){
	document.getElementById("top").style.color="red";
	document.getElementById("top").style.fontWeight="bold";
}

function anchorOut(){
	document.getElementById("top").style.color="#303030";
	document.getElementById("top").style.fontWeight="normal";
}
