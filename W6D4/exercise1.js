let url = "https://javascript.info/article/promise-chaining/user.json";
async function loadJson(url) {
  const response = await fetch(url);
    if (response.status == 200) {
        return await response.json();
        
    } else {
        throw new Error(response.status);
    }
}

// loadJson('http://httpstat.us/500')
//   .catch(alert); // Error: 500

  let result = loadJson(url);
  console.log(result);
  
// Allows to do catch to the load json promise
  //let result = loadJson(url).catch(alert);