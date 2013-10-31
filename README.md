slidingpophover
===============

<html>
<head>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.slidingpophover.js"></script>
<script>
$(document).ready(function(){
   $(".display-item div:first img").load(function(){
		$(".display-item").slidingPopHover({duration:200});
   });
});
</script>
</head>

<body>

 <div class="display-item">
   <div>
	<img src="/Images/Capture52.PNG"></img>
   </div>
   <div style=" background-color:gray;">
	Bkjhkjhk
   </div>
 </div>

</body>

</html>
