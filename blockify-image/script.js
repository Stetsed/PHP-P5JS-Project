// Regiser the getCookie function to be able to retrieve the cookies
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
  else return '';
}

// Register the img variable then run the preload function which first retrieves the cookies and checks if they are occupied, if they aren't it uses a placeholder image and then loads this img using the loadImage function.
let img;
function preload() {
  var fileExt = getCookie("file_extension");
  var fileHash = getCookie("file_name_hash");
  if(fileExt && fileHash){
    var imgFile = "/upload/uploads/" + fileHash + "." + fileExt;
  }else{
    var imgFile = "image.png";
  }
  img = loadImage(imgFile);
}

// Using the setup function create a canvas that is equal to the width and height and then run the draw function on the img
function setup() {
  createCanvas(img.width, img.height);
  
  draw(img);

  image(img, 0, 0);
}


function draw() {
  // Load the pixels into memery
  loadPixels();
  // A double for loop which iterates over the 2x2 block of pixels by doing += to 2.
  for (var y = 0; y < height; y += 2) {
      for (var x = 0; x < width; x += 2) {
        var index = (x + y * width)*4;
        // Get the values for each of the pixels in the 2x2 blocks and store them into a variable
        var r1 = pixels[index+0];
        var g1 = pixels[index+1];
        var b1 = pixels[index+2];
        var a1 = pixels[index+3];
        var r2 = pixels[index+(4*width)+0];
        var g2 = pixels[index+(4*width)+1];
        var b2 = pixels[index+(4*width)+2];
        var a2 = pixels[index+(4*width)+3];
        var r3 = pixels[index+4];
        var g3 = pixels[index+5];
        var b3 = pixels[index+6];
        var a3 = pixels[index+7] ;  
        var r4 = pixels[index+(4*width)+4];
        var g4 = pixels[index+(4*width)+5];
        var b4 = pixels[index+(4*width)+6];
        var a4 = pixels[index+(4*width)+7];

        // Average each of the sub-colors and the alpha channel.
        var ar = (r1 + r2 + r3 + r4) / 4;
        var ag = (g1 + g2 + g3 + g4) / 4;
        var ab = (b1 + b2 + b3 + b4) / 4;
        var aa = (a1 + a2 + a3 + a4) / 4;

        // Place the pixels back with the color we averaged out
        pixels[index+0] = ar;
        pixels[index+1] = ag;
        pixels[index+2] = ab;
        pixels[index+3] = aa;
        pixels[index+4] = ar;
        pixels[index+5] = ag;
        pixels[index+6] = ab;
        pixels[index+7] = aa;
        pixels[index+(4*width)+0] = ar;
        pixels[index+(4*width)+1] = ag;
        pixels[index+(4*width)+2] = ab;
        pixels[index+(4*width)+3] = aa;
        pixels[index+(4*width)+4] = ar;
        pixels[index+(4*width)+5] = ag;
        pixels[index+(4*width)+6] = ab;
        pixels[index+(4*width)+7] = aa;
      }
    }
  // Updating the pixels
  updatePixels();
}