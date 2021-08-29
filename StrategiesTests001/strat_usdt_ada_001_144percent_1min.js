// binance	USDT	ADA	2020-06-01 12:57	2021-08-27 20:57	1 year, 2 months, 3 weeks, 5 days, 5 hours

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
strat.check = function(candle) {

  //console.log(candle.high/candle.low);
  if (done === false && (candle.high/candle.low > 1.048)) {
    // your code!
    this.advice({
      direction: 'long', // or short
      trigger: { // ignored when direction is not "long"
        type: 'trailingStop',
        trailPercentage: 10
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
}

module.exports = strat;
