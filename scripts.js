$( document ).ready(function(){
    $( "#datepicker" ).datepicker();
  } )

$(function(){
  $("#headerDiv").load("header.html"); 
  $("#footer").load("footer.html"); 
});

 
//function to test onblur
function checkonblur (){
	
	alert("lost focus");
	
}

function validateUsername(){
	var username = document.getElementById("username");
	username = username.value;
	
	var elementLength = username.length;
	
	//alert(elementLength);
	
	var compareToLength = 6;
	
	
	if (elementLength){
		if (elementLength >= compareToLength){
			//alert("Insufficient length.  Must be at least " + compareToLength + " characters.");
			return true;
		}else{
			return false;
		}
	}
}

function validatePassword() {
	var password = document.getElementById("pwd");
	password = password.value;
	
	//alert("password is " + password);
	
	
	var passwordOK = false;
	var upperOK = false;
	var lowerOK = false;
	var numberOK = false;
	var specialOK = false;
	var minMaxLengthOK = false;
	
    var minMaxLength = /^[\s\S]{8,32}$/,
        upper = /[A-Z]/,
        lower = /[a-z]/,
        number = /[0-9]/,
        special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
		
	
	if (upper.test(password))
		upperOK = true;
	if (minMaxLength.test(password))
		minMaxLengthOK = true;
	if (lower.test(password))
		lowerOK = true;
	if (number.test(password))
		numberOK = true;
	if (special.test(password))
		specialOK = true;
	

	if (upperOK && lowerOK && numberOK && specialOK && minMaxLengthOK){
		passwordOK = true;
		return true;
	} else {
		passwordOK = false;
	}
		
	if (passwordOK == false){	
	return false;
	//	alert("Complexity requirments: 1 Uppercase, 1 Lowercase, 1 Special Character, minimum length 8 not met");
	} else {
		return true;
	}
 		
}

function matchPassword(){
	var matchPassword = document.getElementById("verifypwd");
	
	var originalPassword = document.getElementById("pwd");
	var matchOK = false;
	
	//alert("matchpass funct");
	
	if (matchPassword.value == originalPassword.value){
		matchOK = true;
		//return true;
	}
	if (matchOK == false){
		return false;
	//	alert("Passwords do not match.");
	} else {
		return true;
	}

	
	//alert("matchPassword is " + matchPassword + "and" + "originalPassword is" + originalPassword.value);
	
}

function validateEmail(){
	var emailToCheck = document.getElementById("email");
	emailToCheck = emailToCheck.value;
	
   	var pattern = /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/;
	
	
	if (pattern.test(emailToCheck)){
		return true;
	} else {
		return false;
	}
}

function formatZipCode(zipCode){
	if (zipCode){
		switch (zipCode.value.length){
			case 1:
				zipCode.value = zipCode.value.replace(/[^0-9]/g, "");
				break;
			case 2:
				zipCode.value = zipCode.value.replace(/[^0-9]/g, "");
				break;
			case 3:
				zipCode.value = zipCode.value.replace(/[^0-9]/g, "");
				break;
			case 4:
				zipCode.value = zipCode.value.replace(/[^0-9]/g, "");
				break;
			case 5:
				zipCode.value = zipCode.value.replace(/[^0-9]/g, "");
				zipCode.value = zipCode.value + '-';
				break;
			case 6:
				zipCode.value = zipCode.value.replace(/[^0-9\-]/g, "");
				break;
			case 7:
				zipCode.value = zipCode.value.replace(/[^0-9\-]/g, "");
				break;
			case 8:
				zipCode.value = zipCode.value.replace(/[^0-9\-]/g, "");
				break;
			case 9:
				zipCode.value = zipCode.value.replace(/[^0-9\-]/g, "");
				break;
			case 10:
				zipCode.value = zipCode.value.replace(/[^0-9\-]/g, "");
				break;
			case 11:
				zipCode.value = zipCode.value.replace(/[^0-9\-]/g, "");
				break;
			default:
				break;
		}
	}
}
    
function formatPhone(phoneElement) {

	if (phoneElement) {
		
		switch(phoneElement.value.length) {
			case 1:
				if (phoneElement.value != '(') {
					phoneElement.value = '(' + phoneElement.value;
					phoneElement.value = phoneElement.value.replace(/[^0-9\(]/g, "");
				}
				break;
			case 2:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(]/g, "");
				break;
			case 3:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(]/g, "");
				break;
			case 4:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(]/g, "");
				phoneElement.value = phoneElement.value + ')';
				break;
			case 5:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(\)]/g, "");
				break;
			case 6:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(\)]/g, "");
				break;
			case 7:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(\)]/g, "");
				break;
			case 8:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(\)]/g, "");
				phoneElement.value = phoneElement.value + '-';
				break;
			case 9:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(\)\-]/g, "");
				break;
			case 10:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(\)\-]/g, "");
				break;
			case 11:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(\)\-]/g, "");
				break;
			case 12:
				phoneElement.value = phoneElement.value.replace(/[^0-9\(\)\-]/g, "");
				break;
			default:
				break;
		}
		
	}
	
}



function validateFields(){
	if (validateUsername()){
	}
	else {
		alert("Username length insufficient.");
		return false;
	}
	
	if (validateEmail()){
	}
	else {
		alert("Email Invalid");
		return false;
	}
	
	if (validatePassword()){
	}
	else {
		alert("Complexity requirments: 1 Uppercase, 1 Lowercase, 1 Special Character, minimum length 8 not met")
		return false;
	}
	
	if (matchPassword()){
	} 
	else {
		alert("Passwords do not match.");
		return false;
	}

		document.getElementById("formwrapper").innerHTML = "Thank you !"
}


