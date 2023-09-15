let data = window.location.search;
let params = new URLSearchParams(data);
document.getElementById("name").innerHTML = params.get("name");
document.getElementById("designation").innerHTML = params.get("designation");
document.getElementById("objective").innerHTML = params.get("objective");
document.getElementById("mail").innerHTML = params.get("email");
document.getElementById("location").innerHTML = params.get("location");
document.getElementById("github").innerHTML = params.get("git");
document.getElementById("call").innerHTML = params.get("phone");
document.getElementById("linked").innerHTML = params.get("linkedin");
document.getElementById("education_degree").innerHTML = params.get("education_1");
document.getElementById("university").innerHTML = params.get("education_2");
let skillStr =  params.get("skills");
let skillStringArray = skillStr.split('\n');
for(var i=0;i<skillStringArray.length;i++){
    const div = document.getElementById("skill");
    const paragraphElement = document.createElement('p');
    paragraphElement.classList.add('skill-badge');
    paragraphElement.textContent = skillStringArray[i];
    div.appendChild(paragraphElement);
}
let certificateStr =  params.get("certificates");
let certificatestringArray = certificateStr.split('\n');
for(var i=0;i<certificatestringArray.length;i++){
    const parentDiv = document.getElementById("certificate");
    const newDiv = document.createElement('div');
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = certificatestringArray[i];
    newDiv.appendChild(paragraphElement);
    newDiv.classList.add('cd-certificate');
    parentDiv.appendChild(newDiv);
}
let projectStr =  params.get("projects");
let projectStringArray = projectStr.split('\n');
for(var i=0;i<projectStringArray.length;i++){
    const parent = document.getElementById("projectList");
    const newElement = document.createElement('li');
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = projectStringArray[i];
    newElement.appendChild(paragraphElement);
    parent.appendChild(newElement);
}
// let tt = params.get("experience-1")
let count=1;
while(params.get("experience-"+count)!=null){
    count++;
}
let it = 1;

while(it<count){
    let array = params.get("experience-"+it).split('\n');
    let newDiv = document.createElement('div');
    let parentDiv = document.getElementById("wk");
    let company_name = document.createElement('h4');
    company_name.id = "organization_name";
    company_name.classList.add("heading1");
    company_name.textContent = array[0];
    newDiv.appendChild(company_name);
    let designation = document.createElement('h5');
    designation.id = "desig";
    designation.textContent = array[1];
    console.log(array[1]);
    designation.classList.add("heading2");
    newDiv.appendChild(designation);
    let achievements = document.createElement('p');
    achievements.id  = "achievements";
    achievements.textContent = "Achievements";
    achievements.style.color = "#EAAD42";
    achievements.style.fontStyle = "italic";
    newDiv.appendChild(achievements);
    let ullist = document.createElement('ul');
    newDiv.appendChild(ullist);
    for(var i= 2 ;i<array.length ; i++){
        let listItems = document.createElement('li');
        listItems.classList.add("dot");
        listItems.textContent = array[i];
        ullist.appendChild(listItems);
    }
    parentDiv.appendChild(newDiv);
    it++;
}