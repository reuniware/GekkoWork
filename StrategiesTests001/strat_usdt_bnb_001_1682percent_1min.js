// binance	USDT	BNB	2020-06-21 12:19	2021-08-27 12:18	1 year, 2 months, 5 days, 20 hours

// Let's create our own strategy
var strat = {};

// Prepare everything our strat needs
strat.init = function() {
  // your code!
  //this.requiredHistory = 5; // require 5 candles before giving advice ; after that function check is called
}

// What happens on every new candle?
strat.update = function(candle) {
  // your code!
}

// For debugging purposes.
strat.log = function() {
  // your code!
}

// Based on the newly calculated
// information, check if we should
// update or not.
let done = false;
let highest = 0.0;
let div = 0.0;
strat.check = function(candle) {

  div = candle.high/candle.low;
  //console.log(div);
  if (div > highest) highest = div;

  if (done === false && (div > 1.003)) {
    // your code!
    this.advice({
      direction: 'long', // or short
      trigger: { // ignored when direction is not "long"
        type: 'trailingStop',
        trailPercentage: 11
        // or:
        // trailValue: 100
      }
    });

    done = false;
  }

}

// Optional for executing code
// after completion of a backtest.
// This block will not execute in
// live use as a live gekko is
// never ending.
strat.end = function() {
  // your code!
  console.log("highest=" + highest);
}

module.exports = strat;
