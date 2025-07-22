/* lib/zbClassToSdk.ts ------------------------------------------------------- */

/**
 * Convert a className that starts with `zb-` into a pseudo-component name
 * understood by the reporter.                           *
 *   "zb-button-primary-alternative" → "SDKClassButtonPrimaryAlternative"
 *
 * Returns `null` when the token does not begin with `zb-`.
 */
export function zbClassToSdkComponent(cls: string): string | null {
  if (!cls.startsWith("zb-")) return null;

  // everything after "zb-" → split at '-' and CamelCase it
  const camel = cls
    .slice(3)
    .split("-")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

  return `SDKClass${camel}`;
}
