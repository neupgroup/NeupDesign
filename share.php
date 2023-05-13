<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Tourio | Travellers Companion</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/neupgroup/neupdesign/web/main.css">
</head>

<body>

	<?php require "./static/comp_header.php" ?>

	<main>

    <?php
    $l = $_GET['l'];
    IF $l == ""
    ?>


    <section class="section section-no-access">
        <div class="container">
            
                    <h1>Please Refer to the Menu for Now.</h1>
                    <span>We're under development. The site will be live under 24 hours. We are extremely sorry for the inconvenice faced by you.</span>
                    <br>
                    <br>
                    <span>Thank you for Scanning us. Thank you for being with us.</span>
            
        </div>
    </section>

	</main>

	<?php require "./static/comp_footer.php" ?>

</body>

</html>