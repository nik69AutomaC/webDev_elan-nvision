useEffect(() =>
{ const pc = new RTCPeerConnection() // Rest of your logic here }, [])const peerConnection = new RTCPeerConnection();const dataChannel = peerConnection.createDataChannel('foodOrder');

// Listen for incoming data on the data channel
dataChannel.addEventListener('message', event => {
  // Handle the incoming data
  const data = JSON.parse(event.data);
  if (data.type === 'order') {
    // Handle the order
    console.log('New order received:', data.payload);
  }
});

// Send an order to the server
function sendOrder(order) {
  // Create a new data object with the order payload
  const data = {
    type: 'order',
    payload: order
  };

  // Send the data over the data channel
  dataChannel.send(JSON.stringify(data));
}
 
 configuration: RTCConfiguration = {
    iceServers: [
      {
        urls: [
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };

    
