function fetchData(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error('Network request failed. Status: ' + xhr.status));
        }
      };
      xhr.onerror = function() {
        reject(new Error('Network request failed.'));
      };
      xhr.send();
    });
  }
  
  document.getElementById('cta-primary').addEventListener('click', async function() {
    try {
      var drinks = await fetchData('scripts/async/soda.json');
  
      // Ex 1: 
      var paragraph1 = document.getElementById('paragraph1');
      paragraph1.innerHTML = '';
      drinks.forEach(function(drink) {
        var brandName = drink.brand;
        var flavor = drink.flavor;
        var drinkInfo = brandName + ' - ' + flavor;
        paragraph1.innerHTML += '<p>' + drinkInfo + '</p>';
      });
  
      // Ex 2: 
      var randomIndex = Math.floor(Math.random() * drinks.length);
      var randomDrink = drinks[randomIndex];
      var paragraph2 = document.getElementById('paragraph2');
      paragraph2.innerHTML = randomDrink.brand + ' - ' + randomDrink.description;
  
      // Ex 3: 
      var promptInput = prompt('Introduceți un gust specific:');
      if (promptInput) {
        var filteredDrinks = drinks.filter(function(drink) {
          return drink.flavor.toLowerCase() === promptInput.toLowerCase();
        });
        var paragraph3 = document.getElementById('paragraph3');
        paragraph3.innerHTML = '';
        filteredDrinks.forEach(function(drink) {
          var brandName = drink.brand;
          var description = drink.description;
          var drinkInfo = brandName + ' - ' + description;
          paragraph3.innerHTML += '<p>' + drinkInfo + '</p>';
        });
      }
  
      // Ex 4: 
      drinks.sort(function(a, b) {
        return b.price - a.price;
      });
      var paragraph4 = document.getElementById('paragraph4');
      paragraph4.innerHTML = '';
      drinks.forEach(function(drink) {
        var brandName = drink.brand;
        var price = drink.price;
        var drinkInfo = brandName + ' - ' + price + ' lei';
        paragraph4.innerHTML += '<p>' + drinkInfo + '</p>';
      });
  
      // Ex 5: 
      var promptInput = prompt('Introduceți ID-ul băuturii:');
      if (promptInput) {
        var updatedDrink = null;
        for (var i = 0; i < drinks.length; i++) {
          if (drinks[i].id === promptInput) {
            updatedDrink = drinks[i];
            break;
          }
        }
        if (updatedDrink) {
          updatedDrink.quantity -= 10;
          var paragraph5 = document.getElementById('paragraph5');
          paragraph5.innerHTML = 'Cantitatea băuturii ' + updatedDrink.brand + ' a fost actualizată la ' + updatedDrink.quantity + '.';
        } else {
          var paragraph5 = document.getElementById('paragraph5');
          paragraph5.innerHTML = 'Nu s-a găsit nicio băutură cu ID-ul specificat.';
        }
      }
    } catch (error) {
      console.error(error);
    }
  });
  