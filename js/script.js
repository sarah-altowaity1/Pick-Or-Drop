var images = ['img/coin.png', 'img/dollar.png', 'img/moneybag.png'];
var container = document.getElementById('image-container');
var rect = container.getBoundingClientRect();
var score =  document.getElementById('score');
var signal =  document.getElementById('signal');
var s = 0
var num_clicked = 0 
for (var i = 0; i < 13; i++) {
  // Create a new image element

  var img = document.createElement('img');

  // Set the src attribute to the corresponding URL from the images array
  img.src = images[Math.floor(Math.random() *(3))];

  // Set the position of the image element to a random location using CSS
  img.style.position = 'relative';
  img.style.width = "7%"

  // Calculate a random top position within the bounds of the display window
  // var maxHeight = rect.height + img.height;
  // var randomTop = rect.top + Math.floor(Math.random() *(rect.bottom - rect.top + 1));
  // img.style.top = randomTop + 'px';
  img.style.left = Math.floor(Math.random() *(10)) + '%';
  // // Calculate a random left position within the bounds of the display window
  // var maxWidth = rect.width - img.width;
  // var randomLeft = rect.left + Math.floor(Math.random() * (rect.right - rect.left + 1));
  // img.style.left = randomLeft + 'px';
  img.style.top = 10 + Math.floor(Math.random() *(50)) + '%';
  // Add a click event listener to the image
  img.addEventListener('click', function() {
    this.style.visibility = 'hidden';

    console.log(this.src);
    if (this.src.includes("img/moneybag.png")){
      s = s + 100;
    }
    else if (this.src.includes("img/dollar.png")){
      s = s + 10;
    }
    else{
      s = s + 1;
    }
    // score.textContent = "$$$: " + s; 
    num_clicked += 1; 

    if (num_clicked == 13){
        signal.textContent = "You stumbled on $"+ s + " dollars. Refresh the page to see what luck gets you next!"
        signal.style.display = 'block';
    }
  });

  // Add the image element to the container element
  container.appendChild(img);
}
