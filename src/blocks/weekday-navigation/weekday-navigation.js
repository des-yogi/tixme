(function () {
  const container = document.getElementById('weekday');
  if (!container) return;

  const weekday = tns({
    container: container,
    //autoplay: true
    items: 3,
    slideBy: 'page',
    autoWidth: true,
    gutter: 24,
    controls: false,
    nav: false,
    loop: false,
    mouseDrag: true,
    startIndex: 0, // 0 - default
    //center: true,
    responsive: {
      360: {
        gutter: 24,
        items: 3
      },
      768: {
        gutter: 15,
        items: 7
      },
      992: {
        gutter: 32,
        items: 7
      },
      1280: {
        gutter: 75,
        items: 7
      }
    }
  });
})()
