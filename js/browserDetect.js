// Opera 8.0+
const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
const isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
  return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
const isIE = /*@cc_on!@*/ false || !!document.documentMode;

// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
const isChrome = !!window.chrome;

// Blink engine detection
const isBlink = (isChrome || isOpera) && !!window.CSS;

//YANDEX Browser
const isYandex = (navigator.userAgent.indexOf("YaBrowser") != -1);


//to change button name according to browser (eg. Add to Chrome)
if (isChrome) {

  // console.log("Chrome");
  var x = document.querySelector('.add-chrome').innerHTML = '<span> <i aria-hidden="true" class="fas fa-arrow-alt-circle-down"></i></span>' + '<span> &nbsp; Add to Chrome</span>';

} else if (isFirefox) {

  // console.log("Firefox");
  var x = document.querySelector('.add-chrome').innerHTML = '<span><i aria-hidden="true" class="fas fa-arrow-alt-circle-down"></i></span>' + '<span>&nbsp; Add to Firefox</span>';


} else if (!isChrome && !isFirefox && !isIE && !isEdge && !isOpera && !isYandex) {

  //  console.log("Safari");
  var x = document.querySelector('.add-chrome').innerHTML = '<span><i aria-hidden="true" class="fas fa-arrow-alt-circle-down"></i></span>' + '<span>&nbsp; Add to Safari</span>';


}



//to open respective browsers download page
var x, i;
x = document.querySelectorAll(".add-chrome");
for (i = 0; i < x.length; i++) {
  x[i].onclick = function () {

    if (isChrome) {

      // console.log("Chrome");
      window.open('https://chrome.google.com/webstore/detail/opentabs/igeeighenacaciapkehcacnojlegbnpa', '_blank');


    } else if (isFirefox) {

      // console.log("Firefox");
      window.open('https://addons.mozilla.org/en-US/firefox/addon/opentabs_org/', '_blank');


    } else if (!isChrome && !isFirefox && !isIE && !isEdge && !isOpera && !isYandex) {

      //  console.log("Safari");
      window.open('https://opentabs.org/blog/How-to-install-Ope-Tabs-on-Safari.php', '_blank');

    }

  }

}