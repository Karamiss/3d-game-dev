

// const imgPortfolioStatistics = "/assets/img_portfolio_statistics-item.png"

// const portfolio_statistics = [
//  {
//     number: "+90",
//     text: "Clients"
//  },
//  {
//     number: "+30",
//     text: "Countries"
//  },
//  {
//     number: "+50",
//     text: "Projects"
//  },
// ]


// function fillStatistics() {
//   const section = document.querySelector(".statistics");
//   for (const statistics of portfolio_statistics) {
//     section.innerHTML += `
 


//       <div class="statistics-items">
//       <div class="statistics-item">
//         <img src="${imgPortfolioStatistics}" class="statistics-icon">
//         <div class="statistics-content">
//           <div class="statistics-number">${statistics.number}</div>
//           <div class="statistics-label">${statistics.text}</div>
//         </div>
//       </div>
//       // <div class="statistics-line"></div>
//     </div>
//     `;
//   }
// }

// fillStatistics();

// function fillStatistics() {
//    const section = document.querySelector(".statistics-items");
//    for (const statistics of portfolio_statistics) {
//      section.innerHTML += `
//      <div class="statistics-items">
//      <div class="statistics-item">
//        <img src="${imgPortfolioStatistics}" class="statistics-icon">
//        <div class="statistics-content">
//          <div class="statistics-number">${statistics.number}</div>
//          <div class="statistics-label">${statistics.text}</div>
//        </div>
//      </div>
//    </div>
//      `;
//    }
//  }
 
//  fillStatistics();


const imgSrc = "/assets/img_portfolio_information-img.png";
const informationTitle = "Lorem Ipsum is simply dummy text dummy text";
const  informationSubtitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";
const informationText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";

const PortfolioInformation = [
   {
      title: informationTitle,
      subtitle: informationSubtitle,
      text: informationText,
   },
   {
      title: informationTitle,
      subtitle: informationSubtitle,
      text: informationText,
   },
 
]

function fillInformationBlock() {
   const section = document.querySelector(".information-block");
   for (const info of PortfolioInformation) {
     section.innerHTML += `
     <div class="information">
     <div class="information-container">
       <div class="information-title">${info.title}</div>
       <div class="information-subtitle">${info.subtitle}</div>
       <div class="information-text">${info.text}</div>
       <div class="information-btn anim-clr">
         <a>Read more</a>
       </div>
     </div>
     <div class="information-img">
       <img class="info-img" src="${imgSrc}">
     </div>
   </div>
   
   <div class="information">
     <div class="information-img">
       <img class="info-img" src="${imgSrc}">
     </div>
     <div class="information-container">
     <div class="information-title">${info.title}</div>
     <div class="information-subtitle">${info.subtitle}</div>
     <div class="information-text">${info.text}</div>
       <div class="information-btn anim-clr">
         <a>Read more</a>
       </div>
     </div>
   </div>
     `;
   }
 }

 fillInformationBlock ();