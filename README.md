lethexa-radardetect
-------------------

A library for radar detection.

Installation
------------

	npm install
	grunt

Usage
-----

	var radardetect = require('lethexa-radardetect');
        var targetDistanceSquared = Math.pow(10000.0, 2.0);
        var targetCrossSection = 1.0;

	//////////////////////
	// The sending path //
	//////////////////////

	var sender = new radardetect.RadarSender({
		sndPower: 1000000,
		antennaGain: 1.0,
		patternPropFactor: 1.0
	});

	var targetDistanceSquared = Math.pow(10000.0, 2.0);
	var targetCrossSection = 1.0;
	var powerDensityAtTarget = sender.calcPowerDensityAtTarget(
		targetDistanceSquared
	);
	var reflectedPower = radardetect.calcPowerFromPowerDensity(
		powerDensityAtTarget, 
		targetCrossSection
	);
	console.log('Reflected power: ' + reflectedPower);


	////////////////////////
	// The receiving path //
	////////////////////////

        var receiver = new radardetect.RadarReceiver({
                antennaGain: 1.0,
                patternPropFactor: 1.0
        });

        var effectiveAperture = 1.0; // Antenna crossection
        var powerDensityAtReceiver = receiver.calcPowerDensityAtReceiver(
                targetDistanceSquared
        );
        var receivedPower = radardetect.calcPowerFromPowerDensity(
                powerDensityAtReceiver,
                effectiveAperture
        );
        console.log('Received power: ' + receivedPower);
