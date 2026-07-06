const blockedHostnames = new Set([
  "localhost",
  "localhost.localdomain"
]);

const privateIpv4Ranges = [
  /^10\./,
  /^127\./,
  /^169\.254\./,
  /^172\.(1[6-9]|2\d|3[0-1])\./,
  /^192\.168\./,
  /^0\./
];

export function parseSafeHttpUrl(input: string): URL {
  const url = new URL(input.trim());

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("A URL deve usar HTTP ou HTTPS.");
  }

  if (url.username || url.password) {
    throw new Error("A URL não deve conter usuário ou senha.");
  }

  const hostname = url.hostname.toLowerCase();

  if (blockedHostnames.has(hostname) || hostname.endsWith(".localhost")) {
    throw new Error("URLs locais não são permitidas.");
  }

  if (privateIpv4Ranges.some((range) => range.test(hostname))) {
    throw new Error("Endereços IP privados ou locais não são permitidos.");
  }

  return url;
}