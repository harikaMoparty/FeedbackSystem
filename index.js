var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

let newEl = "";
let newEl2 = "";
let newEl3 = "";
let newEl4 = "";
let newEl5 = "";
console.log("count", count);

function handleEvent(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const inputCat = document.getElementById("mySelect");
  const item = inputCat.options[inputCat.selectedIndex].text;

  const obj = {
    name: name,
    category: item,
  };

  axios
    .post(
      "https://crudcrud.com/api/0c732709a73d48c998343870992bf691/feedback",
      { obj }
    )
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
}

document.addEventListener("DOMContentLoaded", (e) => {
  axios
    .get("https://crudcrud.com/api/0c732709a73d48c998343870992bf691/feedback")
    .then((response) => {
      response.data.forEach((res) => {
        console.log(res.obj);
        showData(res.obj, res._id);
      });
    });
});


function showData(item, id) {
  switch (item.category) {
    case "0":
      console.log("wrong input");
    case "1":
      const parentEl = document.getElementById("star1");
      if (parentEl.children.length === 0) {
        newEl = document.createElement("span");
        newEl.textContent = count + 1;
        count++;
        parentEl.appendChild(newEl);
      } else {
        console.log("inside else1", count);
        count++;
        newEl = document.createElement("span");
        newEl.textContent = count;
        ++count;
        parentEl.appendChild(newEl);
        document.getElementsByTagName("span").innerHTML = count;

        parentEl.appendChild(newEl);
      }
      count = 0;
      break;
    case "2":
      const parentEl2 = document.getElementById("star2");
      if (parentEl2.children.length === 0) {
        newEl2 = document.createElement("span");
        newEl2.textContent = count2 + 1;
        count2++;
        parentEl2.appendChild(newEl2);
      } else {
        console.log("inside else2", count2);
        count2++;
        newEl2.textContent = count2;
      }
      // count = 0;
      break;
    case "3":
      const parentEl3 = document.getElementById("star3");
      if (parentEl3.children.length === 0) {
        newEl3 = document.createElement("span");
        newEl3.textContent = count3 + 1;
        count3++;
        parentEl3.appendChild(newEl3);
      } else {
        console.log("inside else3", count3);
        count3++;
        newEl3.textContent = count3;
      }
      count = 0;
      break;
    case "4":
      const parentEl4 = document.getElementById("star4");
      if (parentEl4.children.length === 0) {
        newEl4 = document.createElement("span");
        newEl4.textContent = count4 + 1;
        count4++;
        parentEl4.appendChild(newEl4);
      } else {
        console.log("inside else--4", count4);
        count4++;
        newEl4.textContent = count4;
      }
      count = 0;
      break;
    case "5":
      const parentEl5 = document.getElementById("star5");
      if (parentEl5.children.length === 0) {
        newEl5 = document.createElement("span");
        newEl5.textContent = count5 + 1;
        count5++;
        parentEl5.appendChild(newEl5);
      } else {
        console.log("inside else5", count5);
        count5++;
        newEl5.textContent = count5;
      }
      count = 0;
      break;
    default:
      console.log("Error!");
  }

 
  const list = document.getElementById("list");
  list.innerHTML += `<li class="p-2"id=${item.name}>${item.name}-${item.category}
    <button id="delete-btn"   class="btn btn-primary m-2" onclick=deleteUserDetails('${item.name}','${id}')>Delete</button>
    <button id="edit-btn"   class="btn btn-primary m-2" onclick=EditUserDetails('${item.name}','${item.name}')>Edit</button>
    </li> `;
    document.getElementById("name").value = "";
  document.getElementById("mySelect").value = "";
  }

function deleteUserDetails(amount, id) {
  console.log("delete inside data");
  const parentNode = document.getElementById("list");
  const childNodeToBeDeleted = document.getElementById(amount);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
  axios
    .delete(
      `https://crudcrud.com/api/0c732709a73d48c998343870992bf691/feedback/${id}`
    )
    .catch((err) => {
      console.error(err, err.message);
      document.body.innerHTML = "Something went wrong, Check again:" + err;
    });
}

function EditUserDetails(amt, item) {
  document.getElementById("name").value = amt;
  document.getElementById("mySelect").value = item;
  deleteUserDetails(amt);

  switch (item) {
    case "1":
      --count;
      console.log("inside dec 1");
      newEl1.textContent = count;
      break;
    case "2":
      --count2;
      console.log("inside dec 1");
      newEl2.textContent = count2;
      break;
    case "3":
      --count3;
      console.log("inside dec 1");
      newEl3.textContent = count3;
      break;
    case "4":
      --count4;
      console.log("inside dec 1");
      newEl4.textContent = count4;
      break;
    case "5":
      --count5;
      console.log("inside dec 1");
      newEl5.textContent = count5;
      break;
    default:
      console.log("error");
  }
}