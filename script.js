const services = [
  {
    group: "Волосы",
    items: [
      ["Женская стрижка", "от 1800 сом", "60 мин", "Форма, которая держится после салона и подходит вашему образу жизни."],
      ["Окрашивание", "от 4500 сом", "2-4 часа", "Тон, глубина и бережная техника после консультации колориста."],
      ["Укладка", "от 1500 сом", "45 мин", "Легкая дневная или выразительная вечерняя укладка без перегруза."],
      ["Уход для волос", "от 2500 сом", "75 мин", "Восстановление блеска, мягкости и плотности профессиональными составами."],
    ],
  },
  {
    group: "Ногти",
    items: [
      ["Маникюр с покрытием", "от 1800 сом", "90 мин", "Чистая форма, ровное покрытие и стерильный инструмент для каждой гостьи."],
      ["Педикюр", "от 2200 сом", "90 мин", "Аккуратный уход, комфортная обработка и стойкий финиш."],
    ],
  },
  {
    group: "Брови и ресницы",
    items: [
      ["Коррекция и окрашивание бровей", "от 1200 сом", "45 мин", "Мягкая архитектура бровей с оттенком под волосы и кожу."],
      ["Ламинирование ресниц", "от 1800 сом", "60 мин", "Естественный изгиб и выразительность без ежедневной туши."],
    ],
  },
  { group: "Макияж", items: [["Макияж вечерний", "от 3500 сом", "75 мин", "Стойкий образ для события, съемки или важного вечера."]] },
  { group: "Косметология", items: [["Spa-ритуал для лица", "от 3000 сом", "60 мин", "Деликатное очищение, массаж и уход под актуальное состояние кожи."]] },
  { group: "Spa", items: [["Расслабляющий spa-уход", "от 2800 сом", "70 мин", "Тихий ритуал восстановления с ароматерапией и мягкими техниками."]] },
];

const serviceVisuals = {
  "Волосы": "https://images.squarespace-cdn.com/content/v1/68d41d633f1b562e8c5595f9/775ca356-932c-4def-946c-4d18c2d40e61/32.jpg",
  "Ногти": "https://img.magnific.com/fotos-premium/elegante-manicure-de-nu-com-unhas-de-amendoa-mestre-aplicando-esmalte-de-gel-bege-no-salao-de-beleza-closeup_125374-5828.jpg?q=80&semt=ais_hybrid&w=740",
  "Брови и ресницы": "https://images.squarespace-cdn.com/content/v1/622556d1cddb7f6ae688d0d7/f6b77e00-238e-4f3d-9a84-36318c37a800/IMG_8654.jpg",
  "Макияж": "https://static.tildacdn.com/tild3238-6665-4662-a364-666664346437/IMG_5567.JPG",
  "Косметология": "https://radyinterior.ae/wp-content/uploads/2025/02/Luxury-Beauty-Salon-1024x768.webp",
  "Spa": "https://moneystory-phinf.pstatic.net/MjAyNjA0MDFfMTgg/MDAxNzc1MDMwNjQ5ODg2.jMFeGKCwFKKhH5O88VjFOvsXCrvYZJ3f1rGUz162TKgg.8lfB5hAtllYhhsgnQ61aegaUx1bbC75am43Sl81qQJog.PNG/KakaoTalk_20260401_170322209.png",
};

const popularServices = new Set(["Окрашивание", "Маникюр с покрытием", "Коррекция и окрашивание бровей", "Spa-ритуал для лица"]);

