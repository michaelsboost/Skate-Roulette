var counter     = 133,
    countDown   = function() {
      if (counter === 0) {
        counter = "359";
      } else {
        document.body.style.background = "hsla("+ counter-- +", 100%, 95%, 0.8)";
      }
    };

setInterval(countDown, 25);

// Plugins
(function($) {
  $.fn.randomize = function(childElm) {
    return this.each(function() {
      var $this = $(this);
      var elms = $this.children(childElm);
      
      elms.sort(function() {
        return (Math.round(Math.random())-0.05);
      });
      $this.remove(childElm);
      
      for (i = 0; i < elms.length; i++) {
        $this.append(elms[i]);
      }
    });
  }
})(jQuery);

var trickNumber = 0,
    SimpleTricks = [
      "WildCard (Player chooses trick)",
      "ollie",
      "fakie ollie",
      "manual",
      "fakie manual",
      
      "kickflip",
      "heelflip",
      "fs pop-shuv-it",
      "bs pop-shuv-it",
      "fs 180",
      "bs 180",
      "pressureflip",
      
      "fakie kickflip",
      "fakie heelflip",
      "fakie fs pop-shuv-it",
      "fakie bs pop-shuv-it",
      "fakie fs 180",
      "fakie bs 180",
      "fakie pressureflip"
    ],
    SimpleSwitchTricks = [
      "WildCard (Player chooses switch trick)",
      "switch ollie",
      "switch kickflip",
      "switch heelflip",
      "switch fs pop-shuv-it",
      "switch bs pop-shuv-it",
      "switch fs 180",
      "switch bs 180",
      "switch manual",
      "switch pressureflip",
      
      "nollie",
      "nollie kickflip",
      "nollie heelflip",
      "nollie fs pop-shuv-it",
      "nollie bs pop-shuv-it",
      "nollie fs 180",
      "nollie bs 180",
      "nose manual",
      "nollie pressureflip"
    ],
    IntermediateTricks = [
      "WildCard (Player chooses trick)",
      "ollie",
      "switch ollie",
      "nollie",
      "fakie ollie",
      
      "fs 180",
      "switch fs 180",
      "nollie fs 180",
      "fakie fs 180",

      "bs 180",
      "switch bs 180",
      "nollie bs 180",
      "fakie bs 180",

      "fs 360",
      "switch fs 360",
      "nollie fs 360",
      "fakie fs 360",

      "bs 360",
      "switch bs 360",
      "nollie bs 360",
      "fakie bs 360",

      "pop-shuv-it",
      "switch pop-shuv-it",
      "nollie pop-shuv-it",
      "fakie pop-shuv-it",

      "fs pop-shuv-it",
      "switch fs pop-shuv-it",
      "nollie fs pop-shuv-it",
      "fakie fs pop-shuv-it",

      "360 pop-shuv-it",
      "switch 360 pop-shuv-it",
      "nollie 360 pop-shuv-it",
      "fakie 360 pop-shuv-it",

      "360 fs pop-shuv-it",
      "switch fs 360 pop-shuv-it",
      "nollie fs 360 pop-shuv-it",
      "fakie fs 360 pop-shuv-it",

      "kickflip",
      "switch kickflip",
      "nollie kickflip",
      "fakie kickflip",

      "fs kickflip",
      "switch fs kickflip",
      "nollie fs kickflip",
      "fakie fs kickflip",

      "bs kickflip",
      "switch bs kickflip",
      "nollie bs kickflip",
      "fakie bs kickflip",

      "double kickflip",
      "switch double kickflip",
      "nollie double kickflip",
      "fakie double kickflip",

      "fs double kickflip",
      "switch fs double kickflip",
      "nollie fs double kickflip",
      "fakie fs double kickflip",

      "bs double kickflip",
      "switch bs double kickflip",
      "nollie bs double kickflip",
      "fakie bs double kickflip",

      "heelflip",
      "switch heelflip",
      "nollie heelflip",
      "fakie heelflip",

      "fs heelflip",
      "switch fs heelflip",
      "nollie fs heelflip",
      "fakie fs heelflip",

      "bs heelflip",
      "switch bs heelflip",
      "nollie bs heelflip",
      "fakie bs heelflip",

      "double heelflip",
      "switch double heelflip",
      "nollie double heelflip",
      "fakie double heelflip",

      "fs double heelflip",
      "switch fs double heelflip",
      "nollie fs double heelflip",
      "fakie fs double heelflip",

      "bs double heelflip",
      "switch bs double heelflip",
      "nollie bs double heelflip",
      "fakie bs double heelflip",

      "varial kickflip",
      "switch varial kickflip",
      "nollie varial kickflip",
      "fakie varial kickflip",

      "varial heelflip",
      "switch varial heelflip",
      "nollie varial heelflip",
      "fakie varial heelflip",

      "360flip",
      "switch 360flip",
      "nollie 360flip",
      "fakie 360flip",

      "hardflip",
      "switch hardflip",
      "nollie hardflip",
      "fakie hardflip",

      "inward heelflip",
      "switch inward heelflip",
      "nollie inward heelflip",
      "fakie inward heelflip",

      "pressureflip",
      "switch pressureflip",
      "nollie pressureflip",
      "fakie pressureflip",

      "360 pressureflip",
      "switch 360 pressureflip",
      "nollie 360 pressureflip",
      "fakie 360 pressureflip",

      "bs big spin (bs pop-shuv-it + fs 180)",
      "switch bs big spin (bs pop-shuv-it + fs 180)",
      "nollie bs big spin (bs pop-shuv-it + fs 180)",
      "fakie bs big spin (bs pop-shuv-it + fs 180)",

      "fs big spin (fs pop-shuv-it + bs 180)",
      "switch fs big spin (fs pop-shuv-it + bs 180)",
      "nollie fs big spin (fs pop-shuv-it + bs 180)",
      "fakie fs big spin (fs pop-shuv-it + bs 180)",

      "late backfoot kickflip",
      "switch late backfoot kickflip",
      "nollie late backfoot kickflip",
      "fakie late backfoot kickflip",

      "late fs shuv-it",
      "switch late fs shuv-it",
      "nollie late fs shuv-it",
      "fakie late fs shuv-it",

      "manual",
      "switch manual",
      "nollie manual",
      "fakie manual",

      "manual ollie",
      "switch manual ollie",
      "nollie manual nollie",
      "fakie manual fakie ollie",

      "manual kickflip",
      "switch manual kickflip",
      "nollie manual kickflip",
      "fakie manual fakie kickflip"
    ],
    AdvancedTricks = [
      "WildCard (Player chooses trick)",
      "ollie",
      "switch ollie",
      "nollie",
      "fakie ollie",
      
      "fs 180",
      "switch fs 180",
      "nollie fs 180",
      "fakie fs 180",

      "bs 180",
      "switch bs 180",
      "nollie bs 180",
      "fakie bs 180",

      "fs 360",
      "switch fs 360",
      "nollie fs 360",
      "fakie fs 360",

      "bs 360",
      "switch bs 360",
      "nollie bs 360",
      "fakie bs 360",

      "pop-shuv-it",
      "switch pop-shuv-it",
      "nollie pop-shuv-it",
      "fakie pop-shuv-it",

      "fs pop-shuv-it",
      "switch fs pop-shuv-it",
      "nollie fs pop-shuv-it",
      "fakie fs pop-shuv-it",

      "360 pop-shuv-it",
      "switch 360 pop-shuv-it",
      "nollie 360 pop-shuv-it",
      "fakie 360 pop-shuv-it",

      "540 pop-shuv-it",
      "switch 540 pop-shuv-it",
      "nollie 540 pop-shuv-it",
      "fakie 540 pop-shuv-it",

      "360 fs pop-shuv-it",
      "switch fs 360 pop-shuv-it",
      "nollie fs 360 pop-shuv-it",
      "fakie fs 360 pop-shuv-it",

      "540 fs pop-shuv-it",
      "switch fs 540 pop-shuv-it",
      "nollie fs 540 pop-shuv-it",
      "fakie fs 540 pop-shuv-it",

      "kickflip",
      "switch kickflip",
      "nollie kickflip",
      "fakie kickflip",

      "fs kickflip",
      "switch fs kickflip",
      "nollie fs kickflip",
      "fakie fs kickflip",

      "bs kickflip",
      "switch bs kickflip",
      "nollie bs kickflip",
      "fakie bs kickflip",

      "double kickflip",
      "switch double kickflip",
      "nollie double kickflip",
      "fakie double kickflip",

      "fs double kickflip",
      "switch fs double kickflip",
      "nollie fs double kickflip",
      "fakie fs double kickflip",

      "bs double kickflip",
      "switch bs double kickflip",
      "nollie bs double kickflip",
      "fakie bs double kickflip",

      "triple kickflip",
      "switch triple kickflip",
      "nollie triple kickflip",
      "fakie triple kickflip",

      "fs triple kickflip",
      "switch fs triple kickflip",
      "nollie fs triple kickflip",
      "fakie fs triple kickflip",

      "bs triple kickflip",
      "switch bs triple kickflip",
      "nollie bs triple kickflip",
      "fakie bs triple kickflip",

      "heelflip",
      "switch heelflip",
      "nollie heelflip",
      "fakie heelflip",

      "fs heelflip",
      "switch fs heelflip",
      "nollie fs heelflip",
      "fakie fs heelflip",

      "bs heelflip",
      "switch bs heelflip",
      "nollie bs heelflip",
      "fakie bs heelflip",

      "double heelflip",
      "switch double heelflip",
      "nollie double heelflip",
      "fakie double heelflip",

      "fs double heelflip",
      "switch fs double heelflip",
      "nollie fs double heelflip",
      "fakie fs double heelflip",

      "bs double heelflip",
      "switch bs double heelflip",
      "nollie bs double heelflip",
      "fakie bs double heelflip",

      "triple heelflip",
      "switch triple heelflip",
      "nollie triple heelflip",
      "fakie triple heelflip",

      "fs triple heelflip",
      "switch fs triple heelflip",
      "nollie fs triple heelflip",
      "fakie fs triple heelflip",

      "bs triple heelflip",
      "switch bs triple heelflip",
      "nollie bs triple heelflip",
      "fakie bs triple heelflip",

      "varial kickflip",
      "switch varial kickflip",
      "nollie varial kickflip",
      "fakie varial kickflip",

      "double nightmare flip (varial kickflip)",
      "switch double nightmare flip (varial kickflip)",
      "nollie double nightmare flip (varial kickflip)",
      "fakie double nightmare flip (varial kickflip)",

      "varial heelflip",
      "switch varial heelflip",
      "nollie varial heelflip",
      "fakie varial heelflip",

      "double varial heelflip",
      "switch double varial heelflip",
      "nollie double varial heelflip",
      "fakie double varial heelflip",

      "360flip",
      "switch 360flip",
      "nollie 360flip",
      "fakie 360flip",

      "lazerflip",
      "switch lazerflip",
      "nollie lazerflip",
      "fakie lazerflip",

      "fs big flip (fs 360 kickflip)",
      "switch fs big flip (fs 360 kickflip)",
      "nollie fs big flip (fs 360 kickflip)",
      "fakie fs big flip (fs 360 kickflip)",

      "bs big flip (360 kickflip)",
      "switch bs big flip (360 kickflip)",
      "nollie bs big flip (360 kickflip)",
      "fakie bs big flip (360 kickflip)",

      "fs big heelflip (360 heelflip)",
      "switch fs big heelflip (360 heelflip)",
      "nollie fs big heelflip (360 heelflip)",
      "fakie fs big heelflip (360 heelflip)",

      "bs big heelflip (360 heelflip)",
      "switch bs big heelflip (360 heelflip)",
      "nollie bs big heelflip (360 heelflip)",
      "fakie bs big heelflip (360 heelflip)",

      "hardflip",
      "switch hardflip",
      "nollie hardflip",
      "fakie hardflip",

      "360 hardflip",
      "switch 360 hardflip",
      "nollie 360 hardflip",
      "fakie 360 hardflip",

      "inward heelflip",
      "switch inward heelflip",
      "nollie inward heelflip",
      "fakie inward heelflip",

      "360 inward heelflip",
      "switch 360 inward heelflip",
      "nollie 360 inward heelflip",
      "fakie 360 inward heelflip",

      "pressureflip",
      "switch pressureflip",
      "nollie pressureflip",
      "fakie pressureflip",

      "360 pressureflip",
      "switch 360 pressureflip",
      "nollie 360 pressureflip",
      "fakie 360 pressureflip",

      "bs big spin (bs pop-shuv-it + fs 180)",
      "switch bs big spin (bs pop-shuv-it + fs 180)",
      "nollie bs big spin (bs pop-shuv-it + fs 180)",
      "fakie bs big spin (bs pop-shuv-it + fs 180)",

      "fs big spin (fs pop-shuv-it + bs 180)",
      "switch fs big spin (fs pop-shuv-it + bs 180)",
      "nollie fs big spin (fs pop-shuv-it + bs 180)",
      "fakie fs big spin (fs pop-shuv-it + bs 180)",

      "late backfoot kickflip",
      "switch late backfoot kickflip",
      "nollie late backfoot kickflip",
      "fakie late backfoot kickflip",

      "late fs shuv-it",
      "switch late fs shuv-it",
      "nollie late fs shuv-it",
      "fakie late fs shuv-it",

      "manual",
      "switch manual",
      "nollie manual",
      "fakie manual",

      "manual ollie",
      "switch manual ollie",
      "nollie manual nollie",
      "fakie manual fakie ollie",

      "manual kickflip",
      "switch manual kickflip",
      "nollie manual kickflip",
      "fakie manual fakie kickflip"
    ],
    playerName, playerStats, Winner,
    playerSTR, playerC, playerL,
    WinnerSTR, WinnerC, WinnerL,
    hasPlayers = function() {
      if ( $("[data-place=player]").html() === "" ) {
        $("[data-confirm=players]").addClass("hide");
      }
    };

