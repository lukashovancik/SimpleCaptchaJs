# SimpleCaptchaJs

##DEPENDENCIES:
[BOOTSTRAP ](http://getbootstrap.com/getting-started/)
[JQUERY ](http://jquery.com/download/)

## EXAMPLE

```
<script>
	Captcha('#generatedCaptcha','#captcha','.generateNewCaptcha','#form');
</script>

<form action="#" id="form">
	<div class="row form-group">
		<div class="col-md-12">
			<div class="form-group">
				<small>Captcha</small>
				<p id="generatedCaptcha" class="well"></p>
				<button type="button" class="btn btn-warning generateNewCaptcha">Generate</button>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div class="form-group">
				<input type="text" class="form-control" id="captcha" placeholder="Captcha"/>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div class="form-group">
				<button class="btn btn-success">SUBMIT</button>
			</div>
		</div>
	</div>
</form>
```
