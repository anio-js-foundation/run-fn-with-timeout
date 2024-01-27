export default async function runFnWithTimeout(fn, timeout = 0, ...fn_args) {
	if (timeout === 0) {
		return await fn(...fn_args)
	}

	const timeout_symbol = Symbol()
	let timer_id

	const timer = new Promise(resolve => {
		timer_id = setTimeout(resolve, timeout, timeout_symbol)
	})

	const result = await Promise.race([fn(...fn_args), timer])

	clearTimeout(timer_id)

	const has_timed_out = result === timeout_symbol

	return {
		value: has_timed_out ? null : result,
		timeout: has_timed_out
	}
}
