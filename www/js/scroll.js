let drawerState = false;

scrollToAnchor = (id) => {
  console.log(id);
  $("html, body").animate(
    {
      scrollTop: $("#" + id).offset().top,
    },
    600
  );
};

showDrawer = () => {
  if (drawerState) {
    $(".side__drawer").animate(
      {
        width: "0",
      },
      500
    );
    // $(".side__drawer").css("display", "none");
    drawerState = false;
  } else {
    $(".side__drawer").animate(
      {
        width: "200px",
      },
      500
    );
    // $(".side__drawer").css("display", "inline");
    drawerState = true;
  }
};

$(window).resize(() => {
  if ($(document).innerWidth() >= 703 && drawerState == true) {
    showDrawer();
  }
});
