$(function(){
	var lista=$("#gal").children("li");
	var dl=lista.length;
	var i=0;

	zamien=function(){
		lista.eq(i).fadeOut(500, function(){
			i+=1;
			if (i==dl){
				i=0;
			}
			lista.eq(i).fadeIn(500);
		});
	};
	lista.not(":first").hide();
	setInterval(zamien,3000);
	
	var listad=$("#gal2").children("li");
	var d=listad.length;
	var k=0;

	$("#prawy").click(function(){
		listad.eq(k).fadeOut(500, function(){
		k+=1;
		if (k==d){
			k=0;
			};
			listad.eq(k).fadeIn(500);
			});
	});
	$("#lewy").click(function(){
			listad.eq(k).fadeOut(500, function(){
			k-=1;
			if (k<0){
				k=d-1;
			}
			listad.eq(k).fadeIn(500);
			});
		});
	listad.not(":first").hide();
	

	
});	
