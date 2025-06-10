function increase() {
    let counter = document.getElementById('counter');
    let current = +counter.textContent; 
    counter.textContent = current + 1;
  }

  function decrease() {
    let counter = document.getElementById('counter');
    let current = +counter.textContent; 
    counter.textContent = current - 1;
  }

  document.getElementById('increase').onclick = increase;
  document.getElementById('decrease').onclick = decrease;