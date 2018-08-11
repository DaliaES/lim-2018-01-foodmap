const urlRestaurantes = '../data/restaurant.json';
const xhrData = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = callback;
  xhr.send();
}
const getData = () => {
  data = JSON.parse(event.target.responseText);
  return data;
}