const masters = [
  ["Алина Садыкова", "Топ-стилист, колорист", "9 лет", "Сложные окрашивания, стрижки и восстановление структуры волос.", "https://images.squarespace-cdn.com/content/v1/68d41d633f1b562e8c5595f9/775ca356-932c-4def-946c-4d18c2d40e61/32.jpg"],
  ["Мээрим Абдыева", "Nail-мастер", "7 лет", "Чистый маникюр, нюдовые покрытия и деликатная работа с формой.", "https://img.magnific.com/fotos-premium/elegante-manicure-de-nu-com-unhas-de-amendoa-mestre-aplicando-esmalte-de-gel-bege-no-salao-de-beleza-closeup_125374-5828.jpg?q=80&semt=ais_hybrid&w=740"],
  ["Диана Осмонова", "Бровист, lash-мастер", "6 лет", "Естественная коррекция, ламинирование и выразительный взгляд без жесткости.", "https://static.tildacdn.com/tild3238-6665-4662-a364-666664346437/IMG_5567.JPG"],
  ["Айсулуу Темирова", "Визажист", "8 лет", "Свадебные и вечерние образы с акцентом на кожу и стойкость.", "https://images.squarespace-cdn.com/content/v1/622556d1cddb7f6ae688d0d7/f6b77e00-238e-4f3d-9a84-36318c37a800/IMG_8654.jpg"],
  ["Жанара Ибраева", "Косметолог-эстетист", "10 лет", "Уходовые процедуры, массаж лица и индивидуальные протоколы кожи.", "https://radyinterior.ae/wp-content/uploads/2025/02/Luxury-Beauty-Salon-1024x768.webp"],
];

const beforeAfter = [
  {
    title: "Окрашивание волос",
    before: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV80MF9waG90b19vZl9hX2JsYWNrX2FmcmljYWNfYW1lcmljY25fd29tYW5zX2hhbl80MGQwYTBiYS05MDk2LTQ4MjEtYmU5YS04NzYzYTRkYWY2M2JfMS5qcGc.jpg",
    after: "https://images.squarespace-cdn.com/content/v1/68d41d633f1b562e8c5595f9/775ca356-932c-4def-946c-4d18c2d40e61/32.jpg",
  },
  {
    title: "Брови и макияж",
    before: "https://images.squarespace-cdn.com/content/v1/622556d1cddb7f6ae688d0d7/f6b77e00-238e-4f3d-9a84-36318c37a800/IMG_8654.jpg",
    after: "https://static.tildacdn.com/tild3238-6665-4662-a364-666664346437/IMG_5567.JPG",
  },
  {
    title: "Маникюр",
    before: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV80MF9waG90b19vZl9hX2JsYWNrX2FmcmljYWNfYW1lcmljY25fd29tYW5zX2hhbl80MGQwYTBiYS05MDk2LTQ4MjEtYmU5YS04NzYzYTRkYWY2M2JfMS5qcGc.jpg",
    after: "https://img.magnific.com/fotos-premium/elegante-manicure-de-nu-com-unhas-de-amendoa-mestre-aplicando-esmalte-de-gel-bege-no-salao-de-beleza-closeup_125374-5828.jpg?q=80&semt=ais_hybrid&w=740",
  },
];

const gallery = [
  ["Интерьер", "Светлый зал LUMIÈRE", "https://moneystory-phinf.pstatic.net/MjAyNjA0MDFfMTgg/MDAxNzc1MDMwNjQ5ODg2.jMFeGKCwFKKhH5O88VjFOvsXCrvYZJ3f1rGUz162TKgg.8lfB5hAtllYhhsgnQ61aegaUx1bbC75am43Sl81qQJog.PNG/KakaoTalk_20260401_170322209.png"],
  ["Волосы", "Мягкое окрашивание", "https://images.squarespace-cdn.com/content/v1/68d41d633f1b562e8c5595f9/775ca356-932c-4def-946c-4d18c2d40e61/32.jpg"],
  ["Ногти", "Нюдовый маникюр", "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV80MF9waG90b19vZl9hX2JsYWNrX2FmcmljYWNfYW1lcmljY25fd29tYW5zX2hhbl80MGQwYTBiYS05MDk2LTQ4MjEtYmU5YS04NzYzYTRkYWY2M2JfMS5qcGc.jpg"],
  ["Макияж", "Вечерний образ", "https://static.tildacdn.com/tild3238-6665-4662-a364-666664346437/IMG_5567.JPG"],
  ["Брови", "Архитектура бровей", "https://images.squarespace-cdn.com/content/v1/622556d1cddb7f6ae688d0d7/f6b77e00-238e-4f3d-9a84-36318c37a800/IMG_8654.jpg"],
  ["Интерьер", "Приватная зона ухода", "https://radyinterior.ae/wp-content/uploads/2025/02/Luxury-Beauty-Salon-1024x768.webp"],
];

