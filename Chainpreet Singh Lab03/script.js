const output = document.getElementById('output');

/* Creating a Hamburger object using a constructor function */
function Hamburger(bun, patties, cheese, toppings, sauces, addOns) {
    this.bun = bun;
    this.patties = patties;
    this.cheese = cheese;
    this.toppings = toppings;
    this.sauces = sauces;
    this.addOns = addOns;
    this.describe = function () {
        return `Your hamburger comes with a ${this.bun} bun with ${this.patties} patty(ies), topped with ${this.cheese}, ${this.toppings.join(", ")}, and sauces like ${this.sauces.join(", ")}. Add Ons include ${this.addOns.join(", ")}.`;
    };
}

/* Instantiate a new Hamburger */
let Burger = new Hamburger(
    "Plain", 
    2, 
    "mozzarella cheese", 
    ["tomato", "lettuce", "crispy onions"], 
    ["barbecue sauce", "mustard"], 
    ["extra cheese"]
);

/* Output the burger description to the webpage */
output.textContent = Burger.describe();

console.log(Burger.describe());
