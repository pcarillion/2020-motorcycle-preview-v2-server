const hbs = require("hbs");


hbs.registerHelper("createEngineClass", function(number) {
    if (number < 500) return "smallEngine";
    if (number > 500 && number < 766) return "midEngine";
    if (number > 766) return "bigEngine";
  });
  
  
  
hbs.registerHelper("createA2Class", function(A2) {
  if (A2 == true) return "A2";
  if (A2 == false) return "";
});

hbs.registerHelper("isFavourited", (bikeId, userFavorites) => {
  
 
 if(userFavorites && userFavorites.includes(bikeId.toString())){
  return `<form action="/remove-from-favorite/${bikeId}" method="post"><button method="post">Remove from my bikes</button></form>`
}
 return `<form action="/add-to-favorite/${bikeId}" method="post"><button method="post">Add to my bikes</button></form>`

})