const reviews = [
  ["Айжан", "После окрашивания волосы выглядят дорого и живо. Очень понравилось, что мастер сначала все объяснила и только потом начали."],
  ["Наргиза", "Маникюр держится отлично, форма аккуратная. В салоне спокойно, чисто и без суеты, для меня это важно."],
  ["Элина", "Записывалась на макияж перед мероприятием. Получилось выразительно, но не тяжело. Продержался весь вечер."],
  ["Мадина", "Хожу на уходы для волос. Нравится, что не навязывают лишнее, а честно говорят, что подойдет."],
  ["Салтанат", "Очень красивый интерьер и внимательные администраторы. По ощущениям сервис выше большинства салонов в Бишкеке."],
  ["Алия", "Делала брови и ресницы. Результат естественный, лицо стало свежее, без эффекта перебора."],
];

const timeSlots = ["10:00", "11:30", "13:00", "15:00", "17:30", "19:00"];
const bookingServices = services.flatMap((section) => section.items.map((item) => item[0]));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouchDevice = window.matchMedia("(hover: none)").matches;
let activeServiceCategory = "Все";

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderServiceTabs() {
  const root = document.querySelector("#serviceTabs");
  root.innerHTML = "";
  ["Все", ...services.map((section) => section.group)].forEach((category) => {
    const button = createElement("button", category === activeServiceCategory ? "active" : "", category);
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", category === activeServiceCategory ? "true" : "false");
    button.addEventListener("click", () => {
      activeServiceCategory = category;
      renderServiceTabs();
      renderServices();
    });
    root.append(button);
  });
}

function renderServices() {
  const root = document.querySelector("#serviceGroups");
  root.innerHTML = "";
  services.filter((section) => activeServiceCategory === "Все" || section.group === activeServiceCategory).forEach((section) => {
    const card = createElement("article", "service-card stagger-item");
    const img = createElement("img", "service-image image-fade");
    img.src = serviceVisuals[section.group];
    img.alt = section.group;
    img.loading = "lazy";
    card.append(img, createElement("h3", "", section.group));

    section.items.forEach(([name, price, duration, text]) => {
      const row = createElement("div", "service-row");
      const content = createElement("div");
      const title = createElement("h4", "", name);
      if (popularServices.has(name)) title.append(createElement("em", "popular-badge", "Популярно"));
      content.append(title, createElement("p", "", text), createElement("span", "", duration));
      const priceBlock = createElement("div", "price-block");
      const cta = createElement("a", "", "Записаться");
      cta.href = "#booking";
      cta.addEventListener("click", () => setBookingService(name));
      priceBlock.append(createElement("strong", "", price), cta);
      row.append(content, priceBlock);
      card.append(row);
    });

    root.append(card);
  });
  observeAnimatedElements(root.querySelectorAll(".stagger-item"));
  initImageLoading(root);
}

function renderMasters() {
  const root = document.querySelector("#masterGrid");
  masters.forEach(([name, role, exp, text, image], index) => {
    const card = createElement("article", "master-card stagger-item");
    const img = createElement("img");
    img.src = image;
    img.alt = name;
    img.loading = "lazy";
    const body = createElement("div");
    const details = createElement("button", "master-details", "Подробнее");
    details.type = "button";
    details.addEventListener("click", () => openMasterModal(index));
    const link = createElement("a", "", "Записаться");
    link.href = "#booking";
    link.addEventListener("click", () => setBookingMaster(name));
    body.append(createElement("h3", "", name), createElement("p", "", role), createElement("span", "", `${exp} опыта`), createElement("small", "", text), details, link);
    card.append(img, body);
    root.append(card);
  });
  initImageLoading(root);
}

function renderGallery(category = "Все") {
  const root = document.querySelector("#galleryGrid");
  root.innerHTML = "";
  gallery
    .filter(([itemCategory]) => category === "Все" || itemCategory === category)
    .forEach(([, title, image]) => {
      const figure = createElement("figure", "stagger-item");
      const img = createElement("img");
      img.src = image;
      img.alt = title;
      img.loading = "lazy";
      figure.append(img, createElement("figcaption", "", title));
      root.append(figure);
    });
  observeAnimatedElements(root.querySelectorAll(".stagger-item"));
  initImageLoading(root);
}

