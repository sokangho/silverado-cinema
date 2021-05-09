<!DOCTYPE html>

<?php include('modules/head.php'); ?>

<?php include('modules/nav.php'); ?>

	<main>
		<!-- Slideshow starts -->
		<!-- Slideshow javascript original code sourced and adapted from
		w3schools https://www.w3schools.com/howto/howto_js_slideshow.asp
		and RK Tutorial https://www.youtube.com/watch?v=7QyfBp9uHTs -->
		<div class="container" id="slideshow">
			<!-- first slideshow image source http://getreelcinemas.com/wp-content/uploads/2015/02/Background-Narrow.jpg -->
			<!-- second slideshow image source https://moviefinder4u.com/wp-content/uploads/2016/12/couple-watching-3d-movie-in-theaters.jpg -->
			<!-- third slideshow image source http://harianbernas.com/online/public/foto_news/image_news_535/01496042747movie-snack.jpg -->
			<!-- fourth slideshow image source https://www.dolby.com/uploadedImages/Dolby_Public/Content/Professionals/Cinema/dolby-cinema-pro-tout.jpg -->
			<!-- fifth slideshow image source https://i.ytimg.com/vi/dU0buXCiBp0/maxresdefault.jpg -->
			<img class="slides" src="./img/cinemabg.jpg"/>
			<img class="slides" src="./img/3D.jpg"/>
			<img class="slides" src="./img/3D2.jpg"/>
			<img class="slides" src="./img/dolby.jpg"/>
			<img class="slides" src="./img/seats2.jpg"/>
		</div>
		<div class="container" id="dot-container">
			<span class="dot" onclick="currentSlide(1)"></span>
			<span class="dot" onclick="currentSlide(2)"></span>
			<span class="dot" onclick="currentSlide(3)"></span>
			<span class="dot" onclick="currentSlide(4)"></span>
			<span class="dot" onclick="currentSlide(5)"></span>
		</div>
		<!-- Slideshow ends -->

		<!-- Banner starts -->
		<div class="container">
			<div id="banner">
				<h3>Welcome to the NEW Silverado Cinema!</h3>
			</div>
			<div id="inner-banner">
				<h3>Just like many old movies, Silverado Cinema has been remastered!</h3>
				<div id="left-banner">
				<h4>What's NEW?</h4>
				<h5>- Completely renovated theatres</h5>
				<h5>- Brand new seating, including bean bag chairs!</h5>
				<h5>- A 3D projection unit</h5>
				<h5>- Dolby surround sound system</h5>
				</div>
				<div id="right-banner">
				<h4>HOT Weekly Deals!!!</h4>
				<h5>Got a bad case of Mondayitis? So bad it carried over until Tuesday? Well don’t stress, come and relax in our amazing new theatre with discounted rates over these two days! Between 15-30% off all seats! This deal also applies to every showing at 1pm every week day!</h5>
				</div>
			</div>
		</div>
		<!-- Banner ends -->

		<!-- Now showing movies starts -->
		<div class="container">
			<a href="showing.php" class="card">Now Showing</a>
			<div class="movies-container" id="movies-container1">
				<!-- Thor The Dark World image source http://www.isnnews.net/zocalo/images/Thor-Poster.jpg -->
				<a href="showing.php#movie1"><img src="./img/thorportrait.jpg" alt="Thor The Dark World"></a>
				<!-- Ghosts of Girlfriends Past image source code https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0Njk2NTIyMTVeQTJeQWpwZ15BbWU3MDU0MzUyMzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg -->
				<a href="showing.php#movie2"><img src="./img/ghostsofgirlfriendspastportrait.jpg" alt="Ghosts of Girlfriends Past"></a>
				<!-- Special ID image source code http://screenanarchy.com/assets_c/2013/09/Special-ID-Donnie-Yen-poster-thumb-430xauto-42510.jpg -->
				<a href="showing.php#movie3"><img src="./img/specialidportrait.jpg" alt="Special ID"></a>
				<!-- Brave image source code https://upload.wikimedia.org/wikipedia/en/9/96/Brave_Poster.jpg -->
				<a href="showing.php#movie4"><img src="./img/braveportrait.jpg" alt="Brave"></a>
			</div>
		</div>
		<!-- Now showing movies ends -->
	</main>

	<!-- Footer starts -->
	<?php include('modules/footer.php'); ?>
	<!-- Footer ends -->

	<!-- Slideshow javascript source code is retrieved from w3schools and RK Tutorial
	https://www.w3schools.com/howto/howto_js_slideshow.asp
	https://www.youtube.com/watch?v=7QyfBp9uHTs -->
	<script src="./js/slideshow.js"></script>

    <!-- Making current page nav-link noticeable
    Javascript original code sourced and adapted for educational purposes from Peter Boughton on stackoverflow website
    https://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript -->
    <script type="text/javascript">
        document.getElementById("nav1").className = "current";
    </script>
</html>