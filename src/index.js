'use strict';

window.frequency = (function() {

    const

        stations = [],

        version = '1.0.0',

        // Register station, frequency and wave to make available to listeners
        tuneIn = (station, frequency, wave) => {
            stations.push({station, frequencies: [frequency], dial: wave});
        },

        // Broadcast station and frequency to all listeners
        broadcast = (station, frequency) => {
            return stations.filter(item => {
                if (item.station === station && item.frequencies.indexOf(frequency) > -1) {
                    return typeof item.dial === 'object' ? item.dial : item.dial();
                }
            });
        },

        // Tuneout a frequency
        tuneOut = ( station, frequency ) => {
            return stations.filter( item => {
                if (item.station === station && item.frequencies.indexOf(frequency) > -1) {
                    item.frequencies.pop();
                }
            });
        },

        // shotdown a station
        shutDown = station => {
            stations.filter( item => {
                if (item.station === station) {
                    item.delete;
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
