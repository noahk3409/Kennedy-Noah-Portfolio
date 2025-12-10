<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact — Noah Kennedy</title>
  <link rel="stylesheet" href="css/main.css" />
  <link rel="stylesheet" href="css/grid.css" />
</head>

<body>

<header>
  <div class="logo">
    <img src="images/wordmark.svg" alt="logo"/>
  </div>

  <div class="menu-toggle" id="menu-toggle">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <nav id="nav-menu">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="contact.php" class="active">Contact</a></li>
    </ul>
  </nav>
</header>

<main class="contact-page">

  <section class="contact-form-wrapper">

    <h2>Contact Me</h2>

    <?php
  if (isset($_GET['msg'])) {
      $safeMsg = htmlspecialchars($_GET['msg'], ENT_QUOTES, 'UTF-8');

      $class = (str_starts_with($safeMsg, "Please complete")) 
              ? "form-message form-error" 
              : "form-message form-success";

      echo "<p class='$class'>$safeMsg</p>";
  }
    ?>

    <form method="post" action="includes/send.php">

      <label for="first_name">First Name *</label>
      <input type="text" name="first_name" id="first_name">

      <label for="last_name">Last Name *</label>
      <input type="text" name="last_name" id="last_name">

      <label for="email">Email *</label>
      <input type="email" name="email" id="email">

      <label for="message">Comments *</label>
      <textarea name="message" id="message"></textarea>

      <button type="submit" class="btn-primary">Send Message</button>

    </form>

  </section>

</main>

<footer>
  <div class="footer-container">

    <div class="footer-logo">
      <img src="images/nk-logo.svg" alt="NK Logo">
    </div>

    <div class="footer-col">
      <h3>Sitemap</h3>
      <nav id="footer-nav-menu">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.php" class="active">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div class="footer-col">
      <h3>Email</h3>
      <a href="mailto:noahalexander9718@gmail.com">noahalexander9718@gmail.com</a>
      <p>© 2025 Noah Kennedy</p>
    </div>

  </div>
</footer>

<script src="js/main.js"></script>

</body>
</html>