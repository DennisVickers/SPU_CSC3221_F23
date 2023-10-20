// Define an async function that fetches data from a JSON API
async function getData() {
  try {
    // Use fetch API to fetch data from a URL
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Output the fetched data
    document.getElementById("output").innerHTML = `
      <h2>Retrieved Data</h2>
      <p>ID: ${data.id}</p>
      <p>Title: ${data.title}</p>
      <p>Completed: ${data.completed}</p>
    `;
  } catch (error) {
    // If an error occurs, log it to the console
    console.error("Fetch failed:", error);
  }
}

// Attach the getData function to button click
document.getElementById("getButton").addEventListener("click", getData);