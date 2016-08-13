/*creating the XMLHttpRequest object*/

function getXmlHttp(){
	var xmlhttp;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
	try {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	} catch (E) {
		xmlhttp = false;
	}
	}
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

/*receive data ajax*/;

function addInfo(){
	
	var xhttp = getXmlHttp(); 

	xhttp.onreadystatechange=function(){
		if (xhttp.readyState==4 && xhttp.status==200){
			respons=JSON.parse(xhttp.responseText);
			info(respons);
		}
   }
	xhttp.open("GET","data.php",true);
	xhttp.send();
}

/*create table*/

function info(respons){
	
	var content=document.getElementById('content_info_first');
	content.innerHTML="";
	var table=document.createElement('table');
	var tr=document.createElement('tr');
	var sum=0;
	
	for(var i=0; i<4; i++){//  create th header
		var th=document.createElement('th');
		tr.appendChild(th);
	}
	
	table.appendChild(tr);
	
	for(var i=0; i<respons.length; i++){ //  create lines
		var tr=document.createElement('tr');
		
		for(var item in respons[i]) {  //  creating columns
			var td=document.createElement('td');			
			td.innerHTML=respons[i][item];//data record
			tr.appendChild(td);
		}
		
		sum=sum+((respons[i]['price'])*(respons[i]['count']));//the amount of product
		table.appendChild(tr);
	}
	
	var tr=document.createElement('tr');
	var td=document.createElement('td');
	
	td.innerHTML='Итого-'+sum;//conclusion sums
	td.setAttribute('id', 'sum');
	td.setAttribute('colspan', '4');
	tr.appendChild(td);
	table.appendChild(tr);
	content.appendChild(table);
	
	/*header table*/
	var thch=document.getElementsByTagName('th');
	thch[0].innerHTML='Производитель';
	thch[0].setAttribute('id', 'producer');
	thch[1].innerHTML='Название';
	thch[1].setAttribute('id', 'name');
	thch[2].innerHTML='Цена';
	thch[2].setAttribute('id', 'price');
	thch[3].innerHTML='Количество';
	thch[3].setAttribute('id', 'count');
	
	/*setting events click on th*/
	for(var i=0; i<thch.length; i++){
		thch[i].setAttribute('onclick', 'sort(this)');
	}
	
	/*setting events onclick on tr (product information delete)*/
	var trch=document.getElementsByTagName('tr');
	productDelete(respons);
		
	/*setting events mouseover on tr (product information)*/
	titleInfo(trch);
}

/*setting events mouseover product information*/

function titleInfo(trch){
	for (var i = 1; i < trch.length-1; i++){
	trch[i].onmouseover=function(pos){
		var content=document.getElementById('content_info_first');
		if(document.getElementById('info')){
			content.removeChild(document.getElementById('info'));
		}
		var text=this.childNodes[0].innerHTML+this.childNodes[1].innerHTML+"Цена "+this.childNodes[2].innerHTML+" руб.";
		var span=document.createElement('span');		
		span.setAttribute('id','info');
		span.style.left=pos.pageX+10+"px";
		span.style.top=pos.pageY+10+"px";
		span.innerHTML=text;
		content.appendChild(span);
    };
	trch[i].onmouseout=function(){
		var content=document.getElementById('content_info_first');
		content.removeChild(document.getElementById('info'));
		}
    };
	}

/*setting events onclick product delete*/
function productDelete(){
	document.getElementsByTagName("table")[0].onclick = function(e){
	var target = e ? e.target : event.srcElement;
		while ( target != this && target.nodeName.toLowerCase() != "tr"  ) {
            target = target.parentNode;
        }
		var index=-1;
		while ( (target = target.previousSibling) ) {
                if ( target.nodeType === 1 ) {
                    index++;
                }
            }
            if(index>=0 && index<respons.length){
				respons.splice(index, 1);
				info(respons);
			}
	}
}

/* sort table columns */
var id;
function sort(obj){
	var content=document.getElementById('content_info_first');
	content.innerHTML="";
	
	if(id==obj.getAttribute('id')){
		id="-"+(obj.getAttribute('id'));
	}
	else{
		id=obj.getAttribute('id');
	}
	var result=respons.sort(dynamicSort(id));
	info(result);
}

function dynamicSort(property) {
	
    var sortOrder = 1;
    if(property[0] == "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
		var obj_a=a[property].toLowerCase();
		var obj_b=b[property].toLowerCase();
        var result = (obj_a < obj_b) ? -1 : (obj_a > obj_b) ? 1 : 0;
        return result * sortOrder;
    }
}