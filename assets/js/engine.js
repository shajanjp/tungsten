let main = document.getElementById('main');
// main.innerHTML = JSON.stringify(window.location);
console.log(JSON.stringify(window.location));

function setHeading(title) {
  main.innerHTML = `<h1>${title}</h1>`;
}

function pageProducts() {
  setHeading('Products');
}

function pageStores() {
  setHeading('Stores');
}

function pageHome() {
  setHeading('Home');
}

let routesAndHandlers = {
  '/users': pageUsers,
  '/products': pageProducts,
  '/stores': pageStores,
  '/': pageHome,
  '/users/UID': listUsers
};

function handleRoutes(routePath) {
  let entity = '/';
  if (routePath) {
    entity = routePath;
    window.location.hash = `#${routePath}`;
  } else if (window.location.hash && window.location.hash.split('#')[1] && window.location.hash.split('#')[1]) {
    entity = window.location.hash.split('#')[1];
  }
  routesAndHandlers[entity]();
}

handleRoutes();

function reloadURLs() {
  let links = document.querySelectorAll('a[data-route]');
  for (i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      handleRoutes(this.getAttribute('data-route'));
    });
  }
}

reloadURLs();
