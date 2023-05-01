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

  // Select a random image
  img.src = images[Math.floor(Math.random() *(3))];

  // Set the position of the image element to a random location using CSS
  img.style.position = 'relative';
  img.style.width = "7%"

  // Position an image randomly within element
  img.style.left = Math.floor(Math.random() *(10)) + '%';
  img.style.top = 10 + Math.floor(Math.random() *(50)) + '%';
  // Add a click event listener to the image
  img.addEventListener('click', function() {
    this.style.visibility = 'hidden';

    console.log(this.src);

    // Change the score based on the value of money 
    if (this.src.includes("img/moneybag.png")){
      s = s + 100;
    }
    else if (this.src.includes("img/dollar.png")){
      s = s + 10;
    }
    else{
      s = s + 1;
    }

    // Inject text after all images have been clicked
    num_clicked += 1; 

    if (num_clicked == 13){
        signal.textContent = "You stumbled on $"+ s + " dollars. Refresh the page to see what luck gets you next!"
        signal.style.display = 'block';
    }
  });

  // Add the image element to the container element
  container.appendChild(img);
}
