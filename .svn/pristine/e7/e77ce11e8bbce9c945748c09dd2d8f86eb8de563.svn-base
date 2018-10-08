$(document).ready(function(){

	tab();

	Phonetab();

	detailstab();

	landtab();

	producttab();

	product();
	
	product1();

	function tab() {

		var tab = document.querySelectorAll(".tab");

		var lis;

		for(var i = 0; i < tab.length; i++) {

			lis = tab[i].getElementsByTagName("li");

			for(var j = 0; j < lis.length; j++) {

				(function(index) {

					lis[index].onclick = function() {

						var parent = this.parentNode.children;

						for(var k = 0; k < parent.length; k++) {

							parent[k].className = "";
						}

						this.className = "sel";

						var item_list = this.parentNode.parentNode.parentNode.children[1].children;

						for(var e = 0; e < item_list.length; e++) {

							item_list[e].className = "item-list";
						}

						item_list[index].className = "item-list checked"
					}
				})(j)
			}
		}
	}

	function Phonetab() {

		var tab = document.querySelectorAll(".tab1");

		var lis;

		for(var i = 0; i < tab.length; i++) {

			lis = tab[i].getElementsByTagName("li");

			for(var j = 0; j < lis.length; j++) {

				(function(index) {

					lis[index].onclick = function() {

						var parent = this.parentNode.children;

						for(var k = 0; k < parent.length; k++) {

							parent[k].className = "";
						}

						this.className = "tab-sel";

						var item_list = $(".list-item");

						for(var e = 0; e < item_list.length; e++) {

							item_list[e].className = "list-item";
						}

						item_list[index].className = "list-item checked"
					}
				})(j)
			}
		}
	}

	function detailstab() {

		var tab = document.querySelectorAll(".tab2");

		var lis;

		for(var i = 0; i < tab.length; i++) {

			lis = tab[i].getElementsByTagName("li");

			for(var j = 0; j < lis.length; j++) {

				(function(index) {

					lis[index].onclick = function() {

						var parent = this.parentNode.children;

						for(var k = 0; k < parent.length; k++) {

							parent[k].className = "";
						}

						this.className = "deta_sel";

						var item_list = this.parentNode.parentNode.parentNode.children[1].children;

						for(var e = 0; e < item_list.length; e++) {

							item_list[e].className = "deta_list";
						}

						item_list[index].className = "deta_list checked"
					}
				})(j)
			}
		}
	}

	function landtab() {

		var tab = document.querySelectorAll(".tab3");

		var lis;

		for(var i = 0; i < tab.length; i++) {

			lis = tab[i].getElementsByTagName("li");

			for(var j = 0; j < lis.length; j++) {

				(function(index) {

					lis[index].onclick = function() {

						var parent = this.parentNode.children;

						for(var k = 0; k < parent.length; k++) {

							parent[k].className = "";
						}

						this.className = "phone_sel";

						var item_list = this.parentNode.parentNode.parentNode.children[1].children;

						for(var e = 0; e < item_list.length; e++) {

							item_list[e].className = "Phone_list";
						}

						item_list[index].className = "Phone_list checked"
					}
				})(j)
			}
		}

	}


	function product() {

		var fication = document.getElementById("classification");

		var prod_show = document.querySelector(".prod_show");

		var flag = false;
		
		fication.onclick=function(){
	
			if(flag) {

				prod_show.style.display = "none";

				
				flag = false;

			} else {

				prod_show.style.display = "block";				
				
				flag = true;
			}
			
		}

	}

	function product1() {

		var sort = document.getElementById("sort");

		var prod_show1 = document.querySelector(".prod_show1");

		var flag = false;

		sort.onclick = function() {

			if(flag) {

				prod_show1.style.display = "none";

				flag = false;

			} else {

				prod_show1.style.display = "block";

				flag = true;
			}
		}
	}

	function producttab() {

		var tab = document.querySelectorAll(".tab4");

		var lis;

		for(var i = 0; i < tab.length; i++) {

			lis = tab[i].getElementsByTagName("li");

			for(var j = 0; j < lis.length; j++) {

				(function(index) {

					lis[index].onclick = function() {

						var parent = this.parentNode.children;

						for(var k = 0; k < parent.length; k++) {

							parent[k].className = "";
						}

						this.className = "prod_sel";

						var item_list = this.parentNode.parentNode.parentNode.children[1].children;

						for(var e = 0; e < item_list.length; e++) {

							item_list[e].className = "prod_list1";
						}

						item_list[index].className = "prod_list1 checked"
					}
				})(j)
			}
		}
	}
})