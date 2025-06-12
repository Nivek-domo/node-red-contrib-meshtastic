import { p as o } from "./index-yt5QFc7g.mjs";
const u = {
  [o.Portnums.PortNum.UNKNOWN_APP]: null,
  [o.Portnums.PortNum.TEXT_MESSAGE_APP]: new TextEncoder("ascii"),
  [o.Portnums.PortNum.REMOTE_HARDWARE_APP]: new o.RemoteHardware.HardwareMessage(),
  [o.Portnums.PortNum.POSITION_APP]: new o.Mesh.Position(),
  [o.Portnums.PortNum.NODEINFO_APP]: new o.Mesh.User(),
  [o.Portnums.PortNum.ROUTING_APP]: new o.Mesh.Routing(),
  [o.Portnums.PortNum.ADMIN_APP]: new o.Admin.AdminMessage(),
  [o.Portnums.PortNum.TEXT_MESSAGE_COMPRESSED_APP]: null,
  [o.Portnums.PortNum.WAYPOINT_APP]: new o.Mesh.Waypoint(),
  [o.Portnums.PortNum.AUDIO_APP]: null,
  [o.Portnums.PortNum.DETECTION_SENSOR_APP]: new TextEncoder(),
  [o.Portnums.PortNum.REPLY_APP]: new TextEncoder("ascii"),
  [o.Portnums.PortNum.IP_TUNNEL_APP]: null,
  [o.Portnums.PortNum.SERIAL_APP]: null,
  [o.Portnums.PortNum.STORE_FORWARD_APP]: new o.StoreForward.StoreAndForward(),
  [o.Portnums.PortNum.RANGE_TEST_APP]: new TextEncoder("ascii"),
  [o.Portnums.PortNum.TELEMETRY_APP]: new o.Telemetry.Telemetry(),
  [o.Portnums.PortNum.ZPS_APP]: null,
  [o.Portnums.PortNum.SIMULATOR_APP]: null,
  [o.Portnums.PortNum.TRACEROUTE_APP]: null,
  [o.Portnums.PortNum.NEIGHBORINFO_APP]: new o.Mesh.NeighborInfo(),
  [o.Portnums.PortNum.PRIVATE_APP]: null,
  [o.Portnums.PortNum.ATAK_FORWARDER]: null
}, y = (a) => {
  function d(l) {
    a.nodes.createNode(this, l), this.on("input", (e, s, c) => {
      if (e.payload) {
        const m = {
          emitDefaultValues: !0,
          enumAsInteger: !0
        };
        let n = null;
        const p = e.payload.packet.from;
        e.payload.packet.from = 0;
        const i = e.payload.packet.to;
        e.payload.packet.to = 0;
        const N = e.payload.packet.id;
        e.payload.packet.id = 0, e.payload.packet.decoded.payload && (n = e.payload.packet.decoded.payload, delete e.payload.packet.decoded.payload);
        try {
          const t = o.Mqtt.ServiceEnvelope.fromJson(e.payload, m);
          t.packet.from = p, t.packet.to = i, t.packet.id = N;
          const r = t.packet.payloadVariant.value.portnum;
          if (u[r] === null)
            console.debug(`No encoder set for portnum ${r}`);
          else {
            const P = u[r];
            P instanceof TextEncoder ? (console.debug("TextEncoder detected. Encoding payload", n), t.packet.payloadVariant.value.payload = Buffer.from(n)) : (console.debug(
              "Encoder was not null and not a TextEncoder. Assuming Protobuf encoder and encoding payloadObject"
            ), t.packet.payloadVariant.value.payload = P.fromJson(n).toBinary()), console.debug(
              `Encoded payload to binary:
${JSON.stringify(t, null, 2)}`
            );
          }
          const A = Buffer.from(t.toBinary());
          s({
            payload: A
          });
        } catch (t) {
          throw console.error(`could not encode payload: ${t}`), t;
        }
      }
      c();
    });
  }
  a.nodes.registerType("encode", d);
};
export {
  y as default
};
