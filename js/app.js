$(document).ready(function() {
var resultBtn = document.getElementById('finalResult');

  var preApprovalCheck = function(obj){
  	if(obj.credit > 700 && obj.income > 100000  && obj.loan <= 800000) {
  		 return [true, 'Congratulations ' + obj.first + ' ' + obj.last + '! You are pre-qualified to receive a home loan of $' + obj.loan + '!'];
  	} else {
  		return [false, "We're sorry, " + obj.first + "; but, based on the information you provided, we aren't able to qualify you for this loan."];
  	}
  };

  document.querySelector('.js-run').addEventListener('click', function(){
  	// Create a variable obj and set the properties with values
  	var applicantInfo = {
  		first: document.querySelector('.js-first-name').value,
  		last: document.querySelector('.js-last-name').value,
  		loan: document.querySelector('.js-loan-amount').value,
  		credit: document.querySelector('.js-credit').value,
  		income: document.querySelector('.js-annual-income').value
  	};
  	//Pass the object to the "preApprovalCheck" function
  	var result = preApprovalCheck(applicantInfo);
  	//Grab the output element to reference below
  	var output = document.querySelector('output');
    $('#final-result').append(output);

  	//If function returned the boolean "true" then add the class "approved" so it gets a nice
  	//look, otherwise, remove the class and give it a "not-approved"class
  	if(result[0] === true) {
  		output.classList.remove('not-approved');
  		output.classList.add('approved');
  	} else {
  		output.classList.remove('approved');
  		output.classList.add('not-approved');
  	}
  	  output.textContent = result[1];
  });


});