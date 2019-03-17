//
// Adapters for browsers
//

// Handles browser prefixes
// https://www.npmjs.com/package/webrtc-adapter
// https://github.com/webrtc/adapter
require('webrtc-adapter');

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

  // WebSocket
  WebSocket: window.WebSocket,

  // Worker
  Worker: window.Worker
}

module.exports = Adapters;
