export default function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Pick<T, K> {
  return Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]])) as Pick<T, K>;
}
