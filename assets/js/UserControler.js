// getting all elements
const inputValue = document.getElementById("inputText");
const addBtn = document.querySelector(".inputField button");

//active add button
inputValue.addEventListener("keyup", function () {
  let listText = inputValue.value;

  if (listText.trim().length > 0) {
    addBtn.classList.add("aktive");
  } else {
    addBtn.classList.remove("aktive");
  }
});

//add new list
addBtn.addEventListener("click", function () {
    let userEnteredValue = inputValue.value;
    console.log(userEnteredValue)
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
})  















