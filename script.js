/* ============================================
   script.js – البنك العاطفي | Khairokom
   ============================================ */

// ── Scroll between pages ──────────────────────
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function scrollPage(dir) {
  currentPage = Math.max(0, Math.min(pages.length - 1, currentPage + dir));
  pages[currentPage].scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Active nav on scroll ──────────────────────
function updateNav() {
  const scrollY = window.scrollY + 80;
  pages.forEach(page => {
    const top = page.offsetTop;
    const bottom = top + page.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      const id = page.id;
      document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active-nav', l.getAttribute('href') === '#' + id);
      });
    }
  });
}

window.addEventListener('scroll', updateNav, { passive: true });

// ── Mood dots interaction ─────────────────────
document.querySelectorAll('.mood-dots').forEach(wrap => {
  const dots = wrap.querySelectorAll('.mood-dot');
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      dots.forEach((d, j) => {
        d.classList.toggle('active-mood', j <= i);
      });
    });
  });
});

// ── Score circles interaction ─────────────────
document.querySelectorAll('.score-circles').forEach(wrap => {
  const circles = wrap.querySelectorAll('.score-circle');
  circles.forEach((c, i) => {
    c.addEventListener('click', () => {
      circles.forEach((cc, j) => {
        cc.classList.toggle('active-score', j === i);
      });
    });
  });
});

// ── Love language radio highlight ─────────────
document.querySelectorAll('.quiz-option').forEach(opt => {
  const radio = opt.querySelector('input[type="radio"]');
  if (radio) {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.quiz-option').forEach(o => {
        o.style.background = '';
        o.style.color = '';
      });
      if (radio.checked) {
        opt.style.background = 'var(--teal-ultra)';
        opt.style.color = 'var(--teal-deep)';
        opt.style.fontWeight = '700';
      }
    });
  }
});

// ── Checklist check styling ───────────────────
document.querySelectorAll('.cl-item input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', () => {
    const label = cb.closest('.cl-item');
    if (cb.checked) {
      label.style.background = 'var(--teal-ultra)';
      label.style.textDecoration = 'line-through';
      label.style.color = 'var(--gray-400)';
    } else {
      label.style.background = '';
      label.style.textDecoration = '';
      label.style.color = '';
    }
  });
});

// ── Animate scale meter on scroll ────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.scale-fill');
      if (fill) {
        fill.style.height = fill.dataset.height || fill.style.height;
      }
      // Animate deposit meter fills
      entry.target.querySelectorAll('.meter-fill').forEach(f => {
        const w = f.style.width;
        f.style.width = '0%';
        setTimeout(() => { f.style.transition = 'width 0.8s ease'; f.style.width = w; }, 100);
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.page').forEach(p => observer.observe(p));

// ── Smooth page top on load ───────────────────
window.scrollTo({ top: 0, behavior: 'instant' });

// ── Floating coins entrance ───────────────────
window.addEventListener('load', () => {
  document.querySelectorAll('.coin').forEach((coin, i) => {
    coin.style.opacity = '0';
    setTimeout(() => {
      coin.style.transition = 'opacity 0.5s ease';
      coin.style.opacity = '1';
    }, 300 + i * 150);
  });
});

console.log('%c💚 البنك العاطفي | خيركم', 'font-size:18px; color:#1DBFB0; font-weight:bold;');
console.log('%cKhairokom Digital Workbook – Ready to Print', 'font-size:12px; color:#888;');
