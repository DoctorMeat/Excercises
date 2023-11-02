$(document).ready(function () {
  // Function to get all cupcakes from the API and add them to the page
  function getCupcakes() {
    axios
      .get("/api/cupcakes")
      .then((response) => {
        const cupcakes = response.data.cupcakes;
        const cupcakeList = $("#cupcake-list");
        cupcakeList.empty();
        cupcakes.forEach((cupcake) => {
          // Check if the image field is empty and assign the default image if no URL is provided
          const imageUrl = cupcake.image
            ? cupcake.image
            : "https://tinyurl.com/demo-cupcake";
          const row = `<tr>
                                  <td>${cupcake.flavor}</td>
                                  <td>${cupcake.size}</td>
                                  <td>${cupcake.rating}</td>
                                  <td><img src="${imageUrl}" alt="Cupcake Image" style="width: 200px; height: 200px;"></td>
                                  <td><button class="btn btn-primary update-btn" data-id="${cupcake.id}">Update</button></td>
                                  <td><button class="btn btn-danger delete-btn" data-id="${cupcake.id}">Delete</button></td>
                              </tr>`;
          cupcakeList.append(row);
        });

        // Attach event listeners to the update and delete buttons
        $(".update-btn").click(updateCupcake);
        $(".delete-btn").click(deleteCupcake);
      })
      .catch((error) => console.error(error));
  }

  function updateCupcake() {
    const cupcakeId = $(this).data("id");
    const row = $(this).closest("tr");
    const flavor = row.find("td:eq(0)").text();
    const size = row.find("td:eq(1)").text();
    const rating = row.find("td:eq(2)").text();
    const image = row.find("td:eq(3) img").attr("src");

    // Populate the form with the cupcake's current information
    $("#flavor").val(flavor);
    $("#size").val(size);
    $("#rating").val(rating);
    $("#image").val(image);

    $("#cupcake-form")
      .off("submit")
      .on("submit", function (event) {
        event.preventDefault();
        const updatedCupcake = {
          flavor: $("#flavor").val(),
          size: $("#size").val(),
          rating: parseFloat($("#rating").val()),
          image: $("#image").val() || null,
        };

        axios
          .patch(`/api/cupcakes/${cupcakeId}`, updatedCupcake)
          .then((response) => {
            // Call the getCupcakes function to update the list
            getCupcakes();
          })
          .catch((error) => console.error(error));

        // Reset the form fields after submission
        $("#flavor").val("");
        $("#size").val("");
        $("#rating").val("");
        $("#image").val("");
      });
  }

  // Function to handle the delete button click
  function deleteCupcake() {
    const cupcakeId = $(this).data("id");
    // Implement the logic to delete the cupcake
    axios
      .delete(`/api/cupcakes/${cupcakeId}`)
      .then((response) => {
        // Call the getCupcakes function to update the list
        getCupcakes();
      })
      .catch((error) => console.error(error));
  }

  // Handle form submission to add a new cupcake
  $("#cupcake-form").submit(function (event) {
    event.preventDefault();
    const flavor = $("#flavor").val();
    const size = $("#size").val();
    const rating = parseFloat($("#rating").val());
    const image = $("#image").val() || null; // Assign null if no image URL is provided
    const newCupcake = { flavor, size, rating, image };

    axios
      .post("/api/cupcakes", newCupcake)
      .then((response) => {
        // Call the getCupcakes function to update the list
        getCupcakes();
      })
      .catch((error) => console.error(error));

    // Reset the form fields after submission
    $("#flavor").val("");
    $("#size").val("");
    $("#rating").val("");
    $("#image").val("");
  });

  // Call the getCupcakes function when the page loads
  getCupcakes();
});
