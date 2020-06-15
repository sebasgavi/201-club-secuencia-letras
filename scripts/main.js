// cual es la palabra
// cuantas letras tiene esa palabra
// cuánto tiempo se demora toda la animación
// color random
// opacidad en el hover o cuando ingresa por primera vez

function randomBetween (min, max) {
  var r = Math.random() * (max - min);
  var res = min + r;
  return Math.floor(res);
}

var palette = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#4caf50',
  '#ff9800',
  '#00bcd4',
];

function interpolateChars (elem) {
  var initial = elem.innerText.split('');
  
  var counter = 0;
  var maxCount = 15;
  var id = setInterval(function() {
    var copy = [];
    counter++;

    initial.slice(0, counter).forEach(function (char, index) {
      var r = randomBetween(60, 93);
      copy[index] = String.fromCharCode(r);
    });

    var max = counter - (maxCount - copy.length);
    copy.slice(0, max).forEach(function(char, i){
      copy[i] = initial[i];
    });

    console.log(max);
    copy = copy.map(function(char, i) {
      if(i < max) return char;
      var r = Math.random() * palette.length;
      var color = palette[Math.floor(r)];
      return '<span style="color:' + color + '">' + char + '</span>';
    });

    elem.innerHTML = copy.join('');

    if(counter >= maxCount){
      clearInterval(id);
    }
  }, 50);
}

window.addEventListener('click', function(){
  var elems = document.querySelectorAll('p');
  elems.forEach(function (elem, index) {
    elem.setAttribute('hidden', true);
    setTimeout(function(){
      interpolateChars(elem);
      elem.removeAttribute('hidden');
    }, 300 * index);
  });
});
