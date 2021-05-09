<!DOCTYPE html>

<?php include('modules/head.php'); ?>

<?php include('movie.php'); ?>

<script type="text/javascript">
    function ticketNumGen() {
        for(var i=0; i<=10; i++) {
            document.write('<option value='+i+'>'+i+'</option>');
        }
    }
</script>

<!-- Booking form starts -->
<form action="cart.php" method="post" id="bookingform" target="_blank">
<!-- <input type="text" id="movie-name" name="movie_name"> -->
<div id="form">
    <div class="form-container">
        <div class="legend">
            <i class="fa fa-times" id="closeBtn"></i>
            Booking Form
        </div>
        <select id="movieTitle" name="movie_name">
            <?php
                for($i=0; $i<count($movie_name); $i++) {
                    echo '<option value="'.$i.'">'.$movie_name[$i].'</option>';
                }
            ?>
        </select>
        <div class="sessions">
            <?php
                for($i=1; $i<=7; $i++) {
                    echo '<input type="radio" id="session'.$i.'" name="session"">
                        <label for="session'.$i.'" id="label'.$i.'"></label>';
                }
            ?>
        </div>
        <img id="form_image">
        <!-- Submit HTML form as an array original code sourced and adapted from Joseph
        https://stackoverflow.com/questions/9073690/post-an-array-from-an-html-form-without-javascript -->
        <div id="inner-form2">
            <!-- Original code sourced and adapted from thenewboston on youtube
            https://www.youtube.com/watch?v=U0PtKHhWzDc&list=PL442FA2C127377F07&index=42  -->
            <?php
                $seats = array(
                    'Standard' => array('Adult', 'Concession', 'Child'),
                    'FirstClass' => array('Adult', 'Child'),
                    'Beanbag' => array('Adult', 'Family', 'Child')
                );

                foreach ($seats as $type => $subtype) {
                    echo '<h5>'.$type.'</h5>';
                    foreach ($subtype as $element) {
                        echo '
                            <div>
                            <label class="seat_type">'.$element.'</label>
                            <label class="cost"></label>
                            <select class="list"><script>ticketNumGen()</script></select>
                            <label class="subtotal"></label>
                            </div>';
                    }
                }
                echo '<h5 id="total"></h5>';
            ?>
        </div>
        <input class="button" id="book" type="submit" value="Book Now">
    </div>
</div>
</form>
<!-- Booking form ends -->

<?php include('modules/nav.php'); ?>

<main>
    <div class="container">
        <div class="movies-container">
            <!-- Thor The Dark World image source http://www.isnnews.net/zocalo/images/Thor-Poster.jpg -->
            <!-- Thor movie description source code is from Google -->

            <!-- Ghosts of Girlfriends Past image source code https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0Njk2NTIyMTVeQTJeQWpwZ15BbWU3MDU0MzUyMzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg -->
            <!-- Ghosts of Girlfriends Past movie description source code is from Google -->

            <!-- Special ID image source code http://screenanarchy.com/assets_c/2013/09/Special-ID-Donnie-Yen-poster-thumb-430xauto-42510.jpg -->
            <!-- Special ID movie description source code is from https://www.rottentomatoes.com/m/special_id/ -->

            <!-- Brave image source code https://upload.wikimedia.org/wikipedia/en/9/96/Brave_Poster.jpg -->
            <!-- Brave movie description source code is from Google -->

            <?php
                for($i=0; $i<count($movie); $i++) {
                    echo '
                    <div class="movies-container2">
                    <div class="title">'.$movie[$i]['title'].'</div>
                    <div class="image"><img src="'.$movie[$i]['image_src'].'"></div>
                    <div class="movie-side">
                        <h4>Genre - '.$movie[$i]['genre'].'</h4>
                        <h4>Description - <p>'.$movie[$i]['description'].'</p></h4>
                        <h4>Sessions</h4>
                        <div class="box sessions">';
                        for($j=0; $j<count($movie[$i]['session']); $j++) {
                            echo '<h6>'.$movie[$i]['session'][$j].'</h6>';
                        }
                    echo '</div>
                        <button class="button">click here to book now</button>
                        </div></div>';
                }
            ?>
        </div>
    </div>
</main>

<!-- Footer starts -->
<?php include('modules/footer.php'); ?>
<!-- Footer ends -->

	<!-- Javascript for opening booking form
	Original code sourced and adapted for educational purposes from Traversy Media
	https://www.youtube.com/watch?v=6ophW7Ask_0&t=737s&list=PLh5GpSavOzu4SUfYHzRNK_GyuMX-yT3tz&index=1 -->
	<script src="./js/bookingform.js"></script>

    <!-- Making current page nav-link noticeable
    Javascript original code sourced and adapted for educational purposes from Peter Boughton on stackoverflow website
    https://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript -->
    <script type="text/javascript">
        document.getElementById("nav2").className = "current";
    </script>
</html>