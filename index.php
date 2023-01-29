<!DOCTYPE html>
<html>
  <head>
    <title>Blockify</title>
    <link rel="stylesheet" type="text/css" href="main.css">
  </head>
  <body>
    <h1>Blockify</h1>
    <button class="button" onclick="window.location.href='/upload/index-upload.php'">Upload</button>
    <button class="button" onclick="window.location.href='/blockify-image/index.php'">Blockify Image</button>
    <button class="button" onclick="window.location.href='/blockify-video/index.php'">Blockify Video</button>

    <h1>Details</h1>
    <p>This website let's you upload files(Note: Currently video does not work using replit as you need to modify the php.ini to allow for larger files, but the code is there), and then it will redirect you to either blockify image if it matches the image extensions or blockify video if it matches the .mp4 extension. It also rejects any file which isn't a jpeg jpg png or mp4 file for security to avoid an RCE</p>

    <p>The upload is a simple code done in PHP it uploads the file and then stores the extension and the filename(which is hashed to prevent brute forcing) in a cookie, and then the blockify image and blockify video use there respective JS code using the p5js library to blockify the images by taking a 2x2 block of pixels and then averages the color and puts it back. Causing a blockified appearance</p>

    <p>Note: If you do not want to submit an image just click on blockified Image or Blockify Video as there are sample files in the code.</p>
  </body>
</html>
