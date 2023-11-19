let nameInp = document.querySelector("#name");
let surnameInp = document.querySelector("#surname");
let ageInp = document.querySelector("#age");
let btn = document.querySelector("#button");
let tbody = document.querySelector("#tbody");

let myFunction = () => {
    let nameValue = nameInp.value.trim();
    let surnameValue = surnameInp.value.trim();
    let ageValue = ageInp.value.trim();

    if (nameValue == "" || surnameValue == "" || ageValue == "") {
        alert("Please fill all the boxes");
        return;
    }

    let trElement = document.createElement("tr");
    let td1Element = document.createElement("td");
    let td2Element = document.createElement("td");
    let td3Element = document.createElement("td");

    tbody.append(trElement);
    trElement.append(td1Element, td2Element, td3Element);

    td1Element.innerHTML = nameInp.value;
    td2Element.innerHTML = surnameInp.value;
    td3Element.innerHTML = ageInp.value;

    nameInp.value = "";
    surnameInp.value = "";
    ageInp.value = "";
}

btn.addEventListener("click" , myFunction);