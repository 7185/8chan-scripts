/**
* This script adds a direct save link on each media,
* keeping its original filename on save window.
*/

function addSaveLink(el) {
  var title = $(el).attr("title");
  if (!title) title = $(el).text();
  $(el).append("&nbsp;");
  $('<a/>', {
    href: $(el).closest("div").find("a").not(".hide-image-link").attr("href"),
    title: 'Save image',
    text: '💾',
    style: 'text-decoration:none',
    download: title
  }).appendTo(el);
}

$("p.fileinfo").find(".postfilename").each(function(k, v) {
  addSaveLink(v);
});

$(document).on('new_post', function(e, post) {
  $(post).find(".postfilename").each(function(k, v) {
    addSaveLink(v);
  });
});
