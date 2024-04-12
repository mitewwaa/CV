function generateEducationHTML(data) {
    const educationSection = document.getElementById('education');
    const educationList = educationSection.querySelector('.list');
  
    data.education.forEach(edu => {
      const listItem = document.createElement('li');
  
      const institutionHeading = document.createElement('h3');
      institutionHeading.textContent = `${edu.institution} - ${edu.location}`;
      listItem.appendChild(institutionHeading);
  
      const description = document.createElement('h4');
      description.innerHTML = `${edu.description}<br />${edu.duration}`;
      listItem.appendChild(description);
  
      educationList.appendChild(listItem);
    });
  }
  
fetch('./task.json')
    .then(response => response.json())
    .then(info => {
      generateEducationHTML(info);
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
  
document.getElementById("change-theme").addEventListener("click", function (){
    document.getElementById("root").classList.toggle("dark");
  });

const year = document.querySelector('#current-year');
year.innerHTML = new Date().getFullYear();