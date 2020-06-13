const ready = function () {
  const button = document.querySelector('btnLoadMore');

  button.addEventListener('click', event => {
    console.log(event.target);
    if (event.target.hasClass('active') || event.target.hasClass('success')) {
      return false;
    }
    event.target.addClass('active');
    setTimeout(function () {
      event.target.addClass('loader');
    }, 125);
    setTimeout(function () {
      event.target.removeClass('loader active');
      event.target.text('Success');
      event.target.addClass('success animated pulse');
    }, 1600);
    setTimeout(function () {
      event.target.text('Go');
      event.target.removeClass('success animated pulse');
      event.target.blur();
    }, 2900);
  });
};
