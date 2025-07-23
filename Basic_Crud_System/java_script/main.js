var formName = document.getElementById("Name");
var formPrice = document.getElementById("Price");
var formCategory = document.getElementById("Category");
var formDescription = document.getElementById("Description");
var formSearch = document.getElementById("Search");
var addBTN = document.getElementById("button_add");
var updateBTN = document.getElementById("button_update");
var searchBTN = document.getElementById("button_search");
var All_products = [];
var key = "DB";
var updating_index = -1;
function StartUp() {
  // localStorage.clear();
  console.log("App Started Successfully");
  All_products = Access_data_in_LocalStorge(key) ?? [];
  display();
  let labels = document.querySelectorAll("label");
  for (let i = 0; i < labels.length; i++) {
    labels[i].classList.add("text-primary");
    labels[i].classList.add("fs-5");
    labels[i].classList.add("fw-medium");
  }
}
function Add_Element() {
  let NewElement = Retrieve_DataInputs();
  All_products.push(NewElement);
  console.log("New Element Added", NewElement);
}
function Delete_Element(index) {
  let deleted_ele = All_products[index];
  All_products.splice(index, 1);
  Update_LocalStorge(key, All_products);
  display();
  console.log("Element Deleted", deleted_ele);
}
function Update_Element(index) {
  updateBTN.style.display = "block";
  addBTN.style.display = "none";
  let Inputs = document.getElementsByClassName("form-control");
  updating_index = index;
  let values = [];
  for (let i in All_products[index]) values.push(All_products[index][i]);
  for (let i = 0; i < values.length; i++) Inputs[i].value = values[i];
  console.log("Updating Element");
}
function search(Keyword) {
  Keyword = Keyword.trim().split(" ");
  let box = ``;
  for (let i = 0; i < All_products.length; i++) {
    if (check_keyword(All_products[i], Keyword)) {
      box += `
      <tr>
      <td>${All_products[i].name || "---"}</td>
      <td>${All_products[i].price == "" ? "---" : All_products[i].price + "$"}</td>
      <td>${All_products[i].category || "---"}</td>
      <td>${All_products[i].desc || "---"}</td>
      <td><button class="bg-danger btn " onclick="Delete_Element(${i})">Delete</button></td>
      <td><button class="bg-warning btn" onclick="Update_Element(${i})">Update</button></td> 
      </tr>`;
    }
    document.getElementById("table_body").innerHTML = box;
    console.log("ok");
  }
}
function check_keyword(product, Keyword) {
  let flag = true;
  Keyword.forEach((ele) => {
    ele = ele.toLowerCase();
    if (
      !(
        product.name.toLowerCase().includes(ele) ||
        product.category.toLowerCase().includes(ele) ||
        product.desc.toLowerCase().includes(ele)
      )
    )
      flag = false;
  });
  return flag;
}
function clear_inputs() {
  let arr = document.getElementsByClassName("form-control");
  for (let i = 0; i < arr.length; i++) arr[i].value = null;
  console.log("input cleared");
}
function display(content = All_products) {
  var box = "";
  for (var i = 0; i < content.length; i++) {
    box += `
            <tr>
            <td>${content[i].name || "---"}</td>
            <td>${content[i].price == "" ? "---" : content[i].price + "$"}</td>
            <td>${content[i].category || "---"}</td>
            <td>${content[i].desc || "---"}</td>
            <td><button class="bg-danger btn " onclick="Delete_Element(${i})">Delete</button></td>
            <td><button class="bg-warning btn" onclick="Update_Element(${i})">Update</button></td> 
            </tr>`;
  }
  document.getElementById("table_body").innerHTML = box;
  console.log("table displayed", All_products);
}
function Access_data_in_LocalStorge(key) {
  let Answer = null;
  if (localStorage.getItem(key) != null) {
    Answer = JSON.parse(localStorage.getItem(key));
    console.log("Data returned ok");
  } else console.log("No Data Found");
  return Answer;
}
function Update_LocalStorge(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  console.log("storge updated");
}
function Retrieve_DataInputs() {
  let Element = {
    name: formName.value,
    price: formPrice.value,
    category: formCategory.value,
    desc: formDescription.value,
  };
  console.log("Element retrived:", Element);
  return Element;
}
addBTN.addEventListener("click", () => {
  Add_Element();
  Update_LocalStorge(key, All_products);
  display();
  clear_inputs();
});
updateBTN.addEventListener("click", function () {
  All_products[updating_index] = Retrieve_DataInputs();
  clear_inputs();
  updateBTN.style.display = "none";
  addBTN.style.display = "block";
  Update_LocalStorge(key, All_products);
  display();
});
formSearch.addEventListener("keyup", () => {
  console.log("retrived the search word = ", formSearch.value);
  search(formSearch.value);
});
StartUp();
