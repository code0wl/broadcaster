'use strict';

const frequency = (function() {

    const
        stations = [],

        version = '1.0.0',

        // subscriber
        tuneIn = (station, frequency, fn) => {
            stations.push({station, frequencies: [frequency], dial: fn});
        },

        // publish
        broadcast = (station, frequency) => {
            stations.map(item => {
                if (item.station === station && item.frequencies.indexOf(frequency) > -1) {
                    if (typeof item.dial === 'object') {
                        console.log(item.dial);
                        return item.dial;

                    } else {
                        return item.dial();
                    }
                }
            });
        },

        tuneOut = ( station, frequency ) => {
            return stations.filter( () => {
                return frequency === station.frequency;
            });
        },

        shutDown = station => {
            stations.map((station, index) => {
                if (station === frequency) {
                    stations.splice(index, 1);
                }
            });
        };

    return {
        version,
        tuneIn,
        tuneOut,
        broadcast,
        shutDown
    }

})();

// dummy content to subscribe to
frequency.tuneIn('poop', 'Alarm', {item: 1});

frequency.broadcast('poop', 'Alarm');

function someFunc() {
    console.log('poop');
}
