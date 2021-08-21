const renderToDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

const showForm = () => {
  document.querySelector("#button-div").innerHTML = "";
  const content = `<div class="card m-3 justify-content-center">
                          <div class="card-body text-center">  
                              <h4>
                                  Enter First Year's Name
                              </h4>
                              <div id="error-message"></div>
                              <div class="d-flex col-md-6 offset-md-3">
                                  <label for="inlineFormInput">Student: </label>
                                  <input type="text" class="form-control mx-3" id="student-name" placeholder="Luna Lovegood" required>
                                 <button id="sort" class="btn btn-primary mb-2">Sort!</button>
                              </div>
                          </div>
                      </div>`;
  renderToDOM("#sorting-form", content);
  document
    .querySelector("#student-name")
    .addEventListener("keyup", addStudentToArray); // this could have easily been accomplished by using a form tag instead of using separate form elements as form submits on enter key press also
};

const cardCreator = (divId, array) => {
  let card = "";
  for (let i = 0; i < array.length; i++) {
    if (divId.includes("voldermort")) {
      card += `<div class="card m-3" style="width: 18rem;">
                      <img class="card-img-top" src="https://vignette.wikia.nocookie.net/harrypotter/images/d/d4/Death_Eaters_WBST.png/revision/latest?cb=20161205041948" alt="Card image cap">
                      <div class="card-body">
                          <p class="card-text">Sadly, <b>${array[i].name}</b> went over to the dark side!</p>
                      </div>
                  </div>`;
    } else {
      card += `<div class="card m-3" style="min-width: 300px;" id="${i}">
                      <div class="row no-gutters">
                          <div class="col-md-4" style="min-height: 150px; background-color: ${
  houseColors[array[i].house]
}">
                          </div>
                          <div class="col-md-8">
                              <div class="card-body">
                                  <h5 class="card-title">${array[i].name}</h5>
                                  <p class="card-text">${array[
    i
  ].house.toUpperCase()}</p>
                                  <button type="button" id="${i}" class="btn btn-danger">EXPEL</button>
                              </div>
                          </div>
                      </div>
                  </div>`;
    }
  }

  renderToDOM(divId, card);
};
