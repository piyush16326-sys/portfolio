// FILTER
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.masonry-item');

filters.forEach(btn=>{
btn.onclick=()=>{
filters.forEach(b=>b.classList.remove('bg-black','text-white'));
btn.classList.add('bg-black','text-white');

let f=btn.dataset.filter;

items.forEach(item=>{
item.style.display = (f==='all'||item.classList.contains(f))?'block':'none';
});
}
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){
let h = window.innerHeight;

reveals.forEach(el=>{
if(el.getBoundingClientRect().top < h-100){
el.classList.add('active');
}
});
}
window.addEventListener('scroll',revealOnScroll);
revealOnScroll();



// BOOK SCROLL ROTATION
const book = document.getElementById('book');
window.addEventListener('scroll', () => {
    if(book){
        let s = window.scrollY;
        book.style.transform = `rotateY(${20 - s*0.05}deg) rotateX(${10 - s*0.03}deg)`;
    }
});

// PACKAGING ROTATION
const box = document.getElementById('box');
window.addEventListener('scroll', () => {
    if(box){
        let s = window.scrollY;
        box.style.transform = `rotateY(${s*0.3}deg) rotateX(${s*0.1}deg)`;
    }
});

// NAVBAR SCROLL EFFECT
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
if(window.scrollY > 50){
    navbar.classList.add('nav-scrolled');
} else {
    navbar.classList.remove('nav-scrolled');
}
});

const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
    }
});

navLinks.forEach(link => {
    link.classList.remove("text-black", "font-semibold");
    if (link.getAttribute("href") === "#" + current) {
        link.classList.add("text-black", "font-semibold");
    }
});
});

document.addEventListener("DOMContentLoaded", () => {

  // MOBILE MENU TOGGLE
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if(menuBtn && mobileMenu){
    menuBtn.onclick = () => {
      mobileMenu.classList.toggle("hidden");
    };
  }

  // CLOSE MENU ON CLICK
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.onclick = () => mobileMenu.classList.add("hidden");
  });

  // AUTO HIDE NAVBAR
  let lastScroll = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll && currentScroll > 80){
        navbar.classList.add("nav-hidden");
    } else {
        navbar.classList.remove("nav-hidden");
    }

    lastScroll = currentScroll;
  });

  // SCROLL STYLE
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
  });

  // MAGNET EFFECT 🧲
  const magnets = document.querySelectorAll(".magnet");

  magnets.forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0,0)";
    });
  });

});

document.addEventListener('DOMContentLoaded', () => {
    const data = {
        projects: [
            { id: 'p1', name: "Craft AI", desc: "Building generative UI systems with React.", color: "#8b5cf6" },
            { id: 'p2', name: "Visuals", desc: "High-fidelity motion studies.", color: "#ec4899" }
        ],
        achievements: [
            { id: 'a1', name: "SOTD 2026", desc: "Recognized for experimental UI design.", color: "#ffc107" }
        ],
        snapshots: [
            { id: 's1', name: "Tokyo_23", desc: "Photography from Shibuya.", color: "#95e1d3" }
        ]
    };

    let activeFolderId = null;

    window.changeCategory = function(key, el) {
        closeDrawer();

        const grid = document.getElementById('folderGrid');
        if (!grid) return;

        // Reset sidebar UI
        document.querySelectorAll('.nav-item').forEach(n => {
            n.classList.remove('active', 'bg-purple-100', 'text-purple-600', 'font-bold');
        });
        if (el) el.classList.add('active', 'bg-purple-100', 'text-purple-600', 'font-bold');

        grid.innerHTML = '';

        // Determine which items to show
        let itemsToShow = [];
        if (key === 'quick_access') {
            // Aggregate all folders from all categories
            itemsToShow = Object.values(data).flat();
        } else {
            itemsToShow = data[key] || [];
        }

        // Build folder grid
        itemsToShow.forEach(item => {
            const f = document.createElement('div');
            f.className = 'folder flex flex-col items-center p-4 rounded-xl transition-all hover:bg-white border border-transparent cursor-pointer group';
            f.id = `folder-${item.id}`;
            
            f.innerHTML = `
                <div class="w-14 h-10 mb-2 relative shadow-sm transition-transform group-hover:scale-105" 
                     style="background:${item.color}; border-radius: 2px 6px 2px 2px;">
                    <div style="position:absolute; top:-6px; left:0; width:20px; height:6px; background:inherit; border-radius:2px 2px 0 0;"></div>
                </div>
                <span class="text-[11px] font-semibold text-gray-700 text-center uppercase tracking-tight">${item.name}</span>
            `;
            
            f.onclick = (e) => {
                e.stopPropagation();
                if (activeFolderId === item.id) {
                    closeDrawer();
                } else {
                    activeFolderId = item.id;
                    document.getElementById('dTitle').innerText = item.name;
                    document.getElementById('dDesc').innerText = item.desc;
                    document.getElementById('drawer').classList.add('open');
                    document.querySelectorAll('.folder').forEach(fol => fol.classList.remove('active-folder'));
                    f.classList.add('active-folder');
                }
            };
            grid.appendChild(f);
        });
    };

    window.closeDrawer = function() {
        activeFolderId = null; 
        const drawer = document.getElementById('drawer');
        if (drawer) drawer.classList.remove('open');
        document.querySelectorAll('.folder').forEach(f => f.classList.remove('active-folder'));
    };

    // Initialize with Quick Access by default
    const defaultNav = document.querySelector('.nav-item');
    if (defaultNav) changeCategory('quick_access', defaultNav);
});

