import { execSync } from "node:child_process";

const port = Number(process.argv[2] ?? 5173);
const isWindows = process.platform === "win32";

function findPids(targetPort) {
	try {
		if (isWindows) {
			const output = execSync(`netstat -ano -p tcp | findstr :${targetPort}`, {
				encoding: "utf8",
			});
			return [
				...new Set(
					output
						.split("\n")
						.map((line) => line.trim().split(/\s+/).pop())
						.filter((pid) => pid && /^\d+$/.test(pid)),
				),
			];
		}

		const output = execSync(`lsof -ti tcp:${targetPort}`, { encoding: "utf8" });
		return output.split("\n").filter(Boolean);
	} catch {
		return [];
	}
}

function killPid(pid) {
	try {
		execSync(isWindows ? `taskkill /PID ${pid} /F` : `kill -9 ${pid}`, {
			stdio: "ignore",
		});
		return true;
	} catch {
		return false;
	}
}

const pids = findPids(port);

if (pids.length === 0) {
	process.exit(0);
}

const killed = pids.filter(killPid);

if (killed.length > 0) {
	console.log(`  Freed port ${port} (killed ${killed.join(", ")})\n`);
}