function refreshSimple() {
  randomTrick = Math.floor(Math.random() * SimpleTricks.length);
  $("[data-place=trick]").text(SimpleTricks[randomTrick]);
  $(".followTrick").removeClass("followTrick");
}
function refreshSimpleSwitch() {
  randomTrick = Math.floor(Math.random() * SimpleSwitchTricks.length);
  $("[data-place=trick]").text(SimpleSwitchTricks[randomTrick]);
  $(".followTrick").removeClass("followTrick");
}
function refreshMed() {
  randomTrick = Math.floor(Math.random() * IntermediateTricks.length);
  $("[data-place=trick]").text(IntermediateTricks[randomTrick]);
  $(".followTrick").removeClass("followTrick");
}
function refreshPro() {
  randomTrick = Math.floor(Math.random() * AdvancedTricks.length);
  $("[data-place=trick]").text(AdvancedTricks[randomTrick]);
  $(".followTrick").removeClass("followTrick");
}

$("input[name=difficulty]").on("change", function() {
  if ( $("#simple").is(":checked") ) {
    refreshSimple();
  } else if ( $("#simpleswitch").is(":checked") ) {
    refreshSimpleSwitch();
  } else if ( $("#intermediate").is(":checked") ) {
    refreshMed();
  } else if ( $("#professional").is(":checked") ) {
    refreshPro();
  }
  return false;
}).trigger("change");

