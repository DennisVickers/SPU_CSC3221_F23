async function getData1() {
  return "Data retrieved";
}
getData1().then (data => console.log(data));

async function getData3() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
}
getData3().then (data => console.log(data));

async function getData4() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }

}
getData4().then (data => console.log(data));
