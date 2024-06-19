document
  .getElementById("form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let foodChoices = [];
    document
      .querySelectorAll('input[name="food"]:checked')
      .forEach(function (checkbox) {
        foodChoices.push(checkbox.value);
      });

    if (foodChoices.length < 2) {
      alert("Please select at least two food choices.");
      return;
    }

    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    let table = document
      .getElementById("infoTable")
      .getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = foodChoices.join(", ");
    newRow.insertCell(7).innerText = state;
    newRow.insertCell(8).innerText = country;

    document.getElementById("form").reset();
  });
