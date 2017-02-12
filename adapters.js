//
// Adapters for browsers
//

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
  IceCandidate: window.RTCIceCandidate
}

module.exports = Adapters;
