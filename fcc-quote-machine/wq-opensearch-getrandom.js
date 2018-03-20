    WikiquoteApi.openSearch($input.val(),
      function(results) {
        $input.val(results[0]);
        // Get quote
        WikiquoteApi.getRandomQuote($input.val(), 
          function(newQuote) { quoteReady(newQuote, $quoteDiv, index); }, 
          function(msg){
            alert(msg);
          }
        );
      },
      function(msg) {
        alert(msg);
      }
    );