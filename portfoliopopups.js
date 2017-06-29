$(document).ready(function() {

	var uxui_thumb1_img = document.getElementById("img01");
	var uxui_thumb2_img = document.getElementById("img02");
	var uxui_thumb3_img = document.getElementById("img03");
	var websites_thumb1_img = document.getElementById("img04");
	var websites_thumb2_img = document.getElementById("img05");
	var websites_thumb3_img = document.getElementById("img06");
	var websites_thumb4_img = document.getElementById("img07");
	var branding_thumb1_img = document.getElementById("img08");
	var branding_thumb2_img = document.getElementById("img09");
	var branding_thumb3_img = document.getElementById("img10");
	var printwork_thumb1_img = document.getElementById("img11");
	/* printwork_thumb2 matches printwork_thumb1 */
	var printwork_thumb3_img = document.getElementById("img13");
	var printwork_thumb4_img = document.getElementById("img14");
	var printwork_thumb5_img = document.getElementById("img15");
	var snapchat_thumb1_img = document.getElementById("img16");
	var snapchat_thumb2_img = document.getElementById("img17");
	var snapchat_thumb3_img = document.getElementById("img18");
	/* snapchat_thumb4 matches snapchat_thumb1 
	   snapchat_thumb5 matches snapchat_thumb2 */
	
	uxui_thumb1.onclick = function() {
	    uxui_thumb1_modal.style.display = "block";
	    uxui_thumb1_img.src='portfolio_images/large/atmosclear_nighttime.png';
	}
	uxui_thumb2.onclick = function() {
	    uxui_thumb2_modal.style.display = "block";
	    uxui_thumb2_img.src='portfolio_images/large/atmosclear_daytime.png';
	}
	uxui_thumb3.onclick = function() {
	    uxui_thumb3_modal.style.display = "block";
	    uxui_thumb3_img.src='portfolio_images/large/atmosclear_user_testing.png';
	}
	websites_thumb1.onclick = function() {
	    websites_thumb1_modal.style.display = "block";
	    websites_thumb1_img.src='portfolio_images/large/websites_ccmd.png';
	}
	websites_thumb2.onclick = function() {
	    websites_thumb2_modal.style.display = "block";
	    websites_thumb2_img.src='portfolio_images/large/websites_maggiephillips.png';
	}
	websites_thumb3.onclick = function() {
	    websites_thumb3_modal.style.display = "block";
	    websites_thumb3_img.src='portfolio_images/large/websites_montessori.png';
	}
	websites_thumb4.onclick = function() {
	    websites_thumb4_modal.style.display = "block";
	    websites_thumb4_img.src='portfolio_images/large/websites_partylink.png';
	}
	branding_thumb1.onclick = function() {
	    branding_thumb1_modal.style.display = "block";
	    branding_thumb1_img.src='portfolio_images/large/branding_montessori.png';
	}
	branding_thumb2.onclick = function() {
	    branding_thumb2_modal.style.display = "block";
	    branding_thumb2_img.src='portfolio_images/large/branding_maggiephillips.png';
	}
	branding_thumb3.onclick = function() {
	    branding_thumb3_modal.style.display = "block";
	    branding_thumb3_img.src='portfolio_images/large/branding_ccmd.png';
	}
	printwork_thumb1.onclick = function() {
	    printwork_thumb1_modal.style.display = "block";
	    printwork_thumb1_img.src='portfolio_images/large/printwork_bgw1.png';
	}
	printwork_thumb2.onclick = function() {
	    printwork_thumb1_modal.style.display = "block";
	    printwork_thumb1_img.src='portfolio_images/large/printwork_bgw1.png';
	}
	printwork_thumb3.onclick = function() {
	    printwork_thumb3_modal.style.display = "block";
	    printwork_thumb3_img.src='portfolio_images/large/printwork_homecoming.png';
	}
	printwork_thumb4.onclick = function() {
	    printwork_thumb4_modal.style.display = "block";
	    printwork_thumb4_img.src='portfolio_images/large/printwork_ww.png';
	}
	printwork_thumb5.onclick = function() {
	    printwork_thumb5_modal.style.display = "block";
	    printwork_thumb5_img.src='portfolio_images/large/printwork_charterweek.png';
	}
	snapchat_thumb1.onclick = function() {
	    snapchat_thumb1_modal.style.display = "block";
	    snapchat_thumb1_img.src='portfolio_images/large/snapchat_bgw.png';
	}
	snapchat_thumb2.onclick = function() {
	    snapchat_thumb2_modal.style.display = "block";
	    snapchat_thumb2_img.src='portfolio_images/large/snapchat_charterweek.png';
	}
	snapchat_thumb3.onclick = function() {
	    snapchat_thumb3_modal.style.display = "block";
	    snapchat_thumb3_img.src='portfolio_images/large/snapchat_homecoming.png';
	}
	snapchat_thumb4.onclick = function() {
	    snapchat_thumb1_modal.style.display = "block";
	    snapchat_thumb1_img.src='portfolio_images/large/snapchat_bgw.png';
	}
	snapchat_thumb5.onclick = function() {
	    snapchat_thumb2_modal.style.display = "block";
	    snapchat_thumb2_img.src='portfolio_images/large/snapchat_charterweek.png';
	}

	close_1.onclick = function() { 
	    uxui_thumb1_modal.style.display = "none";
	}
	close_2.onclick = function() {
	    uxui_thumb2_modal.style.display = "none";
	}
	close_3.onclick = function() {
	    uxui_thumb3_modal.style.display = "none";
	}
	close_4.onclick = function() {
	    websites_thumb1_modal.style.display = "none";
	}
	close_5.onclick = function() {
	    websites_thumb2_modal.style.display = "none";
	}
	close_6.onclick = function() {
	    websites_thumb3_modal.style.display = "none";
	}
	close_7.onclick = function() {
	    websites_thumb4_modal.style.display = "none";
	}
	close_8.onclick = function() {
	    branding_thumb1_modal.style.display = "none";
	}
	close_9.onclick = function() {
	    branding_thumb2_modal.style.display = "none";
	}
	close_10.onclick = function() {
	    branding_thumb3_modal.style.display = "none";
	}
	close_11.onclick = function() {
	    printwork_thumb1_modal.style.display = "none";
	}
	/* printwork_thumb2 matches printwork_thumb1 */
	close_13.onclick = function() {
	    printwork_thumb3_modal.style.display = "none";
	}
	close_14.onclick = function() {
	    printwork_thumb4_modal.style.display = "none";
	}
	close_15.onclick = function() {
	    printwork_thumb5_modal.style.display = "none";
	}
	close_16.onclick = function() {
	    snapchat_thumb1_modal.style.display = "none";
	}
	close_17.onclick = function() {
	    snapchat_thumb2_modal.style.display = "none";
	}
	close_18.onclick = function() {
	    snapchat_thumb3_modal.style.display = "none";
	}
	/* snapchat_thumb4 matches snapchat_thumb1
	   snapchat_thumb5 matches snapchat_thumb2 */
});
