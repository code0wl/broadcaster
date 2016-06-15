# Frequency-wave
A plug and play PubSub system that just works as if it were an FM radio :)))

### Why another publish and subscribe pattern you ask?
Simply because creating custom events that get fired syntactically in the browser is a very handy pattern. With thousands of implementations out in the wild and still it wasn't clear to see which one was memory conservative (this could be my own short-sidedness). Conserving memory is extremely important depending on how complex your application state is. Frequency wave focuses clearly on just that. Allowing you to remove namespaced events so you do not pullote your own global scopes with unnecessary memory usage.

### Solution
On of the solutions to this problem is to include a system that gives the developer the ability to flush out stations (trasmitters).

### Usage in the browser
Include the minified js file from npm by installing from npm repository and importing it in your build tool
```
npm i -S frequency-wave
```

####API (consider the following sequence and comments)
```
/*
* @param string station is the current namespace for your event
* @param string tuner the identifier for your event
* @wave object for the object you are passing
*/
frequency.tuneIn(station, tuner, wave);


/*
* @param string station the current namespace for your event
* @param string tuner the identifier for your event
*/
frequency.transmit(station, 'Alarm');


/*
* @param string station is the current namespace for your event
* @param string tuner the identifier for your event
*/
frequency.tuneOut(station, tuner);


frequency.tuneIn('FM', 'Alarm', firstAlarm); // creates listener for Alarm for the FM station, runs callback firstAlarm
frequency.tuneIn('FM', 'Alarm2', firstAlarm); // creates listener for Alarm2 for the FM station, runs callback firstAlarm
frequency.tuneIn('FM', 'Alarm', secondAlarm); // creates listener for Alarm for the AM station, runs callback secondAlarm

frequency.transmit('FM', 'Alarm'); // broadcasts a global wave containing the station and frequency
frequency.transmit('FM', 'Alarm2'); // will trigger firstAlarm

frequency.tuneOut('FM', 'Alarm'); // tune out the first alarm frequency on the FM station
frequency.transmit('FM', 'Alarm'); // will no longer work
frequency.transmit('FM', 'Alarm2'); // will still work (benefit: you are namespacing your pubsub events)

frequency.shutDown('FM'); // Station gets destroyed, no channel is listened to anymore and memory released to be allocated somewhere else

function firstAlarm() {
    console.log('I run firstAlarm');
}

function secondAlarm() {
    console.log('I run secondAlarm');
}
```

### Usage for this product
Anyone can contribute. The project is build on webpack.
You can get the project running with the following command
```
npm start
```
