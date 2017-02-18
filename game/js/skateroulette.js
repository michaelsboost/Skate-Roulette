var counter     = 133,
    countDown   = function() {
      if (counter === 0) {
        counter = "359";
      } else {
        document.body.style.background = "hsla("+ counter-- +", 100%, 95%, 0.8)";
      }
    };

setInterval(countDown, 25);

// After 3 minutes ask a donation = 180000
// After 5 minutes ask a donation = 300000
setTimeout(function() {
  alertify.alert('<h1>Help keep this free!</h1><br><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSYGA2RB5ZJCC" target="_blank"><img src="../imgs/donate.png"></a>', function() {
    location.reload();
  }).set("basic", true);
}, 300000);

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
    Trick1 = [
      "kickflip",
      "varial kickflip",
      "heelflip",
      "varial heelflip",
      "360 flip",
      "lazerflip",
      "hardflip",
      "inward heelflip",
      "pressure flip",
      "fs pop-shuv-it",
      "bs pop-shuv-it",
      "fs 360 pop-shuv-it",
      "bs 360 pop-shuv-it",
      
      "kickflip underflip",
      "fingerflip",
      "finger shuv-it",
      "finger hardflip",
      "finger 360flip",
      
      "Airwalk",
      "Gazelle (540 Shove-it 360 Body Varial)",
      "Half-Cab Double Flip",
      "Half-Cab Impossible",
      "Half Cab Kickflip",
      "Half-Cab Kickflip Underflip",
      "Handstand Flip",
      "One Footed Ollie",
      "Varial Heelflip Underflip",
      "Primo Flip",
      "Kickflip, Primo, flip out",
      "Kickflip, Rimo, flip out",
      
      "WildCard (Player chooses trick)"
    ],
    Trick2 = [
      "late",
      "switch",
      "nollie",
      "fakie",
      "180",
      "360",
      "sex change",
      "manual",
      "WildCard (Player chooses trick)"
    ],
    Trick3 = [
      "fs 50-50 grind",
      "bs 50-50 grind",
      "fs 5-0 grind",
      "bs 5-0 grind",
      "fs smith grind",
      "bs smith grind",
      "fs feeble grind",
      "bs feeble grind",
      "fs boardslide",
      "bs boardslide",
      "fs lipslide",
      "bs lipslide",
      "fs nose grind",
      "bs nose grind",
      "fs crooked grind",
      "bs crooked grind",
      "fs over-crooked grind",
      "bs over-crooked grind",
      "fs nose slide",
      "bs nose slide",
      "fs tail slide",
      "bs tail slide",
      "fs salad grind",
      "bs salad grind",
      "fs suzuki grind",
      "bs suzuki grind",
      "fs blunt slide",
      "bs blunt slide",
      "fs nose-blunt slide",
      "WildCard (Player chooses trick)"
    ],
    playerName, playerStats,
    randomTrick1 = Math.floor(Math.random() * Trick1.length),
    randomTrick2 = Math.floor(Math.random() * Trick2.length),
    randomTrick3 = Math.floor(Math.random() * Trick3.length),
    randomTrick4 = Math.floor(Math.random() * Trick1.length),
    audioElement  = document.createElement("audio"),
    hasPlayers    = function() {
      if ( $("[data-place=player]").html() === "" ) {
        $("[data-confirm=players]").addClass("hide");
      }
    },
    landedSound   = function() {
      audioElement.setAttribute("src", "https://" + document.domain + "/media/landed.mp3");
      audioElement.play();
    },
    missedSound   = function() {
      audioElement.setAttribute("src", "https://" + document.domain + "/media/missed.mp3");
      audioElement.play();
    },
    victorySound  = function() {
      audioElement2.setAttribute("src", "https://" + document.domain + "/media/youwin-man.mp3");
      audioElement2.play();
    };

