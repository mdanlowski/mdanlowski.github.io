$(document).ready(function(){
	$("#run").click(fetchQt);

});

var fetchQt = function(){

		var input = $("#theme");
		var feed = input.val();
		console.log(feed);

		WikiquoteApi.openSearch(
			feed,
			function(results) {
				input.val(results[0]);
	        // Get quote
	        WikiquoteApi.getRandomQuote(
	        	input.val(), 
	        	function(newQuote) { quoteLoaded(newQuote, $("#quote_placeholder")); }, 
	        	function(msg){
	        		alert(msg);
	        	}
	        );

	    	},

	    function(msg) {
	    	alert(msg);
	
	     }
   );
}

var result = {};
var qtFinal = [];

function quoteLoaded(newQuote, quoteDiv) {
    if( newQuote.quote.length > 0 ) {
      result['quote'] = newQuote.quote;
      quoteDiv.html($('<p style="width:100%; text-align:center;"></br>Your quote is ready. <hr style="border: 1px solid peru"/></p>'));
      // quoteDiv.find("p:hidden").fadeIn(400);
      $('#input').val(newQuote.titles);

      	// REPEAT DETECTED - 
      	//					FIX - <<<<<<<<<<call function again????>>>>>>>>>>
      	if (qtFinal.indexOf('<p style="display:none;">' + result.quote + '<hr style="border: 1px solid peru"/></p>') >= 0){
      		console.log('random quote has been repeated');
      		fetchQt();
      		return;
      		// $('#quote_placeholder').append(qtFinal);
      	}
      	// NO REPEAT - ALL GOOD
      	if (result.quote !== "\n\n" && result.quote !== "" && qtFinal.indexOf('<p style="display:none;">' + result.quote + '<hr style="border: 1px solid peru"/></p>') === -1) {
	      	qtFinal.push('<p style="display:none;">' + result.quote + '<hr style="border: 1px solid peru"/></p>');
			console.log(result, qtFinal);
      		$('#quote_placeholder').append(qtFinal);
      		quoteDiv.find("p:hidden").fadeIn(800);
		}
		// console.log(result, qtFinal);
  // 		$('#quote_placeholder').append(qtFinal);
  // 		quoteDiv.find("p:hidden").fadeIn(800);
      
    }

    window.scrollTo(0, window.outerHeight);

    setHrefTweetQuoteButton();

 }


 var setHrefTweetQuoteButton = function(){
 	// quote is a previously generated paragraph
 	let lastParIndex = 2*qtFinal.length;
 	let text = $("#quote_placeholder").find("p")[lastParIndex].innerText;
 	let author = $("#theme").val();
 		text += (" - " + author);
 		console.log(text);

 	let base = "https://twitter.com/intent/tweet?text=";

 	let buttonHref = base+text;
 		console.log(buttonHref);

 	$(document).find("a")[0].attributes.href.value = buttonHref;

}


 /***************************
	!!! Wow TODO so much, doge busy:

	! - fix weird holes in quotes
	! - fix repeated quotes behaviour so user does not see that anything went unexpected
	! - fix fade-in animation so only the last <p> fades in
	! - fix twitter button

	but quite nice nontheless
	
 */