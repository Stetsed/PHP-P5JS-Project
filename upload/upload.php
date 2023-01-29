<?php
if(isset($_POST["submit"])) {
  // Set the target directory for the uploads, set the name, the exension and calculate the hash and combine this together into the target file location.
  $target_dir = "uploads/";
  $file_name = basename($_FILES["fileToUpload"]["name"]);
  $file_extension = pathinfo($file_name, PATHINFO_EXTENSION);
  $file_name_hash = hash("sha256", $file_name);
  $target_file = $target_dir . $file_name_hash.'.'.$file_extension;

  // Reject any file that isn't a .jpeg .jpg .png or .mp4 to prevent people from uploading php shell scripts which would allow for remote code execution exploit
  if ($file_extension !== "jpeg" && $file_extension !== "jpg" && $file_extension !== "png" && $file_extension !== "mp4") {
    echo "Sorry, only jpeg, jpg, png and mp4 files are allowed.";
    exit;
  }
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    // Set the cookie values for the file name hash and the file extension and make them last for 30 DAYS.
    setcookie("file_name_hash", $file_name_hash, time() + (86400 * 30), "/");
    setcookie("file_extension", $file_extension, time() + (86400 * 30), "/");
    // Send them to the correct location, this being blockify-image if it's an image extension and blockify-video if it's a video extension 
    if ($file_extension == "jpeg" || $file_extension == "jpg" || $file_extension == "png") {
      header("Location: /blockify-image/index.php");
    } else if ($file_extension == "mp4") {
      header("Location: /blockify-video/index.php");
    } else {
      header("Location: /index.html");
    }
    exit;
    // Gives an error if there was a problem uploading the file
  } else {
      echo "Sorry, there was an error uploading your file.";
  }
}
?>
