##SLIDING POP HOVER

##SCRIPT
```
<script type="text/javascript" src="jquery.slidingpophover.js"></script>

<script type="text/javascript">

$(document).ready(function(){
   $(".display-item div:first img").load(function(){
		$(".display-item").slidingPopHover({duration:200});
   });
});

</script>

```
##HTML
```
<div class="display-item">
  <div>
	<img src="/Images/Capture52.PNG"></img>
  </div>
  <div style=" background-color:gray;">
	<p>Place your hidden template here.</p>
  </div>
</div>
```