// How To Play
$("[data-action=howto]").click(function() {
  var msg1 = "S.K.A.T.E. similar to H.O.R.S.E. in basketball.<br>",
      msg2 = "Player will be given a random trick to do if player lands trick others have to do that trick.<br>",
      msg3 = "If the other players fail they receive a letter.<br>",
      msg4 = "Once a player has the letters S.K.A.T.E. they are out of the game.<br>",
      msg5 = "The last remaining player wins.";
  alertify.alert("<h2 class='tl'>"+ msg1 + msg2 + msg3 + msg4 + msg5 +"</h2>").set("basic", true);
});

// Confirm Difficulty
$("[data-confirm=difficulty]").click(function() {
  if ( !$("input[name=difficulty]").is(":checked") ) {
    alertify.error("No difficulty selected");
  } else {
    $(".difficulty").fadeOut(250);
    $("[data-area=players]").delay(250).fadeIn();
  }
});

// Add Players
$("[data-add=player]").focus().on("keyup", function(e) {
  if (e.which === 13) {
    if (this.value === "") {
      if ($("[data-place=player]").html() === "") {
        alertify.error("Error: couldn't detect name!");
      } else {
        $("[data-confirm=players]").trigger("click");
      }
    } else {
      $("[data-place=player]").append("<li><span data-player='"+ this.value +"'>"+ this.value +"</span><span data-count='player'></span><button class='pointer' data-remove='player'><i class='fa fa-times'></i></button></li>");
      $("[data-confirm=players]").removeClass("hide");
      this.value = "";

      $("[data-remove=player]").on("click", function() {
        $(this).parent().remove();
        hasPlayers();
      });
      hasPlayers();
    }
  }
});

