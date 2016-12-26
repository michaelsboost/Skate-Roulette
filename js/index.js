var counter   = 133,
    countDown = function() {
      if (counter === 0) {
        counter = "359";
      } else {
        document.body.style.background = "hsla("+ counter-- +", 100%, 95%, 0.8)";
      }
    };

setInterval(countDown, 25);