function refreshDeck() {
  randomTrick1 = Math.floor(Math.random() * Trick1.length);
  randomTrick2 = Math.floor(Math.random() * Trick2.length);
  randomTrick3 = Math.floor(Math.random() * Trick3.length);
  $(".card").removeClass("card-flipped").addClass("card-front");
  $("[data-place=trick1]").html("<p>1</p><p>Skate Roulette</p><p>1</p>");
  $("[data-place=trick2]").html("<p>2</p><p>Skate Roulette</p><p>2</p>");
  $("[data-place=trick3]").html("<p>3</p><p>Skate Roulette</p><p>3</p>");
  $(".followTrick").removeClass("followTrick");
}

// How To Play
$("[data-action=howto]").click(function() {
  var msg1 = "Player will press a button and the button tells the player what trick to perform.<br>",
      msg2 = "Player can add another card to make the trick more difficult but also add another turn to complete trick.<br><br>",
      msg3 = "For example if the first card is a kickflip and the 2nd card is a 50-50 grind. The player can choose to kickflip into a 50-50 or kickflip out of a 50-50. If the 2nd card is switch then the player must try and perform a switch kickflip with a max of 2 tries.<br><br>",
      msg4 = "If player successfully completes trick, player will retain the cards he/she won and the player with the most cards at the end of the game wins.<br><br>",
      msg5 = "<strong>End of Game</strong>:<br>Players choose to end game based upon either...<br>",
      msg6 = "a max point goal (ex. Point goal is 12 if Eric gets 10 but Michael gets 12. Michael wins!)<br>",
      msg7 = "or a set time (ex. at 6:30 game ends whoever has the most points wins)";
  alertify.alert("<h2 class='tl'>"+ msg1 + msg2 + msg3 + msg4 + msg5 + msg6 + msg7 +"</h2>").set("basic", true);
});

$("[data-place=trick1]").on("click", function() {
  if ( $(".followTrick").is(":visible") ) {
    alertify.message("Trick is already chosen! Can't change decks.");
  } else {
    $(this).removeClass("card-front").addClass("card-flipped");
    $(this).html("<p>"+ Trick1[randomTrick1] +"</p><p>&nbsp;</p>");
  }
});
$("[data-place=trick2]").on("click", function() {
  if ( $(".followTrick").is(":visible") ) {
    alertify.message("Trick is already chosen! Can't change decks.");
  } else {
    $(this).removeClass("card-front").addClass("card-flipped");
    $(this).html("<p>"+ Trick2[randomTrick2] +"</p><p>&nbsp;</p>");
  }
});
$("[data-place=trick3]").on("click", function() {
  if ( $(".followTrick").is(":visible") ) {
    alertify.message("Trick is already chosen! Can't change decks.");
  } else {
    $(this).removeClass("card-front").addClass("card-flipped");
    $(this).html("<p>"+ Trick3[randomTrick3] +"</p><p>&nbsp;</p>");
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
      $("[data-place=player]").append("<li style='display:none;'><span data-player='"+ this.value +"'>"+ this.value +"</span><span data-count='player'></span><button class='pointer' data-remove='player'><i class='fa fa-times'></i></button></li>");
      $("[data-place=player] li").last().slideDown();
      
      $("[data-confirm=players]").removeClass("hide");
      this.value = "";

      $("[data-remove=player]").on("click", function() {
        $(this).parent().delay(300).slideUp(function() {
          $(this).remove();
        });
        hasPlayers();
      });
      hasPlayers();
    }
  }
});

