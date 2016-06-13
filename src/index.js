'use strict';

const frequency = (function() {

    const

    stations = [],

    version = () => {
        return '1.0.0';
    },

    tuneIn = ( station, frequency ) => {
        stations.push({station, frequencies: [frequency]});
        console.log(`${station} station and ${frequency} frequency saved successfully`);
    },

    tuneOut = ( station, frequency ) => {
        return archive.filter( () => {
            return channel === channel
        });
    },

    shutDown = () => {
        // resets an archive
    };

    return {
        version,
        tuneIn,
        tuneOut,
        stations,
        shutDown
    }

})();
