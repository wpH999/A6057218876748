window.onload = function() {

	//实现全选
	checkAll();
	
	cart();

	function checkAll() {
		
		$("#checkAll").click(function() {

			$("input[name=check_box]").attr("checked", this.checked);

			setTotal();

			size();		

		})

		var subBox = $("input[name='check_box']");

		subBox.click(function() {

			if($(".SelectSingle").length == $(".SelectSingle:checked").length) {

				$("#checkAll :checkbox").attr("checked", true);
				
				size();

			} else {

				$("#checkAll :checkbox").attr("checked", false);
			}

				size();

				setTotal();

		})

	}

	function size() {
		
		setTotal();

		var item = document.querySelectorAll(".text_box");

		var num = 0;

		//返回的是多个input元素的集合。
		for(var i = 0; i < item.length; i++) {

			num += parseInt(item[i].value);

		}

		document.querySelector(".Settlement").innerHTML = "结算(" + num + ")";

	}

	remov();

	//删除
	function remov() {

		$(".remov").click(function() {

			var target = $(this).attr("target");

			$(".jd_win").show();

			$('.cancle').on('click', function() {

				$('.jd_win').hide();

			})

			$('.submit').on('click', function() {

				$("#" + target).remove();

				$('.jd_win').hide();
				
				setTotal();

				size();

			})

		})

	}

	colse();
	//清空失效商品
	function colse() {

		$(".empty").click(function() {

			$(".jd_win1").show();

			$('.cancle').on('click', function() {

				$('.jd_win1').hide();

			})

			$('.submit').on('click', function() {

				$("#cart_list").remove();

				$('.jd_win1').hide();
				
			})

		})

	}
	
	
	//价钱总额
	function cart() {

		$(".plus").click(function() {

			var t = $(this).parent().find('input[class*=text_box]');

			t.val(parseInt(t.val()) + 1)

			setTotal();
			
			size();
									
		})

		$(".minus").click(function() {

			var t = $(this).parent().find('input[class*=text_box]');

			t.val(parseInt(t.val()) - 1)

			if(parseInt(t.val()) <= 1) {

				t.val(1);
			}
			
			size();
		})

		setTotal();

	}

	//价钱总额
	function setTotal() {

		var s = 0;

		$(".cart-list").each(function() {

			s += parseInt($(this).find('input[class*=text_box]').val()) * parseFloat($(this).find('span[class*=cart_money]').text());

		});

		document.querySelector(".Total").innerHTML = "合计：" + s + "元";

	}

}