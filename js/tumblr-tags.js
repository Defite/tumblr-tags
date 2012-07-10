(function($){
    $(function(){
       var $tagField = $('#tumblr-tags'),
    	   $tagContainer = $('.tags-container');
       
       //клик по диву фокусируется на форме ввода
       $tagContainer.bind('click', function(){
       		$('input').focus();
       });
              
    	$tagField.keyup(function(e, keyCode){
    	    keyCode = keyCode || e.keyCode;
    	    if (keyCode == 13 && $tagField.val() != '') {
    	        $newTag = $('<span class="tag">' + $tagField.val() + '<a class="close" href="#" title="remove tag">x</a></span>');
    	        $tagField.val('');
    	        $newTag.insertBefore($tagField).find('a').bind('click', function() {
    	            $(this).parent().remove();
    	        });
    	        return false;
    	    };
    	});
    });
})(jQuery);