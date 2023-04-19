// First Name Validation
var firstName = document.getElementById("firstName");
var firstNameValidation = function() {
  firstNameValue = firstName.value;
  validFirstName = /^[A-Z][A-Za-z]+$/;
  firstNameErr = document.getElementById('first-name-err');
      if (firstNameValue == "") {
        document.addEventListener('focusout', (e) => {
          firstNameErr.innerHTML = "";
        })
      }
      else if (!validFirstName.test(firstNameValue)) {
        document.addEventListener('focusout', (e) => {
          firstNameErr.innerHTML = "*Must contain only alphabets with first letter capital";
        })
        return false;
      }
      else {
        document.addEventListener('focusout', (e) => {
          firstNameErr.innerHTML = "";
        })
        return true;
      }
}
firstName.oninput = function(){
  firstNameValidation();
}



// Last Name Validation
var lastName = document.getElementById("lastName");
var lastNameValidation = function () {
  lastNameValue = lastName.value;
  validLastName = /^[A-Z][A-Za-z/' ']+$/;
  lastNameErr = document.getElementById('last-name-err');
  if (lastNameValue == "") {
    document.addEventListener('focusout', (e) => {
      lastNameErr.innerHTML = "";
    })
  }
  else if (lastNameValue == " ") {
    document.addEventListener('focusout', (e) => {
      lastNameErr.innerHTML = "*Enter valid values";
    })
  }
  else if (!validLastName.test(lastNameValue)) {
    document.addEventListener('focusout', (e) => {
      lastNameErr.innerHTML = "*Must contain only alphabets with first letter capital";
    })
  } else {
    var spaceCount = 0;
    for (var i in lastNameValue) {
      if (lastNameValue[i] == ' ') {
        spaceCount += 1;
      }
    }
    if (spaceCount > 1) {
      document.addEventListener('focusout', (e) => {
        lastNameErr.innerHTML = "*Only one space is allowed";
      })
    }
    else {
      document.addEventListener('focusout', (e) => {
        lastNameErr.innerHTML = "";
      })
      return true;
    }
  }
}
lastName.oninput = function () {
  lastNameValidation();
}



// Email Address Validation
var emailAddress = document.getElementById("emailAddress");
var emailAddressValidation = function () {
  emailAddressValue = emailAddress.value;
  validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailAddressErr = document.getElementById('email-err');
  if (emailAddressValue == "") {
    document.addEventListener('focusout', (e) => {
      emailAddressErr.innerHTML = "";
    })
  } else if (!validEmailAddress.test(emailAddressValue)) {
    document.addEventListener('focusout', (e) => {
      emailAddressErr.innerHTML = "*Email Address must be in valid format";
    })
  } else {
    document.addEventListener('focusout', (e) => {
      emailAddressErr.innerHTML = "";
    })
    return true;
  }
}
emailAddress.oninput = function () {
  emailAddressValidation();
}




//User Name Validation
var userName = document.getElementById("userName");
emailAddress.addEventListener('focusout',(e)=>{
  document.getElementById('userName').value = emailAddress.value.split('@')[0];
})



// Mobile Number Validation
var mobileNumber = document.getElementById("mobileNumber");
function mobileNumberValidation(event) {
  mobileNumberValue = mobileNumber.value;
  validMobileNumber = /^[7-9][0-9]{0,9}$/;
  mobileNumberErr = document.getElementById('mobile-number-err');
  var mobileVal = event.which ? event.which : event.keyCode;
    if (mobileVal > 31 && (mobileVal < 48 || mobileVal > 57)){
      return false;
    }
    else{
      if (mobileNumberValue == "" || mobileNumberValue == null) {
        document.addEventListener('focusout', (e) => {
          mobileNumberErr.innerHTML = "";
        })
      }
      else if (!validMobileNumber.test(mobileNumberValue)) {
        document.addEventListener('focusout', (e) => {
          mobileNumberErr.innerHTML = "*Mobile number should start with 9/8/7";
        })
      }
      else if (mobileNumberValue.length != 10) {
        document.addEventListener('focusout', (e) => {
          mobileNumberErr.innerHTML = "*Mobile Number should be 10 digit";
        })
      }
      else {
        var count = 1, mCount = 1, m_cnt = 1;
        for (var i in mobileNumberValue) {
          if (mobileNumberValue[0] == mobileNumberValue[i]) {
            count += 1;
          }
          else if (mobileNumberValue[1] == mobileNumberValue[i]) {
            mCount += 1;
          }
          else if (mobileNumberValue[2] == mobileNumberValue[i]) {
            m_cnt += 1;
          }
        }
        if (count > 5 || mCount > 5 || m_cnt > 5) {
          document.addEventListener('focusout', (e) => {
            mobileNumberErr.innerHTML = "*Same serial number not acceptable";
          })
        }
        else {
          document.addEventListener('focusout', (e) => {
            mobileNumberErr.innerHTML = "";
          })
          return true;
        }
      }
    }
}



