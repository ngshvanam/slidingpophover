SLIDING POP HOVER
=================

SCRIPT
------
$(document).ready(function(){
   $(".display-item div:first img").load(function(){
		$(".display-item").slidingPopHover({duration:200});
   });
});

HTML
----
<div class="display-item">
  <div>
	<img src="/Images/Capture52.PNG"></img>
  </div>
  <div style=" background-color:gray;">
	Bkjhkjhk
  </div>
</div>

