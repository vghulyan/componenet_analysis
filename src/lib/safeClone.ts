// ─── helper ────────────────────────────────────────────────────────────
import { execSync, ExecSyncOptions } from "child_process";

export function safeClone(repoUrl: string, cloneDir: string) {
  const cmd = [
    "git",
    "-c",
    "core.longpaths=true", // ← allow >260-char paths on Windows
    "clone",
    "--depth",
    "1", // shallow
    "--filter=blob:none", // tree only, no large blobs
    repoUrl,
    cloneDir,
  ].join(" ");

  const opts: ExecSyncOptions = {
    stdio: "pipe", // capture stdout + stderr
    encoding: "utf8",
    env: { ...process.env, GIT_LFS_SKIP_SMUDGE: "1" }, // skip LFS binaries
    maxBuffer: 10 * 1024 * 1024, // 10 MB - enlarge default 1 MB
  };

  try {
    execSync(cmd, opts);
  } catch (e) {
    const err = e as { status?: number; stderr?: string };
    // use first stderr line as the message
    const firstLine = (err.stderr ?? "").split(/\r?\n/).find(Boolean) ?? "";
    throw new Error(
      firstLine || `git clone failed with exit code ${err.status ?? "unknown"}`
    );
  }
}
// ───────────────────────────────────────────────────────────────────────
