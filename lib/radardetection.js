
/**
 * Calculates power from powerdensity.
 * @method getPowerFromPowerDensity
 * @param powerDensity {Number} The powerdensity.
 * @param crossSection {Number} The cross section of the receiver or reflector.
 */
module.exports.calcPowerFromPowerDensity = function(powerDensity, crossSection) {
  return powerDensity * crossSection;
};


/**
 * This class implements the radar sender with its parameters. 
 * @class RadarSender
 * @constructor
 * @param options {Object} The radar sender settings.
 * <ul>
 *   <li>options.sndPower: The power of the sender.</li>
 *   <li>options.antennaGain: The antenna gain of the sender.</li>
 *   <li>options.patternPropFactor: The pattern propagation factor. </li>
 * </ul>
 */
module.exports.RadarSender = function(options) {
  options = options || {};
  var sndPower = options.sndPower || 0.0;
  var antennaGain = options.antennaGain || 1.0;
  var erp = sndPower * antennaGain;
  var patternPropFactor = options.patternPropFactor || 1.0;
  var patternPropFactorSquared = patternPropFactor * patternPropFactor;

  /**
   * Calculates the received power density at the target.
   * For performance reasons the squared distance is used.
   * @method calcPowerDensityAtTarget
   * @param distanceSquared {Number} The squared distance.
   * @param crossSection {Number} The cross section of the target.
   * @return {Number} The power density.
   */
  this.calcPowerDensityAtTarget = function(distanceSquared) {
    return (erp * patternPropFactorSquared) / (4.0 * Math.PI * distanceSquared);
  };
};


/**
 * This class implements the radar receiver with its parameters. 
 * @class RadarReceiver
 * @constructor
 * @param options {Object} The radar settings.
 * <ul>
 *   <li>options.antennaGain: The antenna gain of the receiver.</li>
 *   <li>options.patternPropFactor: The pattern propagation factor. </li>
 * </ul>
 */
module.exports.RadarReceiver = function(options) {
  options = options || {};
  var antennaGain = options.antennaGain || 1.0;
  var patternPropFactor = options.patternPropFactor || 1.0;
  var patternPropFactorSquared = patternPropFactor * patternPropFactor;

  /**
   * Calculates the received power density at the receiver.
   * For performance reasons the squared distance is used.
   * @method calcPowerDensityAtReceiver
   * @param distanceSquared {Number} The squared distance
   * @param powerFromTarget {Number} The power send from the target.
   * @return {Number} The power density.
   */
  this.calcPowerDensityAtReceiver = function(distanceSquared, powerFromTarget) {
    return (powerFromTarget * antennaGain * patternPropFactorSquared) / (4.0 * Math.PI * distanceSquared);
  };
};

