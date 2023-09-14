let exp = 1;
let newE = document.createElement('textarea');
newE.name = `no:${exp}`;
newE.style.display ="none";
let temp = document.getElementById("resumeForm");
temp.appendChild(newE);
VanillaTilt.init(document.querySelector(".banners"),{
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.5,
});

function addExp(){
    exp++;
    let newElement = document.createElement('textarea');
    let parent = document.getElementById('exp');
    newElement.rows =  "4";
    newElement.name = `experience-${exp}`;
    newElement.placeholder = "Company Name\nDesignation\nAchievements";
    parent.appendChild(newElement);
}

/*

function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const summary = document.getElementById("summary").value;
    const experience = document.getElementById("experience").value;

    const resume = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;

    document.getElementById("generatedResume").innerHTML = resume;
}*/

function printResume() {
    const resumeContent = document.getElementById("generatedResume").innerHTML;
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print Resume</title></head><body>');
    printWindow.document.write(resumeContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
const experienceEntries = document.querySelectorAll(".experienceEntry");
const experiences = [];
experienceEntries.forEach(entry => {
    const companyName = entry.querySelector(".companyName").value;
    const designation = entry.querySelector(".designation").value;
    const keyFeaturesText = entry.querySelector(".keyFeatures").value;
    const keyFeaturesList = keyFeaturesText.split('\n').filter(feature => feature.trim() !== '');
    experiences.push({ companyName, designation, keyFeatures: keyFeaturesList });
});