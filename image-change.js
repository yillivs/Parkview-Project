
//function to denote invalid crn
	function invalid(){
		var userCourse = document.getElementById("course").value;
		var crnReg = /\b\d{5}\b/;
		if (! crnReg.test(userCourse)){
			/*Regex tests for 5 digit numbers in a row */
			document.getElementById("course").style.borderColor = "red";
			document.getElementById("course").style.backgroundColor = "red";

			alert('CRN must be 5 digits long');

			return false;
		}

		else{
		return true;
		}

	}
	
	function imageSwitch(){



	}
