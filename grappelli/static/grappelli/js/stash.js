
// // grp jQuery namespace
// var grp = {
//     "jQuery": jQuery.noConflict(true)
// };

// // django jQuery namespace
// var django = {
//     "jQuery": grp.jQuery.noConflict(true)
// };
// (function($){


// 	function stashLogin(){
// 		this.init();
		
// 	}

// 	stashLogin.prototype = {
// 		init: function(){
			
// 			var self=this;
// 			self.jsEvents();
			
// 		},
// 		jsEvents: function(){
			
// 			$(".line").css({
// 				'height':'100px'
// 			})
// 		}
// 	}

// var stashLoginObj = new stashLogin();
// })(grp.jQuery);