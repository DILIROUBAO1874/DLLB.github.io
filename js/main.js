// === Project Data ===
const projects = [
  {
    name: { zh: '云上太阳', en: 'THE SUN ABOVE THE CLOUDS' },
    location: { zh: '甘孜，四川', en: 'Ganzi, Sichuan' },
    scale: '3,100 m²',
    year: 2025,
    category: '文旅',
    description: { zh: '"云上太阳"以太阳意象为核心，寓意信仰如太阳般始终照耀，永不改变。项目以藏族文化为核心，融合现代与传统建筑语言，在甘孜地区打造一个兼具精神内涵与现代功能的文化空间。', en: '"The Sun Above the Clouds" uses the sun as its core imagery, symbolizing unwavering faith. Rooted in Tibetan culture, the project blends modern and traditional architectural language to create a cultural space in Ganzi.' }
  },
  {
    name: { zh: '布尔津童话边城文旅商业街区', en: 'BURQIN FAIRY-TALE BORDER TOWN' },
    location: { zh: '新疆布尔津', en: 'Burqin, Xinjiang' },
    scale: '16,000 m²',
    year: 2025,
    category: '公建',
    description: { zh: '以"童话边城"为设计概念，融合哈萨克族文化元素与现代商业空间设计，打造具有地域特色的文旅商业街区，提升城市文化形象与旅游吸引力。', en: 'With a "fairy-tale border town" concept, the project integrates Kazakh cultural elements with modern commercial design to create a culturally distinctive tourism district.' }
  },
  {
    name: { zh: '林周县甘旦曲果镇旅游栈道', en: 'LINZHOU COUNTY GANDAN QUGUO TOWN TOURISM BOARDWALK' },
    location: { zh: '拉萨，西藏', en: 'Lhasa, Tibet' },
    scale: '2,200 m²',
    year: 2024,
    category: '景观',
    description: { zh: '以藏式元素为灵感，打造文化展示与自然景观相融合的旅游栈道系统。设计尊重原有地形地貌，通过景观节点串联沿线自然与人文资源，为游客提供沉浸式的文化体验。', en: 'Inspired by Tibetan elements, the boardwalk system integrates cultural display with natural landscapes, respecting the original terrain while connecting scenic and cultural resources along the route.' }
  },
  {
    name: { zh: '成都百工堰中铁黑龙滩项目', en: 'THE LAKEFRONT COMMERCIAL VILLAGE IN CHENGDU' },
    location: { zh: '成都，四川', en: 'Chengdu, Sichuan' },
    scale: '6,000 m²',
    year: 2023,
    category: '公建',
    description: { zh: '以"川西林盘"为设计灵感，打造商办综合体。充分尊重场地现状，最大限度保护林盘原有的空间肌理与生态环境，力求实现开发与自然的和谐共生。', en: 'Inspired by Western Sichuan "Linpan" settlements, the project creates a commercial complex that respects and preserves the existing spatial texture and ecological environment.' }
  },
  {
    name: { zh: '墟里·大峡谷温泉康养项目', en: 'XULI CANYON HOT SPRING WELLNESS RESORT' },
    location: { zh: '拉萨，西藏', en: 'Lhasa, Tibet' },
    scale: '4,300 m²',
    year: 2023,
    category: '文旅',
    description: { zh: '设计摒弃对"舒适"的刻板定义，回归自然与身体的真实对话。项目充分利用场地独特的峡谷地形与温泉资源，营造与自然深度连接的康养体验。', en: 'The design rejects conventional definitions of comfort, returning to an authentic dialogue between nature and the body, utilizing the unique canyon terrain and hot spring resources.' }
  },
  {
    name: { zh: '松赞百巴帐篷营地', en: 'SONGSAM BARPA TENT CAMP' },
    location: { zh: '林芝，西藏', en: 'Nyingchi, Tibet' },
    scale: '3,500 m²',
    year: 2021,
    category: '文旅',
    description: { zh: '帐篷在藏地文化中象征着家的温暖与适应力。设计以"家"为核心意象，将传统帐篷文化与现代营地功能相结合，在林芝自然环境中营造温馨而富有文化内涵的住宿体验。', en: 'Tents symbolize the warmth and resilience of home in Tibetan culture. The design combines traditional tent culture with modern camp functionality in the natural environment of Nyingchi.' }
  },
  {
    name: { zh: '康藤·格拉丹帐篷营地', en: 'KORCHIN · GELADAN TENT CAMP' },
    location: { zh: '丽江，云南', en: 'Lijiang, Yunnan' },
    scale: '2,500 m²',
    year: 2020,
    category: '文旅',
    description: { zh: '原始设计来自英国，后续由工作室进行设计更新与落地管控，目前项目仍在持续服务中。项目位于丽江格拉丹草原，在高海拔环境中实现建筑与自然的和谐共存。', en: 'Originally designed in the UK, the studio took over design updates and construction management. Located on the Geladang Grassland in Lijiang, achieving harmony between architecture and nature at high altitude.' }
  }
];

// === DOM References ===
const logo = document.getElementById('logo');
const nav = document.getElementById('nav');
const projectSections = document.querySelectorAll('.project-section');

// === Logo Animation ===
setTimeout(() => {
  logo.classList.add('visible');
}, 800);

logo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Navigation Scroll Effect ===
let lastScrollY = 0;

function handleNavScroll() {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  lastScrollY = scrollY;
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// === Typewriter Effect ===
function typewriter(element, text, speed = 60) {
  return new Promise(resolve => {
    element.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

// === Project Section Scroll Observer ===
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      const section = entry.target;
      const index = parseInt(section.dataset.project);
      const project = projects[index];

      if (!section.dataset.animated) {
        section.dataset.animated = 'true';
        animateProject(section, project);
      }
    }
  });
}, { threshold: 0.5 });

projectSections.forEach(section => {
  projectObserver.observe(section);
});

async function animateProject(section, project) {
  const nameZh = section.querySelector('.project-name-zh');
  const nameEn = section.querySelector('.project-name-en');
  const meta = section.querySelector('.project-meta');
  const image = section.querySelector('.project-layer-image');

  // Layer 2: Typewriter effect
  await typewriter(nameZh, project.name.zh, 80);
  await typewriter(nameEn, project.name.en, 40);
  await typewriter(meta, `${project.location.zh}  ·  ${project.scale}  ·  ${project.year}`, 30);

  // Layer 3: Image fade in after typewriter completes
  setTimeout(() => {
    image.classList.add('visible');
  }, 300);
}

// === Project Click -> Modal ===
projectSections.forEach(section => {
  section.addEventListener('click', (e) => {
    if (e.target.closest('.project-overlay')) return;
    const index = parseInt(section.dataset.project);
    openProjectModal(section, projects[index]);
  });
});

function openProjectModal(section, project) {
  const overlay = section.querySelector('.project-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal(section) {
  const overlay = section.querySelector('.project-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal events
document.querySelectorAll('.project-close-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const section = btn.closest('.project-section');
    closeProjectModal(section);
  });
});

document.querySelectorAll('.project-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      const section = overlay.closest('.project-section');
      closeProjectModal(section);
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.project-overlay.active').forEach(overlay => {
      const section = overlay.closest('.project-section');
      closeProjectModal(section);
    });
  }
});

// === Scroll Animations (About & Contact) ===
const scrollAnimElements = document.querySelectorAll(
  '.about-title, .about-text, .about-text-en, .about-member, .contact-title, .contact-title-en, .contact-info'
);

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

scrollAnimElements.forEach(el => {
  scrollObserver.observe(el);
});
