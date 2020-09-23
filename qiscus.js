// Given the following data ...
const inventory = {
  inventory1: [
    {
      type: 'Book',
      title: 'Jurrasic Park'
    }, {
      type: 'Car',
      brand: 'Mercedes Benz'
    }, {
      type: 'Smartphone',
      brand: 'Samsung',
      operating_system: 'Android'
    }, {
      type: 'Car',
      brand: 'Ferari'
    }, {
      type: 'Book',
      title: 'Harry Potter and The Chamber of Secret'
    }
  ],
  inventory2: [
    {
      type: 'Car',
      brand: 'Tesla'
    }, {
      type: 'Smartphone',
      brand: 'Apple',
      operating_system: 'iOS'
    }, {
      type: 'Smartphone',
      brand: 'Xiaomi',
      operating_system: 'Android'
    }, {
      type: 'Book',
      title: 'Learning Data Mining with Python'
    }
  ]
}


const result = function(){

  inventory1 = inventory.inventory1
  inventory2 = inventory.inventory2

  var inventoryNew = inventory1.concat(inventory2);

  var filteredProducts = [];

  filteredProducttype = inventoryNew.map(function(key){
    data = key.type
    return data
  });

  var type = [...new Set(filteredProducttype)];
  i = 1
  b=0 

  filterType = type.map(function(key1){

    type = i+'. '+key1
    i++

    filteredProducts = inventoryNew.filter((key) => {
      return key.type === key1
    });

    filterProducts = filteredProducts.map(function(key){

        if (key.type === "Book") {
          a = "1."
          b += 1
          data = a+""+b+" "+key.title
        }else if (key.type === "Car") {
          a = "2."
          b += 1
          data = a+""+b+" "+key.brand
        }else{
          a = "3."
          b += 1
          data = a+""+b+" "+key.brand+"("+key.operating_system+")"
        }
          return data
    });

    filterProducts.unshift(type);
    dataFilterProducts = filterProducts.join('\n')
    return dataFilterProducts

  });

  //output show string data
  inventorys = filterType.join('\n')
  results = inventorys.toString()
  return results

  //if you want output with array you can use this code
  //return filterType
}
console.log(result())

// the output must be:
/*
1. Book
1.1 Jurrasic Park
1.2 Harry Potter and The Chamber of Secret
1.3 Learning Data Mining with Python
2. Car
2.4 Mercedes Benz
2.5 Ferari
2.6 Tesla
3. Smartphone
3.7 Samsung (Android)
3.8 Apple (iOS)
3.9 Xiaomi (Android)
*/

// The rules are simple
// - There are no programming language restrictions, you can use Javascript, PHP, Java, Ruby , etc
// - no variable declaration except the one that already defined
//   by the quiz
// - function are treated as non variable
// - function parameter are treated as non variable
// - Item order are not mandatory (it can be in any order)
//