$(document).ready(function() {
  images = ["Laptop2.jpg", "Laptop.jpg"];

  speed = 100;
  delay = 2000;

  var width = 640;
  var height = 400;

  count = 0;
  imageCount = 1;
  elements = new Array();

  el = $("#mosaic");
  el.css("background-image", "url(" + images[1] + ")");

  el.width(width).height(height);

  var horizontal_pieces = 4;
  var vertical_pieces = 4;
  total_pieces = horizontal_pieces * vertical_pieces;

  var box_width = width / horizontal_pieces;
  var box_height = height / vertical_pieces;

  var vertical_position = 0;

  for (i = 0; i < total_pieces; i++) {
    var tempEl = $('<span class="hover" id="hover-' + i + '"></span>');

    var horizontal_position = (i % horizontal_pieces) * box_width;

    if (i > 0 && i % horizontal_pieces == 0) {
      vertical_position += box_height;
    }

    tempEl.css(
      "background-position",
      "-" + horizontal_position + "px -" + vertical_position + "px"
    );

    el.append(tempEl);
    elements.push(tempEl);
  }

  hoverEl = $("#mosaic .hover");
  hoverEl
    .width(box_width)
    .height(box_height)
    .css("background-image", "url(" + images[0] + ")");

  timer = startInterval();
});

function startInterval() {
  elements = shuffleArray(elements);
  return setInterval(toggleDisplay, speed);
}

function toggleDisplay() {
  var tempEl = elements[count];
  var opacity = tempEl.css("opacity");
  count = (count + 1) % total_pieces;

  if (opacity == 0) {
    tempEl.animate({ opacity: 1 });
  } else {
    tempEl.animate({ opacity: 0 });
  }

  if (count === 0) {
    clearInterval(timer);
    setTimeout(function() {
      timer = startInterval();
    }, delay);
    imageCount = (imageCount + 1) % images.length;
    if (opacity == 0) {
      el.delay(speed).queue(function(next) {
        $(this).css("background-image", "url(" + images[imageCount] + ")");
        next();
      });
    } else {
      hoverEl.queue(function(next) {
        $(this).css("background-image", "url(" + images[imageCount] + ")");
        next();
      });
    }
  }
}

/*	shuffleArray source: http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array#12646864 */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

/* Flip Cards  */
document.querySelector(".card-flip").classList.toggle("flip");

// Porfolio isotope and filter
$(window).on("load", function() {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item"
  });
  $("#portfolio-flters li").on("click", function() {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
});
