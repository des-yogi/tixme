(function () {
  const submitBtn = document.querySelector('#agrSubmit');
  const agreementCheckbox = document.querySelector('#payAgreement');

  if (agreementCheckbox) {
    agreementCheckbox.addEventListener('change', function (e) {
      if (!e.target.checked) {
        submitBtn.disabled = true;
      } else {
        submitBtn.disabled = false;
      }
    });
  }
})()
