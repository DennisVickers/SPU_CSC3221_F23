// Constructor to create an XHR object
class coreHTTP {

  /* <<< HTTP GET request >>> */
  async get(url) {
    const requestOptions = {
      method: "GET",
      headers: {"content-type": "application/json"}
    };
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const responseData = await response.json();
      return (Promise.resolve(responseData));
    } else {
      return (Promise.reject(response.status));
    }
  }
  
  /* <<< HTTP POST request >>> */
  async post(url, requestData) {
    const reqOptions = {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(requestData)};
    const response = await fetch(url, reqOptions);
    if (response.ok) {
      const responseData = await response.json();
      return (Promise.resolve(responseData));
    } else {
      return (Promise.reject(response.status));
    }
  }
  
  /* <<< HTTP PUT request >>> */
  async put(url, requestData) {
    const reqOptions = {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(requestData)};
    const response = await fetch(url, reqOptions);
    if (response.ok) {
      const responseData = await response.json();
      return (Promise.resolve(responseData));
    } else {
      return (Promise.reject(response.status));
    }
  }

  async delete(url) {
    const reqOptions = {
      method: "DELETE",
      headers: {"content-type": "application/json"}};
      const response = await fetch(url, reqOptions);
      if (response.ok) {
        return (Promise.resolve({id: "-01", name: "Delete successful"}));
      } else {
        return (Promise.reject(response.status));
      }
  }
}
