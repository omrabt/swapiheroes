const inputName = document.querySelector("div#inputHero > .form-control");
const deneme = document.querySelector("#toAdd");
let Results = [];
const ApiData = [];
function eventListeners() {
  inputName.addEventListener("keyup", searchElement);
}
let searchElement = (e) => {
  Results = [];
  let deger = e.target.value.trim();
  if (deger) {
    createCard(deger);
  } else {
    deneme.innerHTML = "";
  }
};
function createCard(deger) {
  ApiData.forEach((element) => {
    if (element.name.toLowerCase().includes(deger.toLowerCase())) {
      Results.push(element);
    }
  });
  deneme.innerHTML = "";
  Results.map((element) => {
    const htm = `
    <div class="d-flex justify-content-center ">
    <div class="cardOne card mb-3  mt-5" style="max-width: 400px">
      <div class="row g-0">
        
        <div class="col-md-6">
          <div class="card-body">
            <h5  class="name card-title">${element.name}</h5>
            <div class="row">
              <div class="col-6"><strong>gender</strong></div>
              <div  class="mass col-6">male</div>
            </div>
            <div class="row">
              <div class="col-6"><strong>Mass</strong></div>
              <div  class="mass col-6">${element.mass}</div>
            </div>
            <div class="row">
              <div class="col-6"><strong>height</strong></div>
              <div  class="mass col-6">${element.height}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      `;
    deneme.innerHTML += htm;
  });
}
function getExternalApi() {
  fetch("https://swapi.dev/api/people/")
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      res.results.forEach((element) => {
        ApiData.push(element);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
getExternalApi();
eventListeners();
