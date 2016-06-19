'use strict';

window.frequency = (function() {

    const

    stations = [],

    version = '1.1.7',

    // Register station, frequency and transmit to make available to listeners
    tuneIn = (station, tuner, wave) => {
        stations.push({station, frequencies: [tuner], amplitude: wave});
    },

    // Broadcast station and frequency to all listeners
    transmit = (station, tuner) => {
        return stations.map(item => {
            if (item.station === station && item.frequencies.includes(tuner)) {
                return typeof item.amplitude === 'object' ? item.amplitude : item.amplitude();
            }
        });
    },

    // Tuneout a frequency
    tuneOut = (station, tuner) => {
        return stations.map(item => {
            if (item.station === station && item.frequencies.includes(tuner)) {
                item.frequencies.pop();
            }
        });
    },

    // shotdown a station that no longer has listeners
    shutDown = station => {
        stations.map(item => {
            if (item.station === station) {
                stations.splice(stations.includes(item));
            }
        });
    };

    return {
        version,
        stations,
        tuneIn,
        tuneOut,
        transmit,
        shutDown
    }

})();

export default frequency;
