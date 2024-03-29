(function(){
  //if (!autosize()) return;
  autosize(document.querySelectorAll('textarea'));

  // переключение видимости поля пароля
  const eyeBtns = document.querySelectorAll('.field-text__eye');
  if(!eyeBtns) return;

  const toggleVisibility = function (target) {
    if (target.nextElementSibling.getAttribute('type') === 'password') {
      target.classList.add('show');
      target.nextElementSibling.setAttribute('type', 'text');
    } else {
      target.classList.remove('show');
      target.nextElementSibling.setAttribute('type', 'password');
    }
    return false;
  };

  Array.prototype.forEach.call(eyeBtns, function (btn) {
    btn.addEventListener('click', function (e) {
      toggleVisibility(e.target);
    });
  });
})();
