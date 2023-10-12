function setInnerHTML(elm, html) {
  elm.innerHTML = html;
  Array.from(elm.querySelectorAll("script"))
    .forEach(oldScriptEl => {
      const newScriptEl = document.createElement("script");
      Array.from(oldScriptEl.attributes).forEach( attr => {
        newScriptEl.setAttribute(attr.name, attr.value)
      });
      const scriptText = document.createTextNode(oldScriptEl.innerHTML);
      newScriptEl.appendChild(scriptText);
      oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
  });
}

 function includeComponents() {
  const tagsPage = document.getElementsByTagName("*");
  for (const tag of tagsPage) {
    const pathToModule = tag.getAttribute("html-component");
    const additionalClasses = tag.getAttribute("add-class");
    if (pathToModule) {
      const content = tag.innerHTML;
      const pathToFile = `${pathToModule}/index.html`;
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            setInnerHTML(tag, this.responseText);
            const defaultSlot = tag.querySelector('#default');
            if (defaultSlot && content) {
              defaultSlot.innerHTML = content;
              tag.firstElementChild.classList.add(additionalClasses);
              defaultSlot.removeAttribute('id');
            };
          };
          if (this.status === 404) {
            tag.innerHTML = "Page not found.";
          };
          tag.removeAttribute("html-component");
          includeComponents();
        };
      };
      xhttp.open("GET", pathToFile, true);
      xhttp.send();
      return;
    }
  }
}

function router() {
  const main = document.getElementById("main");
  if (main) {
    const { hash } = window.location;
    const pathToFile = `/pages/${hash.substring(1)}/index.html`;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          setInnerHTML(main, this.responseText);
        }
        if (this.status === 404) {
          main.innerHTML = "Page not found.";
        }
        main.removeAttribute("html-page");
        includeComponents();
      }
    };
    xhttp.open("GET", pathToFile, true);
    xhttp.send();
    return;
  }
}

if (!window.location.hash) window.location.hash = '#home'
router();
window.addEventListener('hashchange', () => router());
includeComponents();


// function ImportingStyles(folderPath) {
//   var link = document.createElement('link');
//   link.rel = 'stylesheet';
//   link.type = 'text/css';
//   link.href = folderPath;
//   document.head.appendChild(link);
// }

// ImportingStyles('/ui-kit/button/style.css');
// ImportingStyles('/ui-kit/image/style.css');
// ImportingStyles('/ui-kit/text/style.css');

// ImportingStyles();