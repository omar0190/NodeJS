$("body").css("background-color","blue") //Access  with $dollarsign / #hash is used to access id

let pizzas = 0;
$(document).on("click", (event) => {
    $("#pizza-oven").append(`<strong id="pizza-${pizzas}"style='font-size: 50px'>o</strong>`)
    pizzas++;
    if (pizzas >= 5 ){
        const pizzaToRemove = pizzas-5;
        $("#pizza-" + pizzaToRemove).remove();

        $("#pizza-counter").append(`<strong style='font-size: 50px'>o</strong>`)
    }
})

