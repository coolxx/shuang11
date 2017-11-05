$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
	$('#nav-wx').toggle(function(){
		$('.nav-wx').show()
	},function(){
		$('.nav-wx').hide()
	})
	$('#nav-wb').toggle(function(){
		$('.nav-wb').show()
	},function(){
		$('.nav-wb').hide()
	})
})