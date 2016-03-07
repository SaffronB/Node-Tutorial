module.exports = function() {
    var fs = require("fs");

    //Read file (products.cv)

    var contents = fs.readFileSync('./files/products.csv', 'utf8');
    var contentsArray = [];
    var productsArray = [];
    var products = [];

    //Create a function that returns a list of products:
    // a) split strings into contentsArray
    var lines = contents.split('\n');

    lines.forEach(function(word) {
      var withoutcommas = word.split(',');
      contentsArray.push(withoutcommas);
    });

    //b) filter list of products from contentsArray

    contentsArray.forEach(function(item, array) {
      productsArray.push(item[1]);
    })

    //c) make sure list is unique
    function productNames(cb) { // This part is important for callbacks to work.

      var products = []; // For this function to async, it'll need to "return" something. So we make the products array only for this function.
      for (i = 0; i < productsArray.length; i++) {
        var find = products.indexOf(productsArray[i]);
        if (find < 0) {
          products.push(productsArray[i]);
        }
      }

      cb(null, products);
    }


    function productsSold(cb) {
      var productitems = {};

      productNames(function(err, products) { //getting the data via the callback. Now products has right data.
        // Go through each unique product
        products.map(function(productName) {
          // looking at  inventory data again
          for (i = 0; i < contentsArray.length; i++) {
            // Is the product in the array?
            if (contentsArray[i].indexOf(productName) > -1) {
              // Grab number
              var number = contentsArray[i][2];

              // Do we have the product in the object already?
              // If not, let's initiate it with a 0.
              if (!productitems[productName]) {
                productitems[productName] = 0;
              }

              // Add things together
              // Parse string to integer (base 10)
              productitems[productName] = productitems[productName] + parseInt(number, 10);
            }
          }
        });

        cb(null, productitems);
      });
		}

    this.productNames = productNames;
    this.productsSold = productsSold;
  }





//Saff original
    // module.exports= function('./files/products.csv'){
    // var fs = require("fs");
    //
    // //Read file (products.cv)
    //
    // var contents = fs.readFileSync('./files/products.csv', 'utf8');
    // var contentsArray = [];
    // var productsArray = [];
    // var products = [];
    //
    // //Create a function that returns a list of products:
    // // a) split strings into contentsArray
    // var lines = contents.split('\n');
    //
    // lines.forEach(function(word) {
    //   var withoutcommas = word.split(',');
    //   contentsArray.push(withoutcommas);
    // });
    //
    // //b) filter list of products from contentsArray
    //
    // contentsArray.forEach(function(item, array) {
    //   productsArray.push(item[1]);
    // })
    //
    // //c) make sure list is unique
    // function productNames(){
    //   for (i = 0; i < productsArray.length; i++) {
    //     var find = products.indexOf(productsArray[i]);
    //     if (find < 0) {
    //       products.push(productsArray[i]);
    //     }
    //   }
    // }
    //
    // this.productNames=function (cb){
    //   cb(null,productNames());
    // };
    //
    // return products;
    //
    // //return the total number of items sold for each product
    //
    // var productsSold = function() {
    //   var productitems = {};
    //   // Go through each unique product
    //   products.map(function(productName) {
    //     // Let's look at our inventory data again
    //     for (i = 0; i <contentsArray.length; i++) {
    //       // Is the product in the array?
    //       if(contentsArray[i].indexOf(productName) > -1){
    //         // Grab number
    //         var number = contentsArray[i][2];
    //
    //         // Do we have the product in the object already?
    //         // If not, let's initiate it with a 0.
    //         if(!productitems[productName]){
    //           productitems[productName] = 0;
    //         }
    //
    //         // Add things together
    //         // Parse string to integer (base 10)
    //         productitems[productName] = productitems[productName] + parseInt(number, 10);
    //       }
    //     }
    //   });
    //   return productitems;
    // }
    //
    // this.productsSold = function (cb){
    //   cb(null, productsSold());
    // };
