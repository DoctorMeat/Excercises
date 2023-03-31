console.log("Let's get this party started!");

const $gifCanvas = $("#gif-canvas");
const $searchInput = $("#search");

function addGif(res) {
  let gifResults = res.data.length;
  if (gifResults) {
    let random = Math.floor(Math.random() * gifResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[random].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifCanvas.append($newCol);
  } else{
    alert("No Matching Results. Try Again.")
  }
}

$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});

$("#remove").on("click", function() {
  $gifCanvas.empty();
});