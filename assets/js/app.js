
async function loadContent(path){
  const response = await fetch(path);
  return response.json();
}

function setActiveNav(page){
  document.querySelectorAll('[data-nav]').forEach(link=>{
    if(link.dataset.nav === page){ link.classList.add('active'); }
    else { link.classList.remove('active'); }
  });
}

function applyGlobal(site){
  const titleEls = document.querySelectorAll('[data-site-name]');
  titleEls.forEach(el => el.textContent = site.siteName);
  document.querySelectorAll('[data-phone]').forEach(el => {
    el.textContent = site.phonePrimary;
    if(el.tagName === 'A') el.href = `tel:${site.phonePrimary.replace(/\s+/g,'')}`;
  });
  document.querySelectorAll('[data-email]').forEach(el => {
    el.textContent = site.email;
    if(el.tagName === 'A') el.href = `mailto:${site.email}`;
  });
  document.querySelectorAll('[data-logo]').forEach(el => { el.src = site.logo; });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('[data-site-title]').forEach(el => el.textContent = site.siteName);
}

function menuSetup(){
  const button = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('.mobile-nav');
  if(button && menu){
    button.addEventListener('click', ()=> menu.classList.toggle('open'));
  }
}

function serviceCardHtml(item){
  return `
    <article class="card">
      <div class="icon-title">
        <span class="icon-box">${item.icon || '▣'}</span>
        <h4>${item.title}</h4>
      </div>
      <p>${item.text}</p>
    </article>
  `;
}

function valueCardHtml(item){
  return `
    <article class="card value-card">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `;
}

function projectCardHtml(item){
  return `
    <article class="project-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="body">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
  `;
}

async function renderHome(){
  const [site, home] = await Promise.all([
    loadContent('content/site.json'),
    loadContent('content/home.json')
  ]);
  applyGlobal(site);
  setActiveNav('home');
  document.title = `${site.siteName} | Home`;

  document.querySelector('[data-hero-image]').src = home.hero.image;
  document.querySelector('[data-hero-title]').textContent = home.hero.title;
  document.querySelector('[data-hero-text]').textContent = home.hero.text;
  document.querySelectorAll('[data-hero-button]').forEach(el => el.textContent = home.hero.button);

  document.querySelector('[data-services-heading]').textContent = home.servicesHeading;
  document.querySelector('[data-services]').innerHTML = home.services.map(serviceCardHtml).join('');

  const valueWrap = document.querySelector('[data-values]');
  if(valueWrap){
    valueWrap.innerHTML = home.values.map(valueCardHtml).join('');
  }

  const why = document.querySelector('[data-why]');
  if(why){
    why.querySelector('[data-title]').textContent = home.whyChoose.title;
    why.querySelector('[data-text]').textContent = home.whyChoose.text;
    why.querySelector('[data-tags]').innerHTML = home.whyChoose.tags.map(t => `<span class="tag">${t}</span>`).join('');
  }

  const quote = document.querySelector('[data-quote]');
  if(quote){
    quote.querySelector('[data-quote-text]').textContent = home.quote.quote;
    quote.querySelector('[data-quote-body]').textContent = home.quote.text;
  }

  const cta = document.querySelector('[data-cta]');
  if(cta){
    cta.querySelector('[data-cta-title]').textContent = home.cta.title;
    cta.querySelector('[data-cta-text]').textContent = home.cta.text;
  }

  document.querySelectorAll('[data-company-line]').forEach(el => el.textContent = home.footerLine);
  menuSetup();
}

async function renderPage(pageKey, file){
  const [site, page] = await Promise.all([
    loadContent('content/site.json'),
    loadContent(file)
  ]);
  applyGlobal(site);
  setActiveNav(pageKey);
  document.title = `${site.siteName} | ${page.metaTitle}`;

  document.querySelector('[data-page-title]').textContent = page.title;
  document.querySelector('[data-page-text]').textContent = page.intro;
  document.querySelector('[data-page-image]').src = page.heroImage || site.heroImage || 'assets/images/hero-van.jpg';

  const grid = document.querySelector('[data-page-grid]');
  if(grid && page.cards){
    grid.innerHTML = page.cards.map(item => {
      return `
        <article class="card">
          <h3 style="margin:0 0 10px;font-size:20px;color:#203049">${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `;
    }).join('');
  }

  const projects = document.querySelector('[data-project-grid]');
  if(projects && page.projects){
    projects.innerHTML = page.projects.map(projectCardHtml).join('');
  }

  const notice = document.querySelector('[data-contact-note]');
  if(notice && page.notice){
    notice.textContent = page.notice;
  }
  menuSetup();
}

window.ROK = { renderHome, renderPage };
