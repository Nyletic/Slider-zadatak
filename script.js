jQuery(function ($) {
  const animationDuration = 400;

  $("#prev").on("click", function () {
    $(".carousels .images img:first-child").fadeOut(
      animationDuration,
      function () {
        $(this)
          .appendTo($(this).parent())
          .fadeIn(animationDuration)
          .animate(animationDuration);
      }
    );
  });

  $("#next").on("click", function () {
    $(".carousel .images img:last-child").fadeOut(
      animationDuration,
      function () {
        $(this).prependTo($(this).parent()).fadeIn(animationDuration);
      }
    );
  });
});

// $("#next").on("click", function () {
//   $(".carousel .images img:last-child").hide("normal", function () {
//     $(this)
//       .prependTo($(this).parent())
//       .show("normal")
//       .css({ marginLeft: "5px" });
//   });
// });
