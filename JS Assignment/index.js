var flag = 0;

var addUserBtn = document.querySelector("#add-user-btn");
var addUserForm = document.querySelector("#add-user-form");
var submitForm = document.querySelector("#submit-btn");
var table = document.getElementsByTagName('table')[0];

function validateEmail(mail) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailRegex.test(mail)) {
        return true;
    } else {
        false
    }
}
function validateName(name) {
    if(name == "")
        return false;
    else 
        return true;
}

addUserBtn.addEventListener("click", function() {
    addUserForm.style.display = 'block';
    addUserBtn.style.display = 'none';
});

submitForm.addEventListener("click", function() {
    document.querySelector(".error").style.display = "none";
    document.getElementById("name-check-message").textContent = "";
    document.getElementById("email-check-message").textContent = "";

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;

    if(validateEmail(email) && validateName(name)) {

        var n = table.rows.length; // no of rows in the table
        var newRow = table.insertRow(n);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);

        cel1.innerHTML = n - 1;
        cel2.innerHTML = name;
        cel3.innerHTML = email;

        // clearing the form
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        if (flag == 0) {
            flag = 1;
            document.getElementById("no-data-row").style.display = "none";
        }
        addUserBtn.style.display = "block";
        addUserForm.style.display = "none";
    } else {
        if(!validateEmail(email)) {
            document.getElementById("email-check-message").textContent= "Enter valid email address";
        } else {
            document.getElementById("email-check-message").textContent = "";
        }
        if(!validateName(name)) {
            document.getElementById("name-check-message").textContent = "Name cannot be blank";
        } else {
            document.getElementById("name-check-message").textContent = "";
        }
        document.querySelector(".error").style.display = "block";
    }
    
});

var rowLength = table.rows.length;

for(var i = 1; i < rowLength; i++) {
    document.getElementsByTagName("tr")[i].addEventListener("click", function() {
        var cells = this.cells;

        var celLength = cells.length;

        for (var j = 0; j < celLength; j++) {
            var cellVal = cells.item(j).innerHTML;
            console.log(cellVal);
        }
    });
}

