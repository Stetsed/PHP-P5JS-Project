function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
  else return '';
}

// Register the video variable then run the preload function which first retrieves the cookies and checks if they are occupied, if they aren't it uses a placeholder image and then loads this video using the createVideo function.
let video;
function preload() {
  var fileExt = getCookie("file_extension");
  var fileHash = getCookie("file_name_hash");
  if(fileExt && fileHash){
    var videoFile = "/upload/uploads/" + fileHash + "." + fileExt;
  }else{
    var videoFile = "video.mp4";
  }
  video = createVideo(videoFile);
}

// Register a canvas and make the video we loaded loop and hide it from the screen and set the pixel density to 1.
function setup() {
  createCanvas(1920, 1080);
  video.loop();
  video.hide();
  pixelDensity(1);
}

function draw() {
  // Load the video's pixels into memory and load the canvas pixels into memory.
  video.loadPixels();
  loadPixels();
  // A double for loop which iterates over the 2x2 block of pixels by doing += to 2.
  for (var y = 0; y < video.height; y += 2) {
      for (var x = 0; x < video.width; x += 2) {
        var index = (x + y * video.width)*4;
        // Grab the video's pixels for our 2x2 block of pixels and store them in a variable
        var r1 = video.pixels[index+0];
        var g1 = video.pixels[index+1];
        var b1 = video.pixels[index+2];
        var a1 = video.pixels[index+3];
        var r2 = video.pixels[index+(4*width)+0];
        var g2 = video.pixels[index+(4*width)+1];
        var b2 = video.pixels[index+(4*width)+2];
        var a2 = video.pixels[index+(4*width)+3];
        var r3 = video.pixels[index+4];
        var g3 = video.pixels[index+5];
        var b3 = video.pixels[index+6];
        var a3 = video.pixels[index+7] ;  
        var r4 = video.pixels[index+(4*width)+4];
        var g4 = video.pixels[index+(4*width)+5];
        var b4 = video.pixels[index+(4*width)+6];
        var a4 = video.pixels[index+(4*width)+7];

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
  // Update the pixels
  updatePixels();
}