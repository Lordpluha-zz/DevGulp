document.addEventListener('DOMContentLoaded', function() {
	
	// Content upploading effect
	var AnimItems = document.getElementsByClassName('._anim-elem');

	function offset(el) {
		var rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
	}

	function animOnScroll () {
		for (var index = 0; index < AnimItems.length; index++) {
			var AnimItem = AnimItems[index];
			var AnimItemHeight = AnimItem.offsetHeight;
			var AnimItemOffset = offset(AnimItem).top;
			var animStart = 4;

			var animItemPoint = window.innerHeight - AnimItemHeight / animStart;
			if (AnimItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((window.pageYOffset > AnimItemOffset - animItemPoint) && window.pageYOffset < (AnimItemOffset + AnimItemHeight)) {
				AnimItem.classList.add('_active__fx');
			}
		}
	}

	$(window).scroll(animOnScroll);

	setTimeout(animOnScroll, 300);

	console.log('JS succesfully initializated!');

});