function renderBeforeAfter() {
  const root = document.querySelector("#beforeAfterGrid");
  beforeAfter.forEach((item) => {
    const card = createElement("article", "before-after-card stagger-item");
    card.style.setProperty("--split", "50%");
    card.innerHTML = `
      <div class="compare-frame">
        <img class="compare-img image-fade" src="${item.before}" alt="${item.title} до" loading="lazy">
        <div class="compare-after">
          <img class="compare-img image-fade" src="${item.after}" alt="${item.title} после" loading="lazy">
        </div>
        <span class="compare-label before">До</span>
        <span class="compare-label after">После</span>
      </div>
      <div class="compare-copy">
        <h3>${item.title}</h3>
        <p>Передвиньте ползунок, чтобы увидеть разницу.</p>
        <input type="range" min="18" max="82" value="50" aria-label="Сравнить до и после">
      </div>
    `;
    card.querySelector("input").addEventListener("input", (event) => {
      card.style.setProperty("--split", `${event.target.value}%`);
    });
    root.append(card);
  });
  observeAnimatedElements(root.querySelectorAll(".stagger-item"));
  initImageLoading(root);
}

function renderFilters() {
  const root = document.querySelector("#galleryFilters");
  ["Все", "Волосы", "Ногти", "Брови", "Макияж", "Интерьер"].forEach((category, index) => {
    const button = createElement("button", index === 0 ? "active" : "", category);
    button.type = "button";
    button.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const grid = document.querySelector("#galleryGrid");
      grid.classList.add("is-switching");
      window.setTimeout(() => {
        renderGallery(category);
        requestAnimationFrame(() => grid.classList.remove("is-switching"));
      }, reducedMotion ? 0 : 180);
    });
    root.append(button);
  });
}

function renderReviews() {
  const root = document.querySelector("#reviewGrid");
  reviews.forEach(([name, text]) => {
    const card = createElement("article", "stagger-item");
    card.append(createElement("div", "stars", "★★★★★"), createElement("p", "", text), createElement("strong", "", `${name}, Бишкек`));
    root.append(card);
  });
}

function fillSelect(selector, values) {
  const select = document.querySelector(selector);
  values.forEach((value) => {
    const option = createElement("option", "", value);
    option.value = value;
    select.append(option);
  });
}

function initBooking() {
  fillSelect("#bookingService", bookingServices);
  fillSelect("#bookingMaster", ["Любой мастер", ...masters.map(([name]) => name)]);
  fillSelect("#bookingTime", timeSlots);

  document.querySelector("#bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const service = document.querySelector("#bookingService").value;
    const master = document.querySelector("#bookingMaster").value;
    const date = document.querySelector("#bookingDate").value || "удобную дату";
    const time = document.querySelector("#bookingTime").value;
    const name = document.querySelector("#bookingName").value || "Гостья";
    const phone = document.querySelector("#bookingPhone").value || "не указан";
    const note = document.querySelector("#formNote");
    const message = [
      "Здравствуйте! Хочу записаться в LUMIÈRE Beauty Atelier.",
      `Услуга: ${service}`,
      `Мастер: ${master}`,
      `Дата: ${date}`,
      `Время: ${time}`,
      `Имя: ${name}`,
      `Телефон: ${phone}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/996555123456?text=${encodeURIComponent(message)}`;
    note.classList.remove("is-active");
    note.innerHTML = `Заявка готова: ${service}, ${master}, ${date}, ${time}. <a href="${whatsappUrl}" target="_blank" rel="noopener">Отправить в WhatsApp</a>`;
    requestAnimationFrame(() => note.classList.add("is-active"));
    window.open(whatsappUrl, "_blank", "noopener");
  });
}

function setBookingService(service) {
  const select = document.querySelector("#bookingService");
  select.value = service;
}

function setBookingMaster(master) {
  const select = document.querySelector("#bookingMaster");
  select.value = master;
}

