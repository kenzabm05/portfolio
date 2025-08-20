(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu on link click (mobile)
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Contact form (demo-only)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const message = String(formData.get('message') || '').trim();

      if (!name || !email || !message) {
        status.textContent = 'Veuillez remplir tous les champs.';
        status.style.color = '#f87171';
        return;
      }

      // Simulated submit
      status.textContent = 'Envoi en cours…';
      status.style.color = '#9ca3af';
      await new Promise((r) => setTimeout(r, 700));
      status.textContent = 'Merci, votre message a été envoyé (démo).';
      status.style.color = '#34d399';
      form.reset();
    });
  }
})();


