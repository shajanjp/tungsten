let main = document.getElementById('main');
main.innerHTML = JSON.stringify(window.location);
console.log(JSON.stringify(window.location));

function setHeading(title) {
  main.innerHTML = `<h1>${title}</h1>`;
}

function pageUsers() {
  setHeading('Users');
}

function pageProducts() {
  setHeading('Products');
}

function pageStores() {
  setHeading('Stores');
}

function homePage() {
  setHeading('Home');
}

function handleRoutes(routePath) {
  let entity = false;
  if (routePath) {
    entity = routePath;
    window.location.hash = `#${routePath}`;
    } else if (window.location.hash && window.location.hash.split('#')[1] && window.location.hash.split('#')[1].split('/')[0]) {
entity = window.location.hash.split('#')[1].split('/')[0];
}

  switch (entity) {
    case 'users':
    pageUsers();
    break;

    case 'products':
    pageProducts();
    break;

    case 'stores':
    pageStores();
    break;

    default:
    homePage();
  }
}
handleRoutes();


let links = document.querySelector('[data-route]');
console.log('links', links);

