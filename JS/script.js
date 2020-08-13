function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  var source_count = document.getElementById("source").getElementsByTagName("img").length
  var target1_count = document.getElementById("target1").getElementsByTagName("img").length
  var target2_count = document.getElementById("target2").getElementsByTagName("img").length
  document.getElementById("status").innerHTML = "Number of images in source div: " + 
  source_count + "<br> Number of images in target1 div: " + target1_count +
  "<br>Number of images in target2 div: " + target2_count;
}
