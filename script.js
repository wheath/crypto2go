// Code goes here

$(function() {
  console.log("_dbg in jquery initialize function")
  console.log(window.web3)


  $.getJSON( "fiatsymbl_to_name.json", function( data ) {
    window.fiatsymbl_to_name = data

  });

  $.getJSON( "cryptosmbl_to_word.json", function( data ) {
    window.cryptosmbl_to_word = data

    var $dropdown = $("#choose_cryptocrncy_dropdown");
    $.each( data, function( key, val ) {
      if (key === "ETH") {
        $dropdown.append($("<option selected=\"selected\"/>").val(key).text(val));
      } else {
        $dropdown.append($("<option />").val(key).text(val));
      }
    });


  /*
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
  */
});

  $.getJSON( "crypto_to_usd.json", function( data ) {
    window.crypto_to_usd = data
  /*
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
  */
});

$.getJSON( "fiat_to_usd.json", function( data ) {
    window.fiat_to_usd = data
  /*
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
  */
});


$("#submit_btn").click(function() {
  console.log("_dbg submit button clicked")
  var crypto_symbl = $('#choose_cryptocrncy_dropdown').val();
  console.log("_dbg crypto_symbl: " + crypto_symbl)
  $('#exchngRateTable tbody').empty();

  var numUSDto1Crypto = window.crypto_to_usd[crypto_symbl]
  console.log("_dbg numUSDto1Crypto: " + numUSDto1Crypto)

  $.each(window.fiat_to_usd, function( key, val ) {
    $('#exchngRateTable tbody').append("<tr><td>"+window.fiatsymbl_to_name[key]+"</td><td>"+key+"</td><td>"+numUSDto1Crypto*val+"</td><td><button class=\"hs-modal bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-100\"  type=\"button\">Contact Your Local Agent</button></td></tr>");

  });

});

$(document).on('click',"[id$=_uma_btn]", function() {
  var id_parts = this.id.split("_");
  
  console.log("_dbg fiat symbol: "+ id_parts[0]+" id: " + this.id +  " button clicked")
  var crypto_symbl = $('#choose_cryptocrncy_dropdown').val();
   

    if (id_parts[0] === "CNY") {
      /*window.location.href = "https://localethereum.com";*/
      var web3 = window.web3
      var value =  web3.toWei("0.1", "ether")
      var toAddress = "0x2064CDC3A944847712285FF1713CAC127c46eCA6".toLowerCase()
     window.ethereum.enable().then(() => {
        web3.eth.defaultAccount = web3.eth.accounts[0]
        var data = "deadbeef"
        console.log("_dbg about to send ethereum to remote agent", data, web3.eth, value,  web3.eth.accounts[0], toAddress)
      
        web3.eth.sendTransaction({from: web3.eth.accounts[0], to:toAddress, value: value}, (err, txhash) => console.log({err, txhash} ))
      })
    } else {
      alert("Only Chinese Yuan supported at this time")      
    }
});  
  
$("#CNY_uma_btn").on("click", function() {
  console.log("_dbg  fiat button clicked")

});



})
