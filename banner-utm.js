

const utmCookie = readCookie('utm_banner');
console.log(utmCookie, 'COOKIE');

// URL PARAMETERS
function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
}

const campaign = getUrlParameter('utm_campaign');

/*************** UTM ANNOUNCEMENT BAR *************/
console.log(campaign);

function regex_escape(str) {
  if (str) {
    console.log(str, 'STR');
    return str.replace(
      new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'),
      '\\$&'
    );
  }
}



if ($('.utm-announcement-bar').length) {

   if(utmCookie) {
    $(`.utm-announcement-bar[data-ids="${utmCookie}"]`).show();
   } else {  
  $('.utm-announcement-bar').each(function () {
    const banner = $(this); 
    const utms = banner.data('ids'); 
    console.log(utms, 'UTMS');
    let text = campaign;
    let pattern = new RegExp(
      '\\b(?:' + regex_escape(utms).split(',').join('|') + ')\\b'
    );
    let result = pattern.test(text);
    console.log(pattern, 'PATTERN');
    console.log(result, 'RESULT');
    console.log(regex_escape(campaign), 'campaign');

    if (result) {
      console.log(utms);
      banner.show();
      createCookie('utm_banner', utms, 7);
    } else {
      console.log('no match');
    }
  });

  if (testUTMs() == true) {
    $('.utm-announcement-bar[data-default]').show();
  }

  function testUTMs() {
    console.log('TEST UTMS');
    var valid = true;
    $('.utm-announcement-bar').each(function () {
      var banner = $(this);
      var utms = banner.data('ids');
      let text = campaign;
      let pattern = new RegExp('\\b(?:' + regex_escape(utms).split(",").join("|") + ')\\b');
      let result = pattern.test(text);
      console.log(pattern);
      console.log(result, 'RESULT');
      console.log(regex_escape(campaign), 'campaign');

      if (result) {
        return (valid = false);
      }
    });

    return valid;
  }
}
}




// COOKIES SET UP
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

// KLAVIYO SPECIFIC


$('[data-klav-id]').on('click', function(){
const klavID = $(this).data('klav-id');
console.log(klavID);
window._klOnsite = window._klOnsite || [];
window._klOnsite.push(['openForm', klavID ]);
});


// REVEAL TAB
 
    function revealTab() {

       const tabOffset = windowHeight();
        const tab = $('.utm-tab');

       $('body').addClass('fixed-header');
       $(window).scroll(debounce(function () {
          checkPosition(tabOffset);
       }, 1));

       function checkPosition(tabOffset) { 
          scroll = $(window).scrollTop();
          // console.log(tabOffset,'offset');
          // console.log(scroll, 'Scroll');
          if (scroll > tabOffset) {
             tab.addClass('active'); 
          } else {
             tab.removeClass('active'); 
          }
       }
    }
    $(window).resize(debounce(function () {
       revealTab();
    }, 50));
    $(window).on('load', function () {
       revealTab();
    });
 