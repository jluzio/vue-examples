export class Test {
  run() {
    console.log('es2017 start')
    this.waitTimeAsync()
    console.log('es2017 works!')
  }

  waitTimePromise(millis, result) {
    return new Promise((resolve, reject) => {
      const resolveData = () => { resolve(result) }
      setTimeout(resolveData, millis)
    })
  }

  waitFooPromise() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('foo')
      }, 10000)
    })
  }

  async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
  }

  async waitTimeAsync() {
    const promise = this.waitTimePromise(2000, 'waitTimeAsync-result')
    console.log('waiting for result')
    const result = await promise
    console.log('result', result)
  }
}
export default new Test()
