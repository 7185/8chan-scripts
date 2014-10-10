/**
* This script adds a Google link and an iqdb link on each image.
*/

function addSearchEngine(el) {
  var tnurl = $(el).closest("div").find("img").prop('src');
  $(el).append("&nbsp;");
  $('<a/>', {
    href: "https://www.google.com/searchbyimage?image_url="+tnurl,
    title: 'Google',
    target: '_blank',
    text: '🔍',
    style: 'text-decoration:none'
  }).appendTo(el);
  $(el).append("&nbsp;");
  $('<a/>', {
    href: "http://iqdb.org/?url="+tnurl,
    title: 'iqdb',
    target: '_blank',
    text: '🔍',
    style: 'text-decoration:none'
  }).appendTo(el);
}

$("p.fileinfo").find(".unimportant").each(function(k, v) {
  addSearchEngine(v);
});

$(document).on('new_post', function(e, post) {
  $(post).find(".unimportant").each(function(k, v) {
    addSearchEngine(v);
  });
});
