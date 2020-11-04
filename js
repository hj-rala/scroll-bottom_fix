//scrollQuick
var scrollQuick = function() {
	var winWidth = $(window).width();
	var $tmp = $(window).scrollTop();
	var $contHeight = $(document).height() - $(window).height() - $("footer").height() - 60;
	var $quickBtn = $('.quick');
	var $quickH = $quickBtn.height();
	var $target = $quickBtn.outerHeight();

	if (winWidth > 768){
		$quickBtn.fadeIn(300);
	} else {
		if ($tmp < $target){
			$quickBtn.fadeOut(300);
		} else if($contHeight <= $tmp){
			$quickBtn.css({'bottom': $tmp - $contHeight});
		} else {
			$quickBtn.fadeIn(300);
			$quickBtn.css({'bottom': 0});
		}
	}
}
$(window).scroll(function() {
	scrollQuick();
});
$(window).resize(function() {
	scrollQuick();
});
