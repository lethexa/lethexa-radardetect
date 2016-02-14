var assert = require('assert');
var vecmat = require('lethexa-vecmat');
var radardetect = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../lib/') + 'radardetection.js');


/*
describe('quadEquation', function () {
    describe('when position=[1,2,3], velocity=[1,1,1] and dt=1.0', function () {
        it('should return a new position of [2,3,4]', function () {
		var position = new vecmat.Vector3d(1,2,3);
		var velocity = new vecmat.Vector3d(1,1,1);
		var dt = 1.0;
                var result = motionpredict.getPositionByVeloAndTime(position, velocity, dt);
                var expected = new vecmat.Vector3d(2,3,4);

                assert.deepEqual(expected, result);
        });
    })
});

*/
