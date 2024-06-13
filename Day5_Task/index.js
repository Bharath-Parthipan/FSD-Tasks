
// 1. Create your own resume data in JSON Format.
fetch("./resume-data.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));

// 2. For the above JSON, iterate over all for loops (for, for in, for of, forEach).
let myResumeData = {
  name: "Bharath",
  job_title: "Full-Stack Developer",
  location: ["Bangalore", "Chennai", "Coimbatore"],
  email: "bharathps00624@gmail.com",
  phone: "+91 9360761275",
  objective:
    "Seeking a Full-Stack Developer role to apply and extend my 2-years of experience in coding and problem-solving, Contributing to innovative projects and achieving excellence in Full-Stack Development.",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Angular",
    "Nest.js",
    "Swagger",
    "MySql",
    "MySql WorkBench",
  ],
  experience: [
    {
      title: "Full-Stack Developer",
      company: "GetSter.Tech Pvt Ltd.",
      location: "Hosur",
      dates: "2022 - 2024",
      description:
        "Experienced Full-Stack Developer at GETster.TECH Pvt Ltd with 2-years of hands-on experience. Proficient in Angular, NestJS, and MySQL for robust Web Applications. Specialized in Angular-17 Server-Side-Rendering (SSR) and dynamic Scheduling.Developed Progressive Web Application using Angular, Tailwind CSS, and Animate.css Library Adept in client-side framework for caching, reusable components, and utilizing technologies like jsPDF and File Saver for efficient file handling.",
    },
  ],
  education: [
    {
      degree: "BSc.computer Science",
      institution: "Sacred Hearts College",
      location: "Tirupattur, Tpt-Dt",
      dates: "2019 - 2022",
    },
  ],
  languages: [
    {
      name: "Tamil",
      proficiency: "Native",
    },
    {
      name: "English",
      proficiency: "Nan",
    },
  ],
  interests: [
    "Full-stack Developer",
    "Machine Learning",
    "Artificial Intelligence",
  ],
};


// Using for loop
console.log("Using for loop:");
for (let i = 0; i < myResumeData.skills.length; i++) {
  console.log(myResumeData.skills[i]);
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (let key in myResumeData) {
  if (myResumeData.hasOwnProperty(key)) {
    console.log(`${key}: ${myResumeData[key]}`);
  }
}

// Using for...of loop (Note: for...of cannot be used directly on objects, but it works for arrays)
console.log("\nUsing for...of loop:");
for (let skill of myResumeData.skills) {
  console.log(skill);
}

// Using forEach (Works with arrays)
console.log("\nUsing forEach loop:");
myResumeData.skills.forEach(skill => {
  console.log(skill);
});