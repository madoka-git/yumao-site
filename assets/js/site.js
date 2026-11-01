/* 屿猫 · 全站通用交互：顶部栏阴影、返回顶部、滚动入场、翻页回到顶部 */
(function () {
  // 页面切换时统一从顶部开始，避免上一页的滚动位置带过来
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.addEventListener('load', function () {
    if (!location.hash) window.scrollTo(0, 0);
  });

  var topbar = document.querySelector('.topbar');
  var toTop = document.getElementById('toTop');

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (topbar) topbar.classList.toggle('scrolled', y > 8);
    if (toTop) toTop.classList.toggle('show', y > 480);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var items = document.querySelectorAll('.reveal');
  function revealAll() {
    items.forEach(function (el) { el.classList.add('in'); });
  }
  if (location.search.indexOf('noanim') >= 0) {
    revealAll();
    return;
  }
  if (!('IntersectionObserver' in window)) {
    revealAll();
    return;
  }
  document.documentElement.classList.add('js-anim');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
    io.observe(el);
  });
  // 兜底：脚本或观察器异常时，2.5 秒后也让内容出现
  setTimeout(revealAll, 2500);
})();
