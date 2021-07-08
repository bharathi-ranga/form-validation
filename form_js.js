var firstname1 = document.getElementById("First-name");
var lastname = document.getElementById("Last-name");
var address = document.getElementById("Address");
var gender = document.querySelectorAll(".Gender");
var pincode = document.querySelector("#Pincode");
var food = document.querySelectorAll(".food-box");
var state = document.getElementById("State");
var country = document.getElementById("Country");
var table = document.createElement("table");
var submitBtn = document.querySelector(".submit-btn");
var foodList = [];
var genderList = [];

//Get Error div's
var fnameErr = document.querySelector(".fname-err");
var lnameErr = document.querySelector(".lname-err");
var addressErr = document.querySelector(".address-err");
var genderErr = document.querySelector(".gender-err");
var pincodeErr = document.querySelector(".pin-err");
var foodErr = document.querySelector(".food-err");
var stateErr = document.querySelector(".state-err");
var countryErr = document.querySelector(".country-err");

let fnameFlag = true;
let lnameFlag = true;
let addFlag = true;
let pinFlag = true;
let genderFlag = true;
let foodFlag = true;
let stateFlag = true;
let countryFlag = true;

function display() {
  console.log("in display");
  var thead = document.createElement("thead");

  var th = document.createElement("tr");
  var th1 = document.createElement("td");
  var th2 = document.createElement("td");
  var th3 = document.createElement("td");
  var th4 = document.createElement("td");
  var th5 = document.createElement("td");
  var th6 = document.createElement("td");
  var th7 = document.createElement("td");
  var th8 = document.createElement("td");
  th1.innerHTML = "First Name";
  th2.innerHTML = "Last Name";
  th3.innerHTML = "Address";
  th5.innerHTML = "Gender";
  th4.innerHTML = "Pincode";
  th6.innerHTML = "Food";
  th7.innerHTML = "State";
  th8.innerHTML = "Country";
  th.append(th1, th2, th3, th4, th5, th6, th7, th8);
  thead.append(th);
  table.append(thead);
  createRow(
    firstname1.value,
    lastname.value,
    address.value,
    pincode.value,
    genderList[0],
    foodList,
    state.value,
    country.value
  );
}

function createRow(v1, v2, v3, v4, v5, v6, v7, v8) {
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerHTML = v1;
  var td2 = document.createElement("td");
  td2.innerHTML = v2;
  var td3 = document.createElement("td");
  td3.innerHTML = v3;
  var td4 = document.createElement("td");
  td4.innerHTML = v4;
  var td5 = document.createElement("td");
  td5.innerHTML = v5;
  var td6 = document.createElement("td");
  var ul = document.createElement("ul");
  for (i = 0; i < v6.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = v6[i];
    ul.append(li);
  }
  td6.append(ul);

  var td7 = document.createElement("td");
  td7.innerHTML = v7;
  var td8 = document.createElement("td");
  td8.innerHTML = v8;
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
  tbody.append(tr);
  table.append(tbody);

  displayTable(table);
}

function displayTable(table) {
  document.body.innerHTML = "";
  document.body.append(table);
}

submitBtn.addEventListener("click", function clickB() {
  //e.preventDefault();

  if (
    fnameFlag ||
    lnameFlag ||
    addFlag ||
    pinFlag ||
    foodFlag ||
    genderFlag ||
    stateFlag ||
    countryFlag === true
  ) {
    checkErrors();
  }
  //  else {
  //   console.log("from submit finction");
  //   display();
  // }

  function checkErrors() {
    if (firstname1.value == "") {
      fnameFlag = true;
      fnameErr.style.display = "unset";
    } else {
      fnameFlag = false;
      fnameErr.style.display = "none";
    }

    if (lastname.value == "") {
      lnameFlag = true;
      lnameErr.style.display = "unset";
    } else {
      lnameFlag = false;
      lnameErr.style.display = "none";
    }

    if (address.value == "") {
      addFlag = true;
      addressErr.style.display = "unset";
    } else {
      addFlag = false;
      addressErr.style.display = "none";
    }

    if (pincode.value == "") {
      pinFlag = true;
      pincodeErr.style.display = "unset";
    } else {
      pinFlag = false;
      pincodeErr.style.display = "none";
    }

    for (i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        genderList.push(gender[i].value);
      }
    }
    if (genderList.length === 0) {
      //alert("please select gender");
      genderFlag = true;
      genderErr.style.display = "unset";
    } else {
      genderFlag = false;
      genderErr.style.display = "none";
    }

    for (i = 0; i < food.length; i++) {
      if (food[i].checked) {
        foodList.push(food[i].value);
      }
    }
    if (foodList.length < 2) {
      foodFlag = true;
      foodErr.style.display = "unset";
    } else {
      foodFlag = false;
      foodErr.style.display = "none";
    }
    if (state.value == "") {
      stateFlag = true;
      stateErr.style.display = "unset";
    } else {
      stateFlag = false;
      stateErr.style.display = "none";
    }

    if (country.value == "") {
      countryFlag = true;
      countryErr.style.display = "unset";
    } else {
      countryFlag = false;
      countryErr.style.display = "none";
    }

    console.log(
      fnameFlag,
      lnameFlag,
      addFlag,
      pinFlag,
      foodFlag,
      genderFlag,
      stateFlag,
      countryFlag
    );

    if (
      fnameFlag == false &&
      lnameFlag == false &&
      addFlag == false &&
      pinFlag == false &&
      foodFlag == false &&
      genderFlag == false &&
      stateFlag == false &&
      countryFlag == false
    ) {
      display();
    }
  }
});
