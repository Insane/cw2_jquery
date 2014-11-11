$(function(){
	var i=0;
	var i2=0;
	var i3=0;
	var i4=0;
	var i5=0;
	
	$("#button_send").click(function(){
	
		if($("#imie").val()==""){
			i+=1;
			$("#f1").css("background-color","#D9435C");
			if (i==1){
			$("#f1").append("<p>Uzupełnij pole!</p>");
		}}
		else{
			$("#f1").css("background-color","#F5ECCE");
			$("#f1 p").hide();
		}
		if($("#nazw").val()==""){
			i2+=1;
			$("#f2").css("background-color","#D9435C");
			if (i2==1){
			$("#f2").append("<p>Uzupełnij pole!</p>");
			}
		}else{
			$("#f2").css("background-color","#F5ECCE");
			$("#f2 p").hide();
		}
		if($("#email").val()==""){
			i3+=1;
			$("#f3").css("background-color","#D9435C");
			if(i3==1){
			$("#f3").append("<p>Uzupełnij pole!</p>");
			}
		}else{
			$("#f3").css("background-color","#F5ECCE");
			$("#f3 p").hide();
		}
		if($("#email").val().indexOf("@")==-1){
			i4+=1;
			$("#f3").css("background-color","#D9435C");
			if (i4>=1){
			$("#f3").append("<p>Podano zły adres!</p>");
				}
		}else{
			$("#f3").css("background-color","#F5ECCE");
			$("#f3 p").hide();
		}
		if($("#wiad").val()==""){
			i5+=1;
			$("#f4").css("background-color","#D9435C");
			if(i5==1){
			$("#f4").append("<p>Wprowadź wiadomość!</p>");
			}
		}else{
			$("#f4").css("background-color","#F5ECCE");
			$("#f4 p").hide();
		}
	});
	
});	
