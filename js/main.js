
/* 
	1) locate the element that you want to center
	2) get the parent element
	3) get the parent element dimentions
*/

var centerElem = centerElem || {};
centerElem.vars = centerElem.vars || {};
centerElem.app = centerElem.app || {};

centerElem.vars = {

}

	centerElem.app = {
		
		init: function(){
			$('.centerElement').each(function(index){
				var elemHeight = $(this).height();
				var containerHeight = $(this).parent().height();
				var elemMiddle = elemHeight / 2;
				var containerMiddle = containerHeight / 2;
				var centerPos = 
				$(this).find('.info').html('container height = '+ containerHeight + ' element height = ' + elemHeight);

			});
		}
	};

$(document).ready(function(){
	centerElem.app.init();
});