// Confirm Players
$("[data-confirm=players]").click(function() {
  if ( $("[data-add=player]").val() ) {
    $("[data-place=player]").append("<li style='display:none;'><span data-player='"+ this.value +"'>"+ this.value +"</span><span data-count='player'></span><button class='pointer' data-remove='player'><i class='fa fa-times'></i></button></li>");
    $("[data-place=player] li").last().slideDown();
    $("[data-add=player]").val("");
  }
  
  $("[data-place=player]").randomize("li");
  
  $(this).addClass("hide");
  $("[data-add=player]").addClass("hide");
  $("[data-display=players]").addClass("invisible");
  $("[data-game=on]").removeClass("hide");
  $(".table").css("height", "calc(100% - "+ $(".topmsg").css("height") +")");
  
  $("[data-count=player]").text("0");
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

    playerStats.text( parseInt(playerStats.text()) + $(".card-flipped:visible").length );
    if ($("[data-player="+ playerName +"]").parent().next().is(":visible")) {
      $("[data-player=turn]").text($("[data-player="+ playerName +"]").parent().next().children().first().text());
      $("[data-player=points]").text($("[data-player="+ playerName +"]").parent().next().children().first().next().text());
      if ($("[data-player="+ playerName +"]").parent().next().children().first().hasClass("followTrick")) {
        refreshDeck();
        trickNumber = parseInt($("[data-trick=attempts]").text());
        $("[data-trick=attempts]").text(trickNumber + 1);
      }
    } else {
      $("[data-player=turn]").text($("[data-place=player] li").first().children().first().text());
      $("[data-player=points]").text($("[data-place=player] li").first().children().first().next().text());
      if ($("[data-place=player] li").first().children().first().hasClass("followTrick")) {
        refreshDeck();
        trickNumber = parseInt($("[data-trick=attempts]").text());
        $("[data-trick=attempts]").text(trickNumber + 1);
      }
    }
  }
  landedSound();
});
$("[data-confirm=miss]").click(function() {
  playerName = $("[data-player=turn").text();
  playerStats = $("[data-player="+ playerName +"]").next();

  if ( !$(".card-flipped").is(":visible") ) {
    alertify.message("It appears you haven't flipped any cards yet!");
    return false;
  } else {
    if (!$(".followTrick").is(":visible")) {
      refreshDeck();
      trickNumber = parseInt($("[data-trick=attempts]").text());
      $("[data-trick=attempts]").text(trickNumber + 1);
    }

    // playerStats.text( parseInt(playerStats.text()) - $(".card-flipped:visible").length );
    if ($("[data-player="+ playerName +"]").parent().next().is(":visible")) {
      $("[data-player=turn]").text($("[data-player="+ playerName +"]").parent().next().children().first().text());
      $("[data-player=points]").text($("[data-player="+ playerName +"]").parent().next().children().first().next().text());
      if ($("[data-player="+ playerName +"]").parent().next().children().first().hasClass("followTrick")) {
        refreshDeck();
        trickNumber = parseInt($("[data-trick=attempts]").text());
        $("[data-trick=attempts]").text(trickNumber + 1);
      }
    } else {
      $("[data-player=turn]").text($("[data-place=player] li").first().children().first().text());
      $("[data-player=points]").text($("[data-place=player] li").first().children().first().next().text());
      if ($("[data-place=player] li").first().children().first().hasClass("followTrick")) {
        refreshDeck();
        trickNumber = parseInt($("[data-trick=attempts]").text());
        $("[data-trick=attempts]").text(trickNumber + 1);
      }
    }
  }
  missedSound();
});

// Animate button on click
$("[data-confirm=land], [data-confirm=miss]").on("click", function() {
  doBounce($(this), 2, '15px', 50);   
  return false;
});

function doBounce(element, times, distance, speed) {
  for(i = 0; i < times; i++) {
    element.animate({marginTop: '-='+distance},speed)
           .animate({marginTop: '+='+distance},speed);
  }        
}

// Auto make players
//$("[data-place=player]").html('<li><span data-player="michael">michael</span><span data-count="player"></span><button class="pointer" data-remove="player"><i class="fa fa-times"></i></button></li><li><span data-player="Eric">Eric</span><span data-count="player"></span><button class="pointer" data-remove="player"><i class="fa fa-times"></i></button></li><li><span data-player="Tasha">Tasha</span><span data-count="player"></span><button class="pointer" data-remove="player"><i class="fa fa-times"></i></button></li>');
//$("[data-confirm=players]").trigger("click");
