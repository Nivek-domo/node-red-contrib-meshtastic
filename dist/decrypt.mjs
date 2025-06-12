import { p as e } from "./index-yt5QFc7g.mjs";
const g = require("crypto"), f = {
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
}, h = (i) => {
  function E(P) {
    i.nodes.createNode(this, P);
    const r = this, u = P.key.length > 0 ? P.key : "1PG7OiApB1nwvP+rz05pAQ==";
    this.on("input", (c, n, T) => {
      const N = {
        emitDefaultValues: !0,
        enumAsInteger: !0
      }, t = c.payload.packet;
      if (t.encrypted != null)
        try {
          const s = Buffer.from(u, "base64"), p = _(t.id, t.from);
          let d = null;
          if (s.length === 16 ? d = "aes-128-ctr" : s.length === 32 ? d = "aes-256-ctr" : r.error(`Skipping decryption key with invalid length: ${s.length}`), d) {
            const A = g.createDecipheriv(d, s, p), a = Buffer.concat([A.update(Buffer.from(t.encrypted, "base64")), A.final()]);
            if (console.debug("Decrypt", t.encrypted, "with key", u, "and nonce", p.toString("base64"), "using", d, "result", a.toString("base64")), a)
              try {
                const o = new e.Mesh.Data().fromBinary(a).toJson(N);
                t.decoded = o;
                const l = o.portnum;
                if (f[l] === null)
                  console.debug(`No decoder set for portnum ${l}`);
                else {
                  const y = Buffer.from(o.payload, "base64"), m = f[l];
                  m instanceof TextDecoder ? (console.debug("TextDecoder detected. Decoding payload"), o.payload = m.decode(y)) : (console.debug(
                    "Decoder was not null and not a TextDecoder. Assuming Protobuf decoder and decoding payload"
                  ), o.payload = m.fromBinary(y).toJson(N));
                }
                console.debug(
                  `Decoded payload to JSON:
${JSON.stringify(o, null, 2)}`
                );
              } catch (o) {
                r.error(`could not decode payload: ${o}`);
              }
            else
              r.error("Failed to decrypt the message.");
          }
        } catch (s) {
          console.error(s, "Failed to decrypt", t.encrypted, "with key", u), r.error("Failed to decrypt due to an error");
        }
      n({
        payload: c.payload
      }), T();
    });
  }
  function _(P, r) {
    const u = BigInt(P), c = 0, n = Buffer.alloc(16);
    return n.writeBigUInt64LE(u, 0), n.writeUInt32LE(r, 8), n.writeUInt32LE(c, 12), n;
  }
  i.nodes.registerType("decrypt", E);
};
export {
  h as default
};
