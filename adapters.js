//
// Adapters for browsers
//

// Handle browser prefixes
// https://www.npmjs.com/package/webrtc-adapter
require('webrtc-adapter');
var Bluebird = require('bluebird');

var Adapters = {
  // WebCrypto API
  // https://www.w3.org/TR/WebCryptoAPI/
  crypto: window.crypto,

  // Encoding API
  // https://www.w3.org/TR/encoding/
  TextEncoder: window.TextEncoder,
  TextDecoder: window.TextDecoder,

  // WebRTC
  // https://www.w3.org/TR/webrtc/
  RTCPeerConnection: window.RTCPeerConnection,
  SessionDescription: window.RTCSessionDescription,
  IceCandidate: window.RTCIceCandidate,

  // Promise
  Promise: Bluebird
}

module.exports = Adapters;
