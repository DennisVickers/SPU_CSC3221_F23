// Instantiate the object
const http = new coreHTTP;

function ShowResponse(responseData) {
  let html = "<ul style='list-style:none'>";
  if (Array.isArray(responseData)) {
    responseData.forEach(user => {
      html += `<li>User ${user.id} - ${user.name}</li>`;
    })
  } else {
    html += `<li>User ${responseData.id} - ${responseData.name}</li>`;
  }
  document.querySelector("#response").innerHTML = html;
}

function ShowError(err) {
  html = `<p>${err}</p>`;
  document.querySelector("#response").innerHTML = html;
}

function sendRequest(reqType, targetURL) {
  let data;
  switch (reqType) {
    case "get": // Get users from the endpoint
      (async () => { // This is an IIFI function
        try {
          const responseData = await http.get(targetURL);
          ShowResponse(responseData);
        } catch (err) {
          ShowError(err);
        }
      })();  
      break;
    case "post": // Post (add) user to the endpoint
      requestData = {name:"Dennis Vickers",
                     username:"vickersd",
                     email:"vickersd@spu.edu"};
      (async() => {
        try {
          const responseData = await http.post(targetURL, requestData );
          ShowResponse(responseData);
        } catch (err) {
          ShowError(err);
        };
      })();
      break;
    case "put": // Put (update) user in the endpoint
      requestData = {id: 1,
              name:"Professor Vickers"};
      (async() => {
        try {
          const responseData = await http.put(targetURL, requestData )
          ShowResponse(responseData);
        } catch (err) {
          ShowError(err);
        }
      })();
      break;
    case "delete": // Delete user in the placeholder website
      (async() => {
        try {
          const responseData = await http.delete(targetURL)
          ShowResponse(responseData);
        } catch (err) {
          ShowError(err);
        }
      })();
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

