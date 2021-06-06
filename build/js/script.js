document.querySelector('#my-name').textContent = `${data.first_name} ${data.last_name}`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('#position').textContent = data.position;
document.querySelector('.profile-data').textContent = data.profile;

// section experience

let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company} , ${item.city} ,<i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

// contact data

let contactsData = ''
data.contacts.forEach(item => {
   contactsData += `<li><img src=${item[1]}><a href=${item[2]}> ${item[0]}</a></li>`
})
document.querySelector('.contacts-block').innerHTML = contactsData;

//  Skills

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li><img src=${item[1]}> ${item[0]}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

// Education


let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

// Achievements

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;

// certificates

let certificatesData = '';
certificates.forEach(item => {
   certificatesData += `<div class="row justify-content-center certificate">`;
   certificatesData += `<div class="col-lg-12 m-md-auto"> `
   certificatesData += `<p><a href=${item.school}> ${item.schoolName}</a></p>`
   certificatesData += `<img src=${item.certificate} class="shadow img-fluid img-thumbnail">`
   certificatesData += `</div>`
   certificatesData += `</div>`

})
document.querySelector('.certificate').innerHTML = certificatesData;