// Password Validation
var password = document.getElementById("password");;
var passwordValidation = function () {
  passwordValue = password.value;
  validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  passwordErr = document.getElementById('password-err');
  if (passwordValue == "") {
    document.addEventListener('focusout', (e) => {
      passwordErr.innerHTML = "";
    })
  }
  else if (passwordValue.length < 8) {
    document.addEventListener('focusout', (e) => {
      passwordErr.innerHTML = "*Password should length minimum 8 characters";
    })
  }
  else if (!validPassword.test(passwordValue)) {
    document.addEventListener('focusout', (e) => {
      passwordErr.innerHTML = "*It must aleast one letter(Ex.-'A' or 'a'), digit & special character";
    })
  }
  else {
    document.addEventListener('focusout', (e) => {
      passwordErr.innerHTML = "";
    })
    return true;
  }
}
password.oninput = function () {
  passwordValidation();
}



// Confirm Password Validation
var confirmPassword = document.getElementById("confirmPassword");
var confirmPasswordValidation = function () {
  confirmPasswordValue = confirmPassword.value;
  confirmPasswordErr = document.getElementById('confirm-password-err');
  confirmPasswordMatch = document.getElementById('confirm-password-match');
  if (confirmPasswordValue == "") {
    document.addEventListener('focusout', (e) => {
      confirmPasswordErr.innerHTML = "";
      confirmPasswordMatch.innerHTML = "";
    })
  }
  else if (confirmPasswordValue.length < 8 && confirmPasswordValue == password.value) {
    document.addEventListener('focusout', (e) => {
      confirmPasswordErr.innerHTML = "*Password length is less than Eight";
      confirmPasswordMatch.innerHTML = "";
    })
  }
  else if (confirmPasswordValue != password.value) {
    document.addEventListener('focusout', (e) => {
      confirmPasswordErr.innerHTML = "*Confirm Password does not match";
      confirmPasswordMatch.innerHTML = "";
    })
  }
  else {
    document.addEventListener('focusout', (e) => {
      confirmPasswordErr.innerHTML = "";
      confirmPasswordMatch.innerHTML = "*Great, Password Match";
    })
    return true;
  }
}
confirmPassword.oninput = function () {
  confirmPasswordValidation();
}



//Pin Code Validation
var pinCode = document.getElementById("pinCode");
  function pinCodeValidation(event) {
    pinCodeValue = pinCode.value;
    validPinCode = /^[1-9][0-9]{5}$/;
    pinCodeErr = document.getElementById('pin-code-err');
    var PinCodeVal = event.which ? event.which : event.keyCode;
    if (PinCodeVal > 31 && (PinCodeVal < 48 || PinCodeVal > 57)){
      return false;
    }
    else{
      if (pinCodeValue == "" || pinCodeValue == null) {
        document.addEventListener('focusout', (e) => {
          pinCodeErr.innerHTML = "";
        })
      }
      else if (!validPinCode.test(pinCodeValue)) {
        document.addEventListener('focusout', (e) => {
          pinCodeErr.innerHTML = "*Only six digit number value is allowed (starting from 1 to 9)";
        })
      }
    
      else {
        document.addEventListener('focusout', (e) => {
          pinCodeErr.innerHTML = "";
        })
        return true;
      }
    }
    }


