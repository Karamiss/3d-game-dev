// ABOUT.JS

const data = [
  {
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
]

function fillSectionWrapper() {
  const section = document.querySelector(".section-wrapper");
  for (const card of data) {
    section.innerHTML += `
      <article class="section-one">
        <header class="section-header">
          <h1>${card.title}</h1>
        </header>
        <h2>${card.subtitle}</h2>
        <div>${card.text}</div>
      </article>
    `
  }
}

fillSectionWrapper();


const imgSrc = "/assets/img_about_team_team-wrapper.png";
const commonText = "C00";

const teamMembers = [
  {
    title: "John Peter",
    text: commonText
  },
  {
    title: "Arline Bradley",
    text: commonText
  },
  {
    title: "Sophie Richards",
    text: commonText
  }
];

function fillTeamWrapper() {
  const section = document.querySelector(".team-wrapper");
  for (const member of teamMembers) {
    section.innerHTML += `
      <div class="employee">
        <img src="${imgSrc}">
        <h1>${member.title}</h1>
        <p>${member.text}</p>
      </div>
    `;
  }
}

fillTeamWrapper();
