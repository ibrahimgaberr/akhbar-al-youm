/*
// Get the dropdown button and menu
var dropdownBtn = document.querySelector('.dropdown-btn');
var dropdownMenu = document.querySelector('.dropdown-menu');

// Add an event listener to the dropdown button
dropdownBtn.addEventListener('click', function() {
  // Clear the existing options
  dropdownMenu.innerHTML = 'li';

  // Make an API call to retrieve the options from the database
  fetch('localhost/project/professor_courses.php')
    .then(response => response.json())
//     .then(options => {
//       // Populate the dropdown menu with the options
//       options.forEach(option => {
//         var li = document.createElement('li');
//         li.textContent = option;
//         li.addEventListener('click', function() {
//           // Set the selected option and close the dropdown menu
//           var selectedOption = document.querySelector('#selected-option');
//           selectedOption.textContent = option;
//           dropdownMenu.style.display = 'none';
//         });
//         dropdownMenu.appendChild(li);
//       });

//       // Display the dropdown menu
//       dropdownMenu.style.display = 'block';
//     });
// });*/
// //start of button
// //get all dropdown from the document
// const dropdown = document.querySelectorAll('.dropdown');
// //loop through all dropdown elements
// dropdowns.forEach(dropdown => {
//   const select =dropdown.querySelector('.select');
//   const caret = dropdown.querySelector('.caret');
//   const menu = dropdown.querySelector('.menu');
//   const option =dropdown.querySelectorAll('.option li');
//   const selected = dropdown.querySelector('.selected');
//   select.addEventListener('click', () =>{
//   select.classList.toggle('slect-clicked');
//   caret.classList.toggle('caret-rotate');
//   menu.classList.toggle('menu-open');
//   });
//   option.forEach(option =>{
//     option.addEventListener('click', () =>{
//       selected.innerText = option.innerText;
//       select.classList.remove('slect-clicked');
//       caret.classList.remove('caret-rotate');
//       menu.classList.remove('menu-open');
//       options.forEach(option =>{
//         option.classList.remove('active');
//       });
//       option,classList.add('active');
//     });
//   });
// });




let headersList = {
  "Accept": "*/*",
 }
 
 

 
 function handleChange(value) { 
 let bodyContent = new FormData();
 bodyContent.append("student_id", "1803044");
 bodyContent.append("course_name", value);
  console.log(value)
  fetch("http://localhost/project/student_attendance.php" , {
  method : "POST" , 
  body :bodyContent,
}).then((data)=>{//link the api of database
  return data.json();//convert to object
}).then((ObjectData)=>{

  console.log("THATE VALUE" , value)
  // console.log(ObjectData[0].title);//<title in database attendanc>
  let tableData="";
  if(ObjectData?.data?.length > 0 ){

    const tableDetails = ObjectData.data.map((values)=>{
      //contant of the table to display the values from the database
      // <td>${values.Attend}</td>
      // <td>${values.Data}</td>
      tableData+= `<tr>
      <td>${values.date}</td>
      <td>${values.attendant ? "Attended sa7" : "Didn't attend"}</td>
    </tr>`
    });
  }
  const table = document.querySelector('.tableBody');
  console.log("TABLE DATA" , table) ; 

  table.innerHTML=tableData;
}).catch((err)=>{
  console.log(err);
})
 }

