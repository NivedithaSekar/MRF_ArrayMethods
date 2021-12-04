/**
 * DAY - 9 - MRF
 * Solving problems using array functions on rest countries data.
 *      Get all the countries from Asia continent /region using Filter function
 *      Get all the countries with a population of less than 2 lakhs using Filter function
 *      Print the following details name, capital, flag using forEach function
 *      Print the total population of countries using reduce function
 *      Print the country which uses US Dollars as currency.
 */

//Create a new request object instance from XMLHTTPRequest constructor using "new" keyword 
var req = new XMLHttpRequest();
//Open the request with required 2 parameters - HTTP method & URL
req.open("GET","https://restcountries.com/v2/all")
//send the request
req.send();
//the given function will be excecuted when request completes successfully
req.onload = function() {
    var result = JSON.parse(req.response);
    getData(result);//function call
}


//Function definition
function getData(result){
    //console.log(result);
    //a. Get all the countries from Asia continent /region using Filter function
    console.log("List of Coutries from Asia continent /region")
    console.log(result.filter((data) => data.region == "Asia"));
    console.log("***********************************************************************");
    
    //b. Get all the countries with a population of less than 2 lakhs using Filter function
    console.log("List of Countries with a population of less than 2 lakhs")
    console.log(result.filter((data) => data.population < 200000));
    console.log("***********************************************************************");
    
    //c. Print the following details name, capital, flag using forEach function
    console.log("Details of Country Name, Capital & Flag")
    result.forEach((data) => console.log(`
    Country Name: ${data.name}
    Capital: ${data.capital}
    flag: ${data.flag}
    `))
    console.log("***********************************************************************");
    
    //d. Print the total population of countries using reduce function
    console.log("Total population of the countries")
    console.log(result.map((data) => data.population).reduce((prevValue, currentValue) => prevValue + currentValue));
    console.log("***********************************************************************");

    //e. Print the country which uses US Dollars as currency
    /**currencies: Array(2)
                    0: {code: 'PAB', name: 'Panamanian balboa', symbol: 'B/.'}
                    1: {code: 'USD', name: 'United States dollar', symbol: '$'} 
                or of type underfined
    */
    console.log("List of Countries which uses US Dollars as currency")
    console.log(result.map(({name,currencies}) => ({name,currencies}))
                       .filter((data) => data.currencies != undefined && data.currencies.filter(({code,symbol}) => code == 'USD' && symbol == '$').length != 0));
}


