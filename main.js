$(document).ready(function () {
  $(".nav__menu, .nav__menu-list").click(function (event) {
    $(".nav__menu-list").toggleClass("active");
    $(".nav__menu").toggleClass("active");
  });

  $(".btn, .map__place-city").click(function (e) {
    e.preventDefault();
    $(".form").addClass("active");
    $("body").addClass("lock");
    $(".bg").addClass("active");
  });
  $(".form-close, .bg").click(function () {
    $(".form").removeClass("active");
    $("body").removeClass("lock");
    $(".bg").removeClass("active");
  });
});

if (window.screen.width < 1000) {
  $(".header__title").html("Дубликаты номеров");
  $(".header__text-info").html(
    "Изготовление номерных знаков Соответствие ГОСТ, высокое качество"
  );
}

if (window.screen.width < 768) {
  $(".advantages-item__text-speed").html(
    "Быстрое производство и оперативность сотрудников."
  );
  $(".advantages-item__text-higher").html(
    "Высококлассное оборудование и профессионализм."
  );
  $(".advantages-item__text-power").html(
    "Можно забрать в одном из наших филиалов или заказать доставку."
  );
}

$(".scrollto").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 600, // по умолчанию «400»
      easing: "linear", // по умолчанию «swing»
    }
  );

  return false;
});
