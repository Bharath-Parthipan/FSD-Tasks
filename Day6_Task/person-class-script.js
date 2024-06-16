class Person {
  constructor(
    name,
    jobTitle,
    location,
    email,
    phone,
    objective,
    skills,
    experience,
    education,
    languages,
    interests
  ) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.location = location;
    this.email = email;
    this.phone = phone;
    this.objective = objective;
    this.skills = skills;
    this.experience = experience;
    this.education = education;
    this.languages = languages;
    this.interests = interests;
  }

  // Method to get a brief introduction
  getIntroduction() {
    return `Hello, my name is ${this.name} and I am a ${this.jobTitle}.`;
  }

  // Method to get contact details
  getContactDetails() {
    return `Email: ${this.email}, Phone: ${this.phone}`;
  }

  // Method to get the list of skills
  getSkills() {
    return this.skills.join(", ");
  }

  // Method to get the list of locations
  getLocations() {
    return this.location.join(", ");
  }

  // Method to get the experience details
  getExperience() {
    return this.experience
      .map((exp) => {
        return `Title: ${exp.title}, Company: ${exp.company}, Location: ${exp.location}, Dates: ${exp.dates}, Description: ${exp.description}`;
      })
      .join("\n");
  }

  // Method to get the education details
  getEducation() {
    return this.education
      .map((edu) => {
        return `Degree: ${edu.degree}, Institution: ${edu.institution}, Location: ${edu.location}, Dates: ${edu.dates}`;
      })
      .join("\n");
  }

  // Method to get language proficiency
  getLanguages() {
    return this.languages
      .map((lang) => {
        return `${lang.name} (${lang.proficiency})`;
      })
      .join(", ");
  }

  // Method to get interests
  getInterests() {
    return this.interests.join(", ");
  }

  // Method to get the complete profile
  getProfile() {
    return `
      Name: ${this.name}
      Job Title: ${this.jobTitle}
      Location: ${this.getLocations()}
      Email: ${this.email}
      Phone: ${this.phone}
      Objective: ${this.objective}
      Skills: ${this.getSkills()}
      Experience: ${this.getExperience()}
      Education: ${this.getEducation()}
      Languages: ${this.getLanguages()}
      Interests: ${this.getInterests()}
    `;
  }
}

// Example usage
const bharath = new Person(
  "Bharath",
  "Full-Stack Developer",
  ["Bangalore", "Chennai", "Coimbatore"],
  "bharathps00624@gmail.com",
  "+91 9360761275",
  "Seeking a Full-Stack Developer role to apply and extend my 2-years of experience in coding and problem-solving, Contributing to innovative projects and achieving excellence in Full-Stack Development.",
  [
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
  [
    {
      title: "Full-Stack Developer",
      company: "GetSter.Tech Pvt Ltd.",
      location: "Hosur",
      dates: "2022 - 2024",
      description:
        "Experienced Full-Stack Developer at GETster.TECH Pvt Ltd with 2-years of hands-on experience. Proficient in Angular, NestJS, and MySQL for robust Web Applications. Specialized in Angular-17 Server-Side-Rendering (SSR) and dynamic Scheduling. Developed Progressive Web Application using Angular, Tailwind CSS, and Animate.css Library. Adept in client-side framework for caching, reusable components, and utilizing technologies like jsPDF and File Saver for efficient file handling.",
    },
  ],
  [
    {
      degree: "BSc Computer Science",
      institution: "Sacred Hearts College",
      location: "Tirupattur, Tpt-Dt",
      dates: "2019 - 2022",
    },
  ],
  [
    {
      name: "Tamil",
      proficiency: "Native",
    },
    {
      name: "English",
      proficiency: "Fluent",
    },
  ],
  ["Full-stack Development", "Machine Learning", "Artificial Intelligence"]
);

console.log(bharath.getProfile());
