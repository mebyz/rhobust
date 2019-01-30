"use strict"

document.addEventListener("DOMContentLoaded", () => {

  // Grab DOM items
  let newrhobustId = document.getElementById('new-rhobust-id')
  let n = document.getElementById('n')
  let callrhobustId = document.getElementById('call-rhobust-id')
  let name = document.getElementById('name')
  let key = document.getElementById('key')
  let resultP = document.getElementById('status')

  // Event Listeners
  document.getElementById('register').addEventListener('click', register)
  document.getElementById('call').addEventListener('click', call)

  /**
   * Grabs rhobustId and winning number of calls from DOM and registers
   * a new rhobust contract
   */
  function register(){
    // Validate form data
    if (newrhobustId.value === "" || n.value === ""){
      console.log("rhobustId and Winning Caller are required. No rhobust Registered.")
      return
    }

    // Setup the request
    let body = {
      id: newrhobustId.value,
      n: parseInt(n.value, 10),
    }

    // Actually send it
    makePost('/register', body)
    .then(data => {
      console.log(data.message)
    })

    // Clear the DOM to prevent double posts
    newrhobustId.value = ""
  }

  /**
   * Grabs rhobustId and username from DOM and calls the
   * corresponding rhobust. Reports result in DOM.
   */
  function call(){
    // Validate form data
    if (callrhobustId.value === "") {
      console.log("rhobustId is required. No Call Made.")
      return
    }

    // Setup the request
    let body = {
      id: callrhobustId.value,
      name: name.value,
      key: key.value,
    }

    // Actually send it
    makePost('/call', body)
    .then(data => {

      // See whether we found any data
      if (!data.success) {
        console.log("No such rhobust found in RChain")
      }
      else {
        resultP.innerHTML = data.message
      }
    })
  }

  /**
   * Abstract the boring part of making a post request
   * @param route The request destination as a string. ex: '/call'
   * @param body An object of the data to be passed
   * @return A promise for a response object
   */
  function makePost(route, body){
    let request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body)
    }

    return fetch(route, request)
    .then(res => {return res.json()})
  }
})
