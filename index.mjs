export default async function runFnWithTimeout(fn, timeout = 0, ...fn_args) {
	if (timeout === 0) {
		return await fn(...fn_args)
	}

	const timeout_symbol = Symbol()
	const timer = new Promise(resolve => setTimeout(resolve, timeout, timeout_symbol))

	const result = await Promise.race([fn(), timer])

	clearTimeout(timer)

	const has_timed_out = result === timeout_symbol

	return {
		value: has_timed_out ? null : result,
		timeout: has_timed_out
	}
}
