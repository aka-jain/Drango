/**
 * GRAPPELLI UTILS
 * functions needed for Grappelli
 */

// grp jQuery namespace
var grp = {
    "jQuery": jQuery.noConflict(true)
};

// django jQuery namespace
var django = {
    "jQuery": grp.jQuery.noConflict(true)
};

var inputTypes = [
    "[type='search']",
    "[type='email']",
    "[type='url']",
    "[type='tel']",
    "[type='number']",
    "[type='range']",
    "[type='date']",
    "[type='month']",
    "[type='week']",
    "[type='time']",
    "[type='datetime']",
    "[type='datetime-local']",
    "[type='color']"].join(",");

(function($) {

	function stashLogin(){
		this.init();
		
	}

	stashLogin.prototype = {
		init: function(){
			
			var self=this;
			self.jsEvents();
			
		},
		jsEvents: function(){
			
			$("line").css({
				'height':'100px'
			})
		}
	}

var stashLoginObj = new stashLogin();

})(grp.jQuery);



(function($){


})(grp.jQuery);