function openMasterModal(index) {
  const [name, role, exp, text, image] = masters[index];
  const modal = document.querySelector("#masterModal");
  const content = document.querySelector("#modalContent");
  content.innerHTML = `
    <img src="${image}" alt="${name}" loading="lazy">
    <div>
      <p class="eyebrow">${role}</p>
      <h2>${name}</h2>
      <p>${text}</p>
      <ul>
        <li>${exp} опыта</li>
        <li>Консультация перед услугой</li>
        <li>Фото результата после визита</li>
      </ul>
      <a class="primary-btn" href="#booking">Записаться к мастеру</a>
    </div>
  `;
  content.querySelector("a").addEventListener("click", () => {
    setBookingMaster(name);
    modal.close();
  });
  modal.showModal();
}

function initMasterModal() {
  const modal = document.querySelector("#masterModal");
  document.querySelector(".modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}

function initMobileMenu() {
  const menu = document.querySelector("#mobileMenu");
  const toggle = document.querySelector(".menu-toggle");
  const close = document.querySelector(".menu-close");
  const links = menu.querySelectorAll("a");
  const setOpen = (open) => {
    document.body.classList.toggle("menu-open", open);
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  toggle.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => setOpen(false));
  links.forEach((link) => link.addEventListener("click", () => setOpen(false)));
  menu.addEventListener("click", (event) => {
    if (event.target === menu) setOpen(false);
  });
}

function initImageLoading(root = document) {
  root.querySelectorAll("img").forEach((image) => {
    image.classList.add("image-fade");
    if (image.complete) image.classList.add("is-loaded");
    image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
  });
}

function observeAnimatedElements(elements = document.querySelectorAll(".reveal, .stagger-item")) {
  if (reducedMotion) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = [...entry.target.parentElement.children].filter((item) => item.classList.contains("stagger-item"));
        const index = Math.max(0, siblings.indexOf(entry.target));
        entry.target.style.transitionDelay = entry.target.classList.contains("stagger-item") ? `${Math.min(index * 80, 420)}ms` : "0ms";
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  elements.forEach((element) => observer.observe(element));
}

function initHeaderAndParallax() {
  const header = document.querySelector(".site-header");
  const media = document.querySelectorAll(".parallax-media");
  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;
    header.classList.toggle("is-scrolled", scrollY > 18);

    if (!reducedMotion) {
      media.forEach((item) => {
        const speed = Number(item.dataset.parallax || 0.08);
        const mobileFactor = window.innerWidth <= 720 ? 0.34 : 1;
        const scale = item.classList.contains("hero-image") ? (window.innerWidth <= 720 ? 1.015 : 1.03) : 1.02;
        item.style.transform = `translate3d(0, ${scrollY * speed * mobileFactor}px, 0) scale(${scale})`;
      });
    }

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });

  update();
}

function initMagneticButtons() {
  if (reducedMotion || isTouchDevice) return;

  document.querySelectorAll(".primary-btn, .secondary-btn, .header-book, .price-block a, .master-card a, .booking-form button").forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.26;
      button.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });
}

function initTouchPulse() {
  if (reducedMotion || !isTouchDevice) return;

  document.querySelectorAll(".primary-btn, .secondary-btn, .header-book, .price-block a, .master-card a, .filters button, .booking-form button").forEach((item) => {
    item.addEventListener("touchstart", () => {
      item.classList.remove("touch-pulse");
      requestAnimationFrame(() => item.classList.add("touch-pulse"));
    }, { passive: true });

    item.addEventListener("animationend", () => item.classList.remove("touch-pulse"));
  });
}

function initPointerGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow || reducedMotion || isTouchDevice) return;

  window.addEventListener("pointermove", (event) => {
    glow.classList.add("is-visible");
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });

  document.addEventListener("mouseleave", () => glow.classList.remove("is-visible"));
}

function initBrandPulse() {
  document.querySelectorAll(".brand-strip span").forEach((item, index) => {
    item.style.setProperty("--i", index);
  });
}

renderServiceTabs();
renderServices();
renderMasters();
renderFilters();
renderGallery();
renderBeforeAfter();
renderReviews();
initBooking();
initMasterModal();
initMobileMenu();
initBrandPulse();
initImageLoading();
observeAnimatedElements();
initHeaderAndParallax();
initMagneticButtons();
initTouchPulse();
initPointerGlow();

requestAnimationFrame(() => {
  document.body.classList.add("is-loaded");
});
