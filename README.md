# @anio-js-core-foundation/run-fn-with-timeout

Run a function with a timeout.

```js
import runFnWithTimeout from "@anio-js-core-foundation/run-fn-with-timeout"

function myFunction() {
	return new Promise(resolve => {
		setTimeout(resolve, 500, "hi")
	})
}

const result = await runFnWithTimeout(myFunction, 100)

// prints { value: null, timeout: true }
console.log(result)
```
