function hidemen(){
	document.getElementById("mennav").style.opacity="0";
	document.getElementById("mennav").style.top="37px";
}
function showmen(){
	document.getElementById("mennav").style.opacity="1";
	document.getElementById("mennav").style.top="103px";
}
function hidewomen(){
	document.getElementById("womennav").style.opacity="0";
	document.getElementById("womennav").style.top="37px";
}
function showwomen(){
	document.getElementById("womennav").style.opacity="1";
	document.getElementById("womennav").style.top="103px";
}
function hidecontact(){
	document.getElementById("contacticon").style.top="52px";
	document.getElementById("detailcontact").style.top="-53px";
	document.getElementById("detailcontact").style.width="375px";
}
function showcontact(){
	document.getElementById("contacticon").style.top="0px";
	document.getElementById("detailcontact").style.top="0px";
	document.getElementById("detailcontact").style.width="450px";
}
function hidemail(){
	document.getElementById("mailicon").style.top="52px";
	document.getElementById("detailmail").style.top="-53px";
	document.getElementById("detailmail").style.width="375px";
}
function showmail(){
	document.getElementById("mailicon").style.top="0px";
	document.getElementById("detailmail").style.top="0px";
	document.getElementById("detailmail").style.width="450px";
}
function checkfname(){
	str=document.getElementById("fn").value;
	syms="~!@#$%^&*()_+|`-=\{}[]:;',./<>? ";
	nums="0123456789";
	loweralpha="abcdefghijklmnopqrstuvwxyz";
	upperalpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if(str.length>1){
		for(j=0;j<loweralpha.length;j++){
			if(str[str.length-1]==upperalpha[j]){
				str1="";
				for(i=0;i<str.length-1;i++)str1=str1+str[i];
				str1=str1+loweralpha[j];
				document.getElementById("fn").value=str1;
				str=str1;
			}
		}
	}
	for(j=0;j<loweralpha.length;j++){
		if(str[0]==loweralpha[j]){
			str1=upperalpha[j];
			for(i=1;i<str.length;i++)str1=str1+str[i];
			document.getElementById("fn").value=str1;
			str=str1;
		}
	}
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("fn").value=str1){
		for(i=0;i<nums.length;i++)if(str[j]!=nums[i])f++;
		if(f==nums.length)str1=str1+str[j];
	}
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("fn").value=str1){
		for(i=0;i<syms.length;i++)if(str[j]!=syms[i])f++;
		if(f==syms.length)str1=str1+str[j];
	}
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("fn").value=str1)if(str[j]!="\"")str1=str1+str[j];
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("fn").value=str1)if(str[j]!="\\")str1=str1+str[j];
	str=str1;
	dissubnone();
	diszipnone();
}
function checklname(){
	str=document.getElementById("ln").value;
	syms="~!@#$%^&*()_+|`-=\{}[]:;',./<>? ";
	nums="0123456789";
	loweralpha="abcdefghijklmnopqrstuvwxyz";
	upperalpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if(str.length>1){
		for(j=0;j<loweralpha.length;j++){
			if(str[str.length-1]==upperalpha[j]){
				str1="";
				for(i=0;i<str.length-1;i++)str1=str1+str[i];
				str1=str1+loweralpha[j];
				document.getElementById("ln").value=str1;
				str=str1;
			}
		}
	}
	for(j=0;j<loweralpha.length;j++){
		if(str[0]==loweralpha[j]){
			str1=upperalpha[j];
			for(i=1;i<str.length;i++)str1=str1+str[i];
			document.getElementById("ln").value=str1;
			str=str1;
		}
	}
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("ln").value=str1){
		for(i=0;i<nums.length;i++)if(str[j]!=nums[i])f++;
		if(f==nums.length)str1=str1+str[j];
	}
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("ln").value=str1){
		for(i=0;i<syms.length;i++)if(str[j]!=syms[i])f++;
		if(f==syms.length)str1=str1+str[j];
	}
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("ln").value=str1)if(str[j]!="\"")str1=str1+str[j];
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("ln").value=str1)if(str[j]!="\\")str1=str1+str[j];
	str=str1;
	dissubnone();
	diszipnone();
}
function checkemail(){
	str=document.getElementById("email").value;
	syms="~!%^*()_+|`-=\{}[]:;',/<>? ";
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("email").value=str1){
		for(i=0;i<syms.length;i++)if(str[j]!=syms[i])f++;
		if(f==syms.length)str1=str1+str[j];
	}
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("email").value=str1)if(str[j]!="\"")str1=str1+str[j];
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("email").value=str1)if(str[j]!="\\")str1=str1+str[j];
	str=str1;
	dissubnone();
	diszipnone();
}
function checkmobno(){
	str=document.getElementById("mobno").value;
	syms="~!@#$%^&*()_+|`-=\{}[]:;',./<>? ";
	alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("mobno").value=str1){
		for(i=0;i<alpha.length;i++)if(str[j]!=alpha[i])f++;
		if(f==alpha.length)str1=str1+str[j];
	}
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("mobno").value=str1){
		for(i=0;i<syms.length;i++)if(str[j]!=syms[i])f++;
		if(f==syms.length)str1=str1+str[j];
	}
	str=str1;
	if(str.length<10)document.getElementById("mobno").style.border="1px solid #F0424A";
	else document.getElementById("mobno").style.border="1px solid #90C225";
	dissubnone();
	diszipnone();
}
function checkcntcode(){
	str=document.getElementById("cntcd").value;
	syms="~!@#$%^&*()_+|`-=\{}[]:;',./<>? ";
	alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("cntcd").value=str1){
		for(i=0;i<alpha.length;i++)if(str[j]!=alpha[i])f++;
		if(f==alpha.length)str1=str1+str[j];
	}
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("cntcd").value=str1){
		for(i=0;i<syms.length;i++)if(str[j]!=syms[i])f++;
		if(f==syms.length)str1=str1+str[j];
	}
	str=str1;
	dissubnone();
	diszipnone();
}
function checkzip(){
	str=document.getElementById("zip").value;
	syms="~!@#$%^&*()_+|`-=\{}[]:;',./<>? ";
	alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("zip").value=str1){
		for(i=0;i<alpha.length;i++)if(str[j]!=alpha[i])f++;
		if(f==alpha.length)str1=str1+str[j];
	}
	str=str1;
	for(j=0,str1="",f=0;j<str.length;j++,f=0,document.getElementById("zip").value=str1){
		for(i=0;i<syms.length;i++)if(str[j]!=syms[i])f++;
		if(f==syms.length)str1=str1+str[j];
	}
	str=str1;
	if(str.length<10)document.getElementById("zip").style.border="1px solid #F0424A";
	else document.getElementById("zip").style.border="1px solid #90C225";
	diszipnone();
}
function checkform(){
	alert("Your suggestion has been submitted successfully "+document.getElementById("fn").value+" "+document.getElementById("ln").value+".");
}
function checkdetform(){
	alert("Your detail has been submitted successfully "+document.getElementById("fn").value+" "+document.getElementById("ln").value+".\nYou will receive your purchased shoes in few days.");
}
function dissubnone(){
	fname=document.getElementById("fn").value.length;
	lname=document.getElementById("ln").value.length;
	email=document.getElementById("email").value.length;
	cntcd=document.getElementById("cntcd").value.length;
	mobno=document.getElementById("mobno").value.length;
	msg=document.getElementById("msg").value.length;
	if(fname>0&&lname>0&&email>0&&cntcd>0&&mobno==10&&msg>0){
		document.getElementById("btnsubmit").style.opacity="1";
		document.getElementById("btnsubmit").style.position="relative";
		document.getElementById("btnsubmit").style.bottom="0px";
	}
	else{
		document.getElementById("btnsubmit").style.opacity="0";
		document.getElementById("btnsubmit").style.position="relative";
		document.getElementById("btnsubmit").style.bottom="-75px";
	}
}
function diszipnone(){
	fname=document.getElementById("fn").value.length;
	lname=document.getElementById("ln").value.length;
	email=document.getElementById("email").value.length;
	cntcd=document.getElementById("cntcd").value.length;
	mobno=document.getElementById("mobno").value.length;
	msg=document.getElementById("msg").value.length;
	zip=document.getElementById("zip").value.length;
	if(fname>0&&lname>0&&email>0&&cntcd>0&&mobno==10&&msg>0&&zip==6){
		document.getElementById("btnsubmit").style.opacity="1";
		document.getElementById("btnsubmit").style.position="relative";
		document.getElementById("btnsubmit").style.bottom="0px";
	}
	else{
		document.getElementById("btnsubmit").style.opacity="0";
		document.getElementById("btnsubmit").style.position="relative";
		document.getElementById("btnsubmit").style.bottom="-75px";
	}
}
function sizechange(){
	width=parseInt(document.getElementById("msg").style.width);
	height=parseInt(document.getElementById("msg").style.height);
	if(width!=400||height!=100){
		document.getElementById("msg").style.width="400px";
		document.getElementById("msg").style.height="100px";
	}
}