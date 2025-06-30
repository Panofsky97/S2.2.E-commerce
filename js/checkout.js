
// Exercise 6
const validate = (event) => {
	event.preventDefault(); // Prevent form submission to allow validation
	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");	
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");


	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");
	const errorAddress = document.getElementById("errorAddress");
	const errorLastN = document.getElementById("errorLastN");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone");
	  
	
	// Validate fields entered by the user: name, phone, password, and email
	[fName, fEmail, fAddress, fLastN, fPassword, fPhone].forEach((input) => {
		input.classList.remove("is-invalid");
	});

	if(fName.value === "" || /^[a-zA-Z ]{3,30}$/.test(fName.value) == false){
		fName.classList.add("is-invalid"); 
		error++;
	}

	if(fEmail.value == "" ||fEmail.value.length < 3 || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(fEmail.value) === false){
		fEmail.classList.add("is-invalid");
		error++;
	}

	if (fAddress.value === "" || fAddress.value.length < 3) {
		 fAddress.classList.add("is-invalid");
		 error++;
	}

	if (fLastN.value === "" || /^[a-zA-Z ]{3,30}$/.test(fLastN.value) == false) {
		fLastN.classList.add("is-invalid");
		error++;
	}

	if (fPassword.value.trim() === "" ||fPassword.value.trim().length < 3 ||/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(fPassword.value.trim()) == false) {
		 fPassword.classList.add("is-invalid");
		 error++;
	}

	if (fPhone.value === "" || fPhone.value.length < 3 || /^\d{9}$/.test(fPhone.value) === false) {
		 fPhone.classList.add("is-invalid");
	     error++;
	}
	 
	if(error === 0){
		document.getElementById("formId").submit();
	}

};

document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	if (form) {
		form.addEventListener("submit", validate);
	}
});


