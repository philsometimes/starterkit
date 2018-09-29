// JS SPECIFIC TO THIS CUSTOM THEME GOES HERE
var title = document.querySelector("#boxes-box-site_info .boxes-box-content").innerHTML;
console.log(title);
// document.querySelector("#boxes-box-site_info .boxes-box-content").innerHTML = '<h1><a href="/alisonsimmons">Alison Simmons</a></h1><p>Samuel H. Wolcott Professor of Philosophy</p><p>Harvard College Professor (2011-2016)</p>';
document.querySelector("#boxes-box-site_info .boxes-box-content").innerHTML = '<div style="display: inline-block;"><h1><a href="/alisonsimmons">Alison Simmons</a></h1></div><div style="display: inline-block;"><p>Samuel H. Wolcott Professor of Philosophy</p><p>Harvard College Professor (2011-2016)</p></div>';
