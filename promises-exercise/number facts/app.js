let favNumber = 7;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then((data) => {
  console.log(data);
});

// 2.
let favNumbers = [4, 7, 23, 25];
favNumbers.forEach((number) => {
  $.getJSON(`${baseURL}/${number}?json`).then((data) => {
    console.log(data);
  });
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