//Address Validation
var address = document.getElementById("address")
var addressValidation = function () {
  addressValue = address.value;
  validAddress = /^(?!.*  )[a-zA-Z0-9\d(' -/]{1,}$/
  addressErr = document.getElementById('address-err');
  if (addressValue == "") {
    document.addEventListener('focusout', (e) => {
      addressErr.innerHTML = "";
    })
  }
  else if (addressValue == " ") {
    document.addEventListener('focusout', (e) => {
      addressErr.innerHTML = "*Enter a valid Address";
    })
  }
  else if (!validAddress.test(addressValue)) {
    document.addEventListener('focusout', (e) => {
      addressErr.innerHTML = "*Please Enter a valid Address(with no consequtive spaces)";
    })
  }
  else {
    
      document.addEventListener('focusout', (e) => {
        addressErr.innerHTML = "";
      })
      return true;
  }
}
address.oninput = function () {
  addressValidation();
}





//Dynamically entering Cities with respect to the State
function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  SelectStateErr = document.getElementById('select-state-err');
  s2.disabled = false;
  s2.innerHTML = "";
  if (s1.value == "Delhi") {
    var optionArray = ['|Select your City', 'India Gate|India Gate', 'Raj Ghat|Raj Ghat', 'Noida|Noida', 'Akshardham|Akshardham'];
  }
  else if (s1.value == "Gujarat") {
    var optionArray = ['|Select your City', 'Ahmedabad|Ahmedabad', 'Rajkot|Rajkot', 'Dwarka,|Dwarka', 'Surat|Surat', 'Jamnagar|Jamnagar'];
  }
  else if (s1.value == "Punjab") {
    var optionArray = ['|Select your City', 'Amritsar|Amritsar', 'Ludhiana|Ludhiana', 'Chandigarh|Chandigarh', 'Punjab|Punjab'];
  }
  else if (s1.value == "Rajasthan") {
    var optionArray = ['|Select your City', 'Banswara|Banswara', 'Dungarpur|Dungarpur', 'Kushalgarh|Kushalgarh', 'Jaipur|Jaipur', 'Jodhpur|Jodhpur'];
  }
  else if (s1.value == "Uttar Pradesh") {
    var optionArray = ['|Select your City', 'Ayodhya|Ayodhya', 'Prayagraj|Prayagraj', 'Varanasi|Varanasi', 'Kanpur|Kanpur', 'Gorakhpur|Gorakhpur'];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
  if (s1.value == "") {
    SelectStateErr.innerHTML = "*Please Select State";
  }
  else {
    SelectStateErr.innerHTML = "";
  }
}
function population(slct1, slct2) {
  var slct1 = document.getElementById(slct1);
  var slct2 = document.getElementById(slct2);
  selectCityErr = document.getElementById('select-city-err');
  slct2.disabled = false;
  if (slct2.value == "") {
    selectCityErr.innerHTML = "*Enter The City";
  }
  else {
    selectCityErr.innerHTML = "";
  }
}
var city = document.getElementById('select2');
city.disabled = false;
var state = document.getElementById('select1');




// Gender Validation
var male = document.getElementById('male');
var female = document.getElementById('female');
var other = document.getElementById('other');


var Atheletics = document.getElementById('Athelitcs');
var Basketball = document.getElementById('Basketball');
var Tabletennies = document.getElementById('Tabletennies');
var Football = document.getElementById('Football');



// validation on submit
document.getElementById("contact_form").onsubmit = function (e) {
  var First = firstNameValidation();
  var Last = lastNameValidation();
  var e_Mail = emailAddressValidation();
  var Mobile = mobileNumberValidation(event);
  var Pass = passwordValidation();
  var c_Pass = confirmPasswordValidation();
  var Pin = pinCodeValidation(event);
  var Add = addressValidation();
  if (First == true &&
    Last == true &&
    e_Mail == true &&
    Mobile == true &&
    Pass == true &&
    c_Pass == true &&
    Pin == true &&
    Add == true) {
    document.write("<br> First Name is: " + firstName.value);              //Printing First Name
    document.write("<br><br> Last Name is: " + lastName.value);           //Printing Last Name

    //Printing Gender
    if (male.checked == true) {
      document.write("<br><br> Gender is : Male");
    }
    else if (female.checked == true) {
      document.write("<br><br> Gender is : Female");
    }
    else if (other.checked == true) {
      document.write("<br><br> Gender is : Other");
    }

    document.write("<br><br> Email is: " + emailAddress.value);            //Ptinting Email Address    
    document.write("<br><br> Password is: " + password.value);            //Printing Password
    document.write("<br><br> User Name is: " + userName.value);          //Printing User Name

    //Printing Hobbies
    var result = " ";
    if (Atheletics.checked == true) {
      result = result + "Atheletics" + "<br>";
    }
    if (Basketball.checked == true) {
      result = result + "Basketball" + "<br>";
    }
    if (Tabletennies.checked == true) {
      result = result + "Table Tennies" + "<br> ";
    }
    if (Football.checked == true) {
      result = result + "Football" + "<br>"
    }
    if (result == " ") {
      document.write("<br><br> Hobbies are: None <br>");
    }
    else {
      document.write("<br><br> Hobbies are: <br>" + result);
    }

    document.write("<br> Address is: " + address.value);                        //Printing Address
    document.write("<br><br> Selected State is: " + state.value);              //Printing State
    document.write("<br><br> Selcted City is: " + city.value);                //Printing City
    document.write("<br><br> Pin Code is: " + pinCode.value);                //Printing Pin Code
    document.write("<br><br> Contact No. is: " + mobileNumber.value);       //Printing Contact No.
    return false;
  }
  else {
    return false;
  }
}