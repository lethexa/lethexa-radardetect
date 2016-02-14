var assert = require('assert');
var vecmat = require('lethexa-vecmat');
var radardetect = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../lib/') + 'radardetection.js');


describe('RadarSender', function () {
    describe('when sendpower=125663.70614W and distance=1000.0m', function () {
        it('should return power density of 0.00999999999971418', function () {
		var sender = new radardetect.RadarSender({
    			sndPower: 125663.70614, // 4*PI*10000.0
    			antennaGain: 1.0,
    			patternPropFactor: 1.0
		});

		var targetDistanceSquared = Math.pow(1000.0, 2.0);
		var powerDensityAtTarget = sender.calcPowerDensityAtTarget(
			targetDistanceSquared
		);

		assert.equal(0.00999999999971418, powerDensityAtTarget);
        });
    });
});


describe('RadarReceiver', function () {
    describe('when reflectpower=125663.70614W, target crosssection=1m and distance=1000.0m', function () {
        it('should return power density of 0.00999999999971418', function () {
		var sender = new radardetect.RadarSender({
    			sndPower: 125663.70614, // 4*PI*10000.0
    			antennaGain: 1.0,
    			patternPropFactor: 1.0
		});

		var targetDistanceSquared = Math.pow(1000.0, 2.0);
		var powerDensityAtTarget = sender.calcPowerDensityAtTarget(
			targetDistanceSquared,
			1.0
		);

		assert.equal(0.00999999999971418, powerDensityAtTarget);
        });
    });
});

