'use strict';

const frequency = (function() {
    const

        stations = [],

        version = '1.0.0',

        // subscriber
        tuneIn = (station, frequency, fn) => {
            stations.push({station, frequencies: [frequency]});
            if (fn) {
                message()
            }
        },

        // publish
        broadcast = (station, frequency) => {
            const filtered = stations.map(item => {
                if (item.station === station ) {
                    return station;
                } else {
                    return;
                }
            });
            console.log(filtered);
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

    function message(...obj) {
        console.log('sdgds', obj);
        return obj;
    }

    return {
        version,
        tuneIn,
        tuneOut,
        broadcast,
        shutDown
    }

})();

// dummy content to subscribe to
frequency.tuneIn('poop', 'Alarm');
frequency.broadcast('poop', 'Alarm');
