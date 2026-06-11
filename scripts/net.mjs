import { networkInterfaces } from "node:os";
import qrcode from "qrcode-terminal";
import { createServer } from "vite";

const server = await createServer({ server: { host: true } });
await server.listen();

const port = server.config.server.port ?? 5173;

const localIp = Object.values(networkInterfaces())
	.flat()
	.find((iface) => iface?.family === "IPv4" && !iface.internal)?.address;

const url = `http://${localIp}:${port}`;

console.log(`\n  Network: ${url}\n`);
qrcode.generate(url, { small: true });
