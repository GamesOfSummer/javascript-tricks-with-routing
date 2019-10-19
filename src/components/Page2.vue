<template>
  <div id="app"></div>
</template>

<script>
const turtle = {
  name: "Bob 🐢",
  legs: 4,
  shell: true,
  type: "amphibious",
  meal: 10,
  diet: "berries"
};

function feed(animal) {
  const { name, meal, diet } = animal;
  console.info(`Feed ${name} ${meal} kilos of ${diet}`);
}

export default {
  mounted() {
    var a, b, rest;
    [a, b] = [10, 20];

    console.log(a);
    // expected output: 10

    console.log(b);
    // expected output: 20

    [a, b, ...rest] = [10, 20, 30, 40, 50];

    console.log(rest); // expected output: [30,40,50]

    feed(turtle);

    //********************* */
    const colors = [];

    let firstColor = "white";
    if (colors.length > 0) {
      firstColor = colors[0];
    }

    console.log(firstColor); // => 'white'

    //********************* */
    const colors2 = [];

    const [firstColor2 = "white"] = colors2;
    console.log(firstColor2); // => 'white'

    //********************* */
    const colors3 = [];

    const [, secondColor = "black"] = colors3;
    console.log(secondColor); // => 'black'
  }
};
</script>
