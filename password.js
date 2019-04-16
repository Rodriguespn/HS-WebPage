// Below function Executes on click of login button.

function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "HackerSchool" && password == "codingrules"){
		window.location = "social_media.html"; // Redirecting to other page.
		return true;
	}
	else{
		document.getElementById("error").innerHTML = "Wrong username or password"
        return false;
	}
}
