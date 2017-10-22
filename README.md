# Countdown

repo name: 'countdown' containing two js files, index.js and countdown.js

In countdown.js create a constructor called Countdown and attach it to the module's exports object.

The Countdown constructor should expect one parameter, a positive number indicating the number of seconds to count down

Instances of Countdown should inherit from events.EventEmitter

When a countdown instance is created, it should emit a secondElapsed event every second until it gets to zero, passing the current number of seconds remaining to any listeners that have been added

When zero is reached, Countdown instances should emit a done event

In index.js, require the countdown module and create an instance of Countdown that counts down from 10. Add to the instance a listener for the secondElapsed event that logs to the console the number of seconds remaining followed by an exclamation point. Add a listener for the done event that logs the string "lift off!"
