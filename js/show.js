$(document).ready(function() {

		Commtab();

		show();

	function Commtab() {

		var mytab = document.getElementById("tab");
		
		var myul = mytab.getElementsByTagName("ul")[0];
		
		var myli = myul.getElementsByTagName("li");
		
		var mydiv = mytab.getElementsByTagName("div");
		
		for(i = 0, len = myli.length; i < len; i++) {
			
			myli[i].index = i;
			
			myli[i].onclick = function() {
				
				for(var n = 0; n < len; n++) {
					
					myli[n].className = "";
					
					mydiv[n].className = "hide";
				
				}
				
				this.className = "Commod_sel";
				
				mydiv[this.index].className = "";

			}
		}
	}

	function show() {

		var flag = false;

		$(".Commod_xianl1").click(function() {

			if(flag) {
			
				$(".Commod_xianl2").show();
				
				flag = false;
				
			} else {
			
				$(".Commod_xianl2").hide();
				
				flag = true;
			}
		})

		$(".Commod_xianl3").click(function() {

			if(flag) {
				$(".Commod_xianl4").show();
				flag = false;
			} else {
				$(".Commod_xianl4").hide();
				flag = true;
			}
		})
	}
	
})