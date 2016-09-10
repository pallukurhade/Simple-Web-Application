jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});
     
	 /*
        Clear Fields 
    */ 
	var btnCancel = document.getElementById('clear');
    btnCancel.addEventListener('click', function () {
        document.getElementById('name').value = "";
		document.getElementById('address1').value = "";
		document.getElementById('address2').value = "";
		document.getElementById('city').value = "";
		document.getElementById('state').value = "";
		document.getElementById('zipcode').value = "";
    }, false);
	 
	 /*
        Form validation
    */
	 
    $('.register form').submit(function(){
        $(this).find("label[for='name']").html('Name *');
        $(this).find("label[for='address1']").html('Address 1 *');
        $(this).find("label[for='city']").html('City *');
        $(this).find("label[for='state']").html('State *');
        $(this).find("label[for='zipcode']").html('Zip Code *');
        ////
        var name = $(this).find('input#name').val();
        var address1 = $(this).find('input#address1').val();
		var address2 = $(this).find('input#address2').val();
        var city = $(this).find('input#city').val();
        var state = $(this).find('input#state').val();
        var zipcode = $(this).find('input#zipcode').val();
		var alpha= /^[a-zA-Z\s]+$/;

        if(name == '') {
            $(this).find("label[for='name']").append("<span style='display:none' class='red'> - Please enter your name.</span>");
            $(this).find("label[for='name'] span").fadeIn('medium');
            return false;
        }
		if(name.length > 100){
			$(this).find("label[for='name']").append("<span style='display:none' class='red'> - Please enter your name not be more than 100 characters.</span>");
            $(this).find("label[for='name'] span").fadeIn('medium');
   
			
		}if(!(name.match(alpha))){
			$(this).find("label[for='name']").append("<span style='display:none' class='red'> - Please enter alphabets values only</span>");
            $(this).find("label[for='name'] span").fadeIn('medium');
   			
		}
        if(address1 == '') {
            $(this).find("label[for='address1']").append("<span style='display:none' class='red'> - Please enter your address name.</span>");
            $(this).find("label[for='address1'] span").fadeIn('medium');
            return false;
        }
		if(address1.length > 100) {
            $(this).find("label[for='address1']").append("<span style='display:none' class='red'> - Please enter your address not be more than 100 characters</span>");
            $(this).find("label[for='address1'] span").fadeIn('medium');
            return false;
        }
		if(address2.length > 100) {
			$(this).find("label[for='address2']").append("<span style='display:none' class='red'> - Please enter your address not be more than 100 characters</span>");
            $(this).find("label[for='address2'] span").fadeIn('medium');
            return false;
         }
        if(city == '') {
            $(this).find("label[for='city']").append("<span style='display:none' class='red'> - Please enter a valid city.</span>");
            $(this).find("label[for='city'] span").fadeIn('medium');
            return false;
        }
		if(city.length > 50) {
		    $(this).find("label[for='city']").append("<span style='display:none' class='red'> - Please enter a city not be more than 50 characters</span>");
            $(this).find("label[for='city'] span").fadeIn('medium');
            return false;
        } 
        if((zipcode == '') || (isNaN(zipcode)) || zipcode.length != 5) {
            $(this).find("label[for='zipcode']").append("<span style='display:none' class='red'> - Please enter a valid zipcode.</span>");
            $(this).find("label[for='zipcode'] span").fadeIn('medium');
            return false;
        }
    });
   

});


