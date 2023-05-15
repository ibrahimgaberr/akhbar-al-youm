
console.log("STARTED");

async function getCourseName() { 
  let headersList = {
    "Accept": "*/*",
  }
  
  let bodyContent = new FormData();
  let localItems = localStorage.getItem("userInfo") ; 
  if(localItems) localItems = JSON.parse(localItems); 
  let id  = localItems?.data?.ID; 
  if(!id ) {
    return ; 
  } 
  bodyContent.append("id", id);
  let response = await fetch("http://localhost/project/professor_courses.php", { 
    method: "POST",
    body: bodyContent,
    headers: headersList
  });

  const resJson = await response.json() ; 
  const courseName = resJson.data["course name"] ; 
  QRCode.toCanvas(
    document.getElementById("canvas"),
    courseName,
    function (error) {
      if (error) console.error(error);
      console.log("success!");
    }
  );
}
// getCourseName();