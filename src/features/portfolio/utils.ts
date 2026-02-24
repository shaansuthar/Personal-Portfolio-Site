export function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}