// Confirm Players
$("[data-confirm=players]").click(function() {
  $("[data-place=player]").randomize("li");
  
  $(this).addClass("hide");
  $("[data-add=player]").addClass("hide");
  $("[data-display=players]").addClass("invisible");
  $("[data-game=on]").removeClass("hide");
  $(".table").css("height", "calc(100% - "+ $(".topmsg").css("height") +")");
  
  $("[data-player=turn]").text($("[data-place=player] li").first().children().first().text());
});

// Player Landed/Missed Confirmed Trick
$("[data-confirm=land]").click(function() {
  playerName = $("[data-player=turn").text();
  playerStats = $("[data-player="+ playerName +"]").next();
  
  if ( !$(".card-flipped").is(":visible") ) {
    alertify.message("It appears you haven't flipped any cards yet!");
    return false;
  } else {
    if ( !$(".followTrick").is(":visible") ) {
      $("[data-player="+ $("[data-player=turn]").text() +"]").addClass("followTrick");
    }

    if ($("[data-player="+ playerName +"]").parent().next().is(":visible")) {
      $("[data-player=turn]").text($("[data-player="+ playerName +"]").parent().next().children().first().text());
      $("[data-player=points]").text($("[data-player="+ playerName +"]").parent().next().children().first().next().text());
      if ($("[data-player="+ playerName +"]").parent().next().children().first().hasClass("followTrick")) {
        $("input[name=difficulty]").trigger("change");
        trickNumber = parseInt($("[data-trick=attempts]").text());
        $("[data-trick=attempts]").text(trickNumber + 1);
      }
    } else {
      $("[data-player=turn]").text($("[data-place=player] li").first().children().first().text());
      $("[data-player=points]").text($("[data-place=player] li").first().children().first().next().text());
      if ($("[data-place=player] li").first().children().first().hasClass("followTrick")) {
        $("input[name=difficulty]").trigger("change");
        trickNumber = parseInt($("[data-trick=attempts]").text());
        $("[data-trick=attempts]").text(trickNumber + 1);
      }
    }
  }
});
$("[data-confirm=miss]").click(function() {
  playerName = $("[data-player=turn").text();
  playerStats = $("[data-player="+ playerName +"]").next();

  if (!$(".followTrick").is(":visible")) {
    $("input[name=difficulty]").trigger("change");
    trickNumber = parseInt($("[data-trick=attempts]").text());
    $("[data-trick=attempts]").text(trickNumber + 1);
  } else {
    if (playerStats.text() === "") {
      playerStats.text("S.");
    } else if (playerStats.text() === "S.") {
      playerStats.text("S.K.");
    } else if (playerStats.text() === "S.K.") {
      playerStats.text("S.K.A.");
    } else if (playerStats.text() === "S.K.A.") {
      playerStats.text("S.K.A.T.");
    } else if (playerStats.text() === "S.K.A.T.") {
      playerStats.text("S.K.A.T.E.");
      $("[data-player="+ playerName +"]").parent().remove();
      playerSTR = playerName;
      playerC = playerSTR.substr(0, 1).toUpperCase();
      playerL = playerSTR.substr(1, playerSTR.length).toLowerCase();
      playerSTR = playerC + playerL;
      alertify.message(playerSTR + " is out of the game");
      
      if ($("[data-place=player] li:visible").length == 1) {
        WinnerSTR = $("[data-place=player] li").children().first().text();
        WinnerC = WinnerSTR.substr(0, 1).toUpperCase();
        WinnerL = WinnerSTR.substr(1, WinnerSTR.length).toLowerCase();
        Winner = WinnerC + WinnerL;
        alertify.alert('<img src="../imgs/winner.png" style="width: 72%;"><img src="../imgs/cup.svg" style="width: 50%;"><h1>'+ Winner +'! <br>Won The Game!</h1>').set("basic", true);
      }
    }
  }

  // playerStats.text( parseInt(playerStats.text()) - 1 );
  if ($("[data-player="+ playerName +"]").parent().next().is(":visible")) {
    $("[data-player=turn]").text($("[data-player="+ playerName +"]").parent().next().children().first().text());
    $("[data-player=points]").text($("[data-player="+ playerName +"]").parent().next().children().first().next().text());
    if ($("[data-player="+ playerName +"]").parent().next().children().first().hasClass("followTrick")) {
      $("input[name=difficulty]").trigger("change");
      trickNumber = parseInt($("[data-trick=attempts]").text());
      $("[data-trick=attempts]").text(trickNumber + 1);
    }
  } else {
    $("[data-player=turn]").text($("[data-place=player] li").first().children().first().text());
    $("[data-player=points]").text($("[data-place=player] li").first().children().first().next().text());
    if ($("[data-place=player] li").first().children().first().hasClass("followTrick")) {
      $("input[name=difficulty]").trigger("change");
      trickNumber = parseInt($("[data-trick=attempts]").text());
      $("[data-trick=attempts]").text(trickNumber + 1);
    }
  }
});

// Auto make players
//$("[data-place=player]").html('<li><span data-player="michael">michael</span><span data-count="player"></span><button class="pointer" data-remove="player"><i class="fa fa-times"></i></button></li><li><span data-player="Eric">Eric</span><span data-count="player"></span><button class="pointer" data-remove="player"><i class="fa fa-times"></i></button></li><li><span data-player="Tasha">Tasha</span><span data-count="player"></span><button class="pointer" data-remove="player"><i class="fa fa-times"></i></button></li>');
//$("[data-confirm=players]").trigger("click");