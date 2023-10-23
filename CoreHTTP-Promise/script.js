// Instantiate the object
const http = new coreHTTP;

function ProcessGet(err, res) {
  let output;
  if (err) {
    output = `<p>${err}</p>`;
  } else {
    const users = JSON.parse(res);
    output = "<ul style=\"list-style:none\">";
    users.forEach((user) => {
      output += `<li>User ${user.id} - ${user.name}</li>`
    })
    output += "</ul>";
  }
  document.querySelector("#response").innerHTML = output;
}

function ProcessPost(err, res) {
  let output;
  if (err) {
    output = `<p>${err}</p>`;
  } else {
    const user = JSON.parse(res);
    output = "<ul style=\"list-style:none\">";
    output += `<li>User ${user.id} - ${user.name}</li>`
    output += "</ul>";
  }
  document.querySelector("#response").innerHTML = output;
}

function ProcessPut(err, res) {
  let output;
  if (err) {
    output = `<p>${err}</p>`;
  } else {
    const user = JSON.parse(res);
    output = "<ul style=\"list-style:none\">";
    output += `<li>User ${user.id} - ${user.name}</li>`
    output += "</ul>";
  }
  document.querySelector("#response").innerHTML = output;
}

function ProcessDelete(err, res) {
  let output;
  if (err) {
    output = `<p>${err}</p>`;
  } else {
    output = "<ul style=\"list-style:none\">";
    output += `<li>${res}</li>`
    output += "</ul>";
  }
  document.querySelector("#response").innerHTML = output;
}

function sendRequest(reqType, targetURL) {
  let data;
  switch (reqType) {
    case "get": // Get users from the endpoint
      // http.get(targetURL, ProcessGet);
      http.get(targetURL)
      .then((resp) => ProcessGet(null,resp))
      .catch((err) => ProcessGet(err));
      break;
    case "post": // Post (add) user to the endpoint
      data = {name:"Dennis Vickers",
      username:"vickersd",
      email:"vickersd@spu.edu"};
      // http.post(targetURL, data, ProcessPost);
      http.post(targetURL, data)
      .then((resp) => ProcessPost(null,resp))
      .catch((err) => ProcessPost(err));
      break;
    case "put": // Put (update) user in the endpoint
      data = {id: 1,
              name:"Professor Vickers"};
      // http.put(targetURL, data, ProcessPut);
      http.put(targetURL, data)
      .then((resp) => ProcessPut(null,resp))
      .catch((err) => ProcessPut(err));
      break;
    case "delete": // Delete user in the placeholder website
      // http.delete(targetURL, ProcessDelete);
      http.delete(targetURL)
      .then((resp) => ProcessDelete(null,resp))
      .catch((err) => ProcessDelete(err))
      break;            
  }
}

// Add the listener to the SEND button
document.querySelector("#SendReq").addEventListener("click", (e) => {
  const radioButtons = document.querySelectorAll('input[name="HTTPtype"');
  const route = document.querySelector("#route").value;
  let reqType;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      reqType = radioButton.value;
      break;
    }
  }
  sendRequest(reqType,route);

  e.preventDefault();
});

