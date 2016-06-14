'use strict';

const frequency = (function() {

    const
        stations = [],

        version = '1.0.0',

        tuneIn = (station, frequency, fn) => {
            stations.push({station, frequencies: [frequency], dial: fn});
        },

        broadcast = (station, frequency) => {
            stations.map(item => {
                if (item.station === station && item.frequencies.indexOf(frequency) > -1) {
                    return typeof item.dial === 'object' ? item.dial : item.dial();
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
frequency.tuneIn('poop', 'Alarm', someFunc);
frequency.broadcast('poop', 'Alarm');

function someFunc() {
    console.log('poop');
}
