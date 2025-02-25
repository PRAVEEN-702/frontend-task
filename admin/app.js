
let data = localStorage.getItem('object') 
  ? JSON.parse(localStorage.getItem("object")) 
  : [
      { id: 1, name: "sami", email: "sami@gmail.com", course: "Front End", role: "React Js", phonenumber: "9342165604", status: "unplaced" },
      { id: 2, name: "Shiva", email: "shiva@gmail.com", course: "Front End", role: "React Js", phonenumber: "9342165604", status: "unplaced" }
    ];

function readAll() {

    localStorage.setItem("object", JSON.stringify(data));
     var tableData = document.querySelector(".card .card-body");
    var objectdata = JSON.parse(localStorage.getItem("object"));
    let elements = '<div class="card-container">';
    objectdata.forEach(record => {
        elements += `
          <div class="card-item">
          <div class='card-flex'>
            <div class='card-first'><p class='first'>${record.name.charAt(0)}</p></div>
            <h3>${record.name}</h3>
           </div> 
            <p>Email :<span>${record.email}</span></p>
            <p>Course :<span> ${record.course}</span></p>
            <p>Role : <span>${record.role}</span></p>
            <p>Phone Number :<span> ${record.phonenumber}</span></p>
            <p>Status : <span>${record.status}</span></p>
            <button onclick={delet(${record.id})}>Delete</button>
          </div>`;
      });
    
      elements += '</div>';  
      tableData.innerHTML = elements;
    }

function add() {
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var course = document.querySelector('#course').value;
    var role = document.querySelector('#role').value;
    var phonenumber = document.querySelector('#number').value;
    var status = document.querySelector('#status').value;

  
    if (!name || !email || !course || !role || !phonenumber || !status) {
        alert("Please fill in all fields.");
        return;
    }

    var newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    
    var newObj = { id: newId, name, email, course, role, phonenumber, status };
    
    var db = data.push(newObj);
   
     readAll();
   
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#course').value = '';
    document.querySelector('#role').value = '';
    document.querySelector('#number').value = '';
    document.querySelector('#status').value = '';
}

readAll();
function delet(id) {
  data = data.filter(record => record.id !== id);
  readAll();
}