/**
* Love your custom CSS? Hate every other theme?
* Can't read anything on /cute/ or /css/?
* This script is exactly what you need.
* It removes all stylesheets except style.css
* Now YOU make the rules!
*/

var s = document.getElementsByTagName("link");
for (var i = 0; i < s.length; i++) {
  if (s[i].getAttribute("href") !== "/stylesheets/style.css" &&
      s[i].getAttribute("href") !== "/static/flags/flags.css")
    s[i].parentNode.removeChild(s[i]);
}
