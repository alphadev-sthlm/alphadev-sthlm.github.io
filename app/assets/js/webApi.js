export default function () {
  const request = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    request.open("GET", "/data", true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        const resp = JSON.parse(request.responseText);
        resolve(resp);
      }
    };

    request.onerror = function () {
      reject("An error occured when fetchin election data");
      // There was a connection error of some sort
    };

    request.send();
  });
}
