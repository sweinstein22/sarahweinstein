$(document).ready(function() {

	var education = document.getElementById('educ1');
	var design = document.getElementById('design1');
	var code = document.getElementById('code1');
	var passions = document.getElementById('passions1');
	var collab = document.getElementById('collab1');
	var off_clock = document.getElementById('off_the_clock1')

	var education_text = document.getElementById('education_text');
	var design_text = document.getElementById('design_text');
	var code_text = document.getElementById('code_text');
	var passions_text = document.getElementById('passions_text');
	var collab_text = document.getElementById('collab_text');
	var off_the_clock_text = document.getElementById('off_the_clock_text');

	var displaySetting = education.style.display;

	if (displaySetting == 'block') {
		education.onclick = function() {
			education_text.style.display = 'block';
			design_text.style.display = 'none';
			code_text.style.display = 'none';
			passions_text.style.display = 'none';
			collab_text.style.display = 'none';
			off_the_clock_text.style.display = 'none';
		}
		design.onclick = function() {
			education_text.style.display = 'none';
			design_text.style.display = 'display';
			code_text.style.display = 'none';
			passions_text.style.display = 'none';
			collab_text.style.display = 'none';
			off_the_clock_text.style.display = 'none';
		}
		code.onclick = function() {
			education_text.style.display = 'none';
			design_text.style.display = 'none';
			code_text.style.display = 'display';
			passions_text.style.display = 'none';
			collab_text.style.display = 'none';
			off_the_clock_text.style.display = 'none';
		}
		passions.onclick = function() {
			education_text.style.display = 'none';
			design_text.style.display = 'none';
			code_text.style.display = 'none';
			passions_text.style.display = 'display';
			collab_text.style.display = 'none';
			off_the_clock_text.style.display = 'none';
		}
		collab.onclick = function() {
			education_text.style.display = 'none';
			design_text.style.display = 'none';
			code_text.style.display = 'none';
			passions_text.style.display = 'none';
			collab_text.style.display = 'display';
			off_the_clock_text.style.display = 'none';
		}
		off_clock.onclick = function() {
			education_text.style.display = 'none';
			design_text.style.display = 'none';
			code_text.style.display = 'none';
			passions_text.style.display = 'none';
			collab_text.style.display = 'none';
			off_the_clock_text.style.display = 'display';
		}
	}
}
