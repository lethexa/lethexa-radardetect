var radardetect = require('.');
var targetDistanceSquared = Math.pow(10000.0, 2.0);
var targetCrossSection = 1.0;
var sendPower = 1000000;

console.log('Sendpower: ' + 1000000.0 + 'W')

//////////////////////
// The sending path //
//////////////////////

var sender = new radardetect.RadarSender({
    sndPower: sendPower,
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
console.log('Reflected power: ' + reflectedPower + 'W');


////////////////////////
// The receiving path //
////////////////////////

var receiver = new radardetect.RadarReceiver({
    antennaGain: 1.0,
    patternPropFactor: 1.0
});

var effectiveAperture = 1.0; // Antenna crossection
var powerDensityAtReceiver = receiver.calcPowerDensityAtReceiver(
    targetDistanceSquared,
    reflectedPower    
);
var receivedPower = radardetect.calcPowerFromPowerDensity(
    powerDensityAtReceiver,
    effectiveAperture
);
console.log('Received power: ' + receivedPower + 'W');
