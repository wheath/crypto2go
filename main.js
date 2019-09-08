console.log("ready");
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

$( document ).ready(function() {
    console.log( "ready!" );


  $(".content").on('click', ".hs-modal", function () {
    var crypto_symbl = $('#choose_cryptocrncy_dropdown').val();
    var id_parts = this.id.split("_");
    console.log("_dbg in pageModal1 click id_parts[0]: ", id_parts[0])
    if (crypto_symbl === "ETH") {
      if (id_parts[0] === "CNY") {
        pageModal1();
      }
    }
  });


});


function pageModal1() {
  modalTinyNoFooter.open();
  modalTinyNoFooter.setContent(document.querySelector('.tingle-demo-tiny-1').innerHTML);
}
