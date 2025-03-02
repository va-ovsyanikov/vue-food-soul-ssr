export const  debounce = <T extends (...args: any[]) => void>(callee: T, timeoutMs: number) => {
  let lastCall: number | null = null
  let lastCallTimer: ReturnType<typeof setTimeout>

  return function(this: any, ...args: Parameters<T>) {
    const now = Date.now()

    if (lastCall && now - lastCall <= timeoutMs) {
      clearTimeout(lastCallTimer)
    }

    lastCall = now
    lastCallTimer = setTimeout(() => callee.apply(this, args), timeoutMs)
  }
}
