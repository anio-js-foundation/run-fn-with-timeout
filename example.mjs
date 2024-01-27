import runFnWithTimeout from "./index.mjs"

function myFunction() {
	return new Promise(resolve => {
		setTimeout(resolve, 500, "hi")
	})
}

const result = await runFnWithTimeout(myFunction, 100)

// prints { value: null, timeout: true }
console.log(result)
