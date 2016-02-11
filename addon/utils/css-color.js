// From SO http://stackoverflow.com/a/33184805/483616
export default function cssColor(color) {
  var ele = document.createElement('div');
  ele.style.color = color;
  return ele.style.color.split(/\s+/).join('').toLowerCase();
}
