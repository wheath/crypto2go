const mySiema = new Siema({
  duration: 250,
  easing: 'ease-out',
  loop: true,
});

// listen for keydown event
setInterval(() => mySiema.next(), 3000);

/**
 * HSD javascript
 */

const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const title = params.get('title');
const comm = params.get('comm');

if (name) {
  u('#tcomp').removeClass('hidden');
  u('#tcomp').text(name);
}

if (title) {
  u('#tsub').removeClass('hidden');
  u('#tsub').text(title);
}

if (comm) {
  u('#tedu').text('Harvard Educated.');
}

/**
 * Modal Tiny no footer
 */

var modalTinyNoFooter = new tingle.modal({
  onClose: function() {
    console.log('close');
  },
  onOpen: function() {
    console.log('open');
  },
  beforeOpen: function() {
    console.log('before open');
  },
  beforeClose: function() {
    console.log('before close');
    return true;
  },
  cssClass: ['hsd-extra', 'class2'],
});

var btn1 = document.querySelector('.js-tingle-modal-1');
var btn2 = document.querySelector('.js-tingle-modal-2');
var btn3 = document.querySelector('.js-tingle-modal-3');
var btn4 = document.querySelector('.js-tingle-modal-4');

btn1.addEventListener('click', function() {
  pageModal1();
});
btn2.addEventListener('click', function() {
  pageModal2();
});
btn3.addEventListener('click', function() {
  pageModal3();
});
btn4.addEventListener('click', function() {
  pageModal4();
});

function pageModal1() {
  modalTinyNoFooter.open();
  modalTinyNoFooter.setContent(document.querySelector('.tingle-demo-tiny-1').innerHTML);
}
function pageModal2() {
  modalTinyNoFooter.open();
  modalTinyNoFooter.setContent(document.querySelector('.tingle-demo-tiny-2').innerHTML);
}
function pageModal3() {
  modalTinyNoFooter.open();
  modalTinyNoFooter.setContent(document.querySelector('.tingle-demo-tiny-3').innerHTML);
}
function pageModal4() {
  modalTinyNoFooter.open();
  modalTinyNoFooter.setContent(document.querySelector('.tingle-demo-tiny-4').innerHTML);
}
