import { p as e } from "./index-yt5QFc7g.mjs";
const a = {
  [e.Portnums.PortNum.UNKNOWN_APP]: null,
  [e.Portnums.PortNum.TEXT_MESSAGE_APP]: new TextDecoder(),
  [e.Portnums.PortNum.REMOTE_HARDWARE_APP]: new e.RemoteHardware.HardwareMessage(),
  [e.Portnums.PortNum.POSITION_APP]: new e.Mesh.Position(),
  [e.Portnums.PortNum.NODEINFO_APP]: new e.Mesh.User(),
  [e.Portnums.PortNum.ROUTING_APP]: new e.Mesh.Routing(),
  [e.Portnums.PortNum.ADMIN_APP]: new e.Admin.AdminMessage(),
  [e.Portnums.PortNum.TEXT_MESSAGE_COMPRESSED_APP]: null,
  [e.Portnums.PortNum.WAYPOINT_APP]: new e.Mesh.Waypoint(),
  [e.Portnums.PortNum.AUDIO_APP]: null,
  [e.Portnums.PortNum.DETECTION_SENSOR_APP]: new TextDecoder(),
  [e.Portnums.PortNum.REPLY_APP]: new TextDecoder("ascii"),
  [e.Portnums.PortNum.IP_TUNNEL_APP]: null,
  [e.Portnums.PortNum.SERIAL_APP]: null,
  [e.Portnums.PortNum.STORE_FORWARD_APP]: new e.StoreForward.StoreAndForward(),
  [e.Portnums.PortNum.RANGE_TEST_APP]: new TextDecoder("ascii"),
  [e.Portnums.PortNum.TELEMETRY_APP]: new e.Telemetry.Telemetry(),
  [e.Portnums.PortNum.ZPS_APP]: null,
  [e.Portnums.PortNum.SIMULATOR_APP]: null,
  [e.Portnums.PortNum.TRACEROUTE_APP]: null,
  [e.Portnums.PortNum.NEIGHBORINFO_APP]: new e.Mesh.NeighborInfo(),
  [e.Portnums.PortNum.PRIVATE_APP]: null,
  [e.Portnums.PortNum.ATAK_FORWARDER]: null
}, A = (P) => {
  function c(l) {
    P.nodes.createNode(this, l), this.on("input", (u, m, i) => {
      if (Buffer.isBuffer(u.payload)) {
        const o = e.Mqtt.ServiceEnvelope.fromBinary(u.payload);
        if (!o.packet)
          return console.debug(
            "No packet in ServiceEnvelope. Exiting without emitting msg"
          ), null;
        const d = {
          emitDefaultValues: !0,
          enumAsInteger: !0
        };
        console.debug("Serializing ServiceEnvelope to JSON for output");
        const r = o.toJson(d);
        switch (o.packet.payloadVariant.case) {
          case "encrypted":
            console.debug(
              "Payload was encrypted. Returning serialized ServiceEnvelope"
            );
            break;
          case "decoded": {
            try {
              const t = o.packet.payloadVariant.value.portnum;
              if (a[t] === null) {
                console.debug(`No decoder set for portnum ${t}`);
                break;
              }
              const { payload: s } = o.packet.payloadVariant.value, n = a[t];
              n instanceof TextDecoder ? (console.debug("TextDecoder detected. Decoding payload"), r.packet.decoded.payload = n.decode(s)) : (console.debug(
                "Decoder was not null and not a TextDecoder. Assuming Protobuf decoder and decoding payload"
              ), r.packet.decoded.payload = n.fromBinary(s).toJson(d)), console.debug(
                `Decoded payload to JSON:
${JSON.stringify(r, null, 2)}`
              );
            } catch (t) {
              console.error(`could not decode payload: ${t}`);
            }
            break;
          }
        }
        console.debug("Outputting payload from decode node"), m({
          payload: r
        });
      }
      i();
    });
  }
  P.nodes.registerType("decode", c);
};
export {
  A as default
};
