const UIController = (function () {
  const Selectors = {
    inputName: "div#inputHero > .form-control",
    toAdd: "#toAdd",
  };
  let Results = [];
  const ApiData = [];
  const toAdd = document.querySelector(Selectors.toAdd); 
  // Load Event Listeners
  const loadEventListeners = function () {
    // add product event
    document.querySelector(Selectors.inputName).addEventListener("keyup", searchElement);
  };

  var searchElement = (e) => {
    Results = [];
    let deger = e.target.value.trim();
    if (deger) {
      createCard(deger);
    } else {
      toAdd.innerHTML = "";
    }
  };
  var createCard = (deger) => {
    ApiData.forEach((element) => {
      if (element.name.toLowerCase().includes(deger.toLowerCase())) {
        Results.push(element);
      }
    });
    toAdd.innerHTML = "";
    Results.map((element) => {
      const htm = `
     <div class="aa">
     <div class="cardOne card mb-3  mt-5" style="width: 300px">
       <div class="row g-0">
         
         <div class="col-md-6 w-100">
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
       toAdd.innerHTML += htm;
    });
  };
  var getExternalApi = () => {
    fetch("https://swapi.dev/api/people/")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        res.results.forEach((element) => {
          ApiData.push(element);
        });
      }).catch((error) => {
        console.log(error);
      });
  }
  return {
    init: function () {
        getExternalApi();
        loadEventListeners();
    }
  };
})();

UIController.init();