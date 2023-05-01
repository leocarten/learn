function check() {
    var copyText = document.getElementById("id_email");
    navigator.clipboard.writeText(copyText.value);
    var address = String(copyText.value);
    if (address.includes('SAU3') || address.includes('sau3') ){
        alert("Please don't use an email address containing 'sau3' or 'SAU3'. Thank you.")
      }
  }