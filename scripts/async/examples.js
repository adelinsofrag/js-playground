function requestSodaDetailsWithAJAX() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/scripts/async/soda.json", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
    xhr.send();
  }


  function requestSodaDetailsWithFetchAPI() {
    fetch("/scripts/async/soda.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }