// Wayy too many variable grabs. find easier way!!

const dropDown = document.getElementById("table");
const submitform = document.getElementById("submitformbtn");
const newform = document.getElementById("openform");
const formVisibility = document.getElementById("newListForm");
const cancelForm = document.getElementById("closeformbtn");
const num = new Set();
const listName = document.getElementById("listName");
const listheader = document.getElementById("listheader");
const setting = document.getElementById("setting");
// const del = document.getElementById("delete");
// const deletecolumn = document.getElementById("deleteColumn");
const del = document.getElementsByClassName("del");
const date_added = document.getElementById("date");

let lastValue;
num.add(0);
const currentDate = new Date();

// const newName = prompt('Enter Your name: ')
// listName.innerHTML = `${newName}'s List`
// listheader.innerHTML = `${newName}'s List`

// btn.addEventListener("click", );

// To display the dropdown for newlist-setting-about
function btntoggle() {
  dropDown.style.display == "none"
    ? (dropDown.style.display = "table")
    : (dropDown.style.display = "none");
}

//To bring up the popup for the newform.
newform.addEventListener("click", () => {
  formVisibility.style.display = "block";
  newform.disabled = true;
});

//To cancel the newform
cancelForm.addEventListener("click", (e) => {
  e.preventDefault();
  formVisibility.style.display = "none";
  newform.disabled = false;
});

//to submit the newform
submitform.addEventListener("click", (e) => {
  e.preventDefault();
  title = document.getElementById("title").value;
  console.log(title);
  if (title == "") {
    alert("Nothing Added To List.");
  } else {
    num.forEach((value) => {
      lastValue = value;
    });
    num.add(lastValue + 1);
    let tableRow = document.getElementById("tbody");
    let row = tableRow.insertRow();
    let cell1 = row.insertCell(0);
    cell1.innerHTML = `${lastValue + 1}`;
    let cell2 = row.insertCell(1);
    cell2.id = "listnm";
    cell2.innerHTML = `${title}`;
    let cell3 = row.insertCell(2);
    cell3.innerHTML =
      `${currentDate.getDate()}` +
      "/" +
      `${currentDate.getMonth() + 1}` +
      "/" +
      `${currentDate.getFullYear()}`;
    let cell4 = row.insertCell(3);
    cell4.id = "deleteClumn";
    cell4.innerHTML = "Del";
  }
});

// To display the delete button
setting.addEventListener("click", () => {
  if (del.style.display == "none") {
    date_added.style.width = "auto";
    del.style.display = "block";
    // deletecolumn.style.display = "block";
  } else {
    del.style.display = "none";
    // deletecolumn.style.display = "none";
    date_added.style.width = "30%";
  }
});


