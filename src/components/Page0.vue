<template>
  <v-app>
    <v-content>JS Console Stuff</v-content>
  </v-app>
</template>

<script>
/* eslint-disable */

function HitSingle(title, artist, year, album) {
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.album = album;
}

function TestTrace() {
  console.trace();
}

export default {
  mounted() {
    const foo = { name: "tom", age: 30, nervous: false };
    const bar = { name: "dick", age: 40, nervous: false };
    const baz = { name: "harry", age: 50, nervous: true };
    console.log();

    console.log("%c My Friends", "color: orange; font-weight: bold;");
    console.log({ foo, bar, baz });

    // Console.table(...)
    console.table([foo, bar, baz]);

    // Console.table(...) FILTERING
    console.table([foo, bar, baz], "age");

    const someArray = [
      "Blowin' in the Wind",
      "Like a Rolling Stone",
      "Knockin' On Heaven's Door"
    ];

    console.log("%c Songs", "color: orange; font-weight: bold;");
    console.table(someArray);

    // Array of arrays:
    const anotherArray = [["One", "Two"], ["Three", "Four"], ["Five", "Six"]];

    console.table(anotherArray);

    var favHit = new HitSingle(
      "Like a Prayer",
      "Madonna",
      "1989",
      "Like a Prayer"
    );

    console.log("%c Object", "color: orange; font-weight: bold;");
    console.table(favHit);

    const arraySingles = [favHit, favHit, favHit];

    console.log(
      "%c Object array, secind parameter ",
      "color: orange; font-weight: bold;"
    );
    console.table(arraySingles, ["year"]);
    console.table(arraySingles, ["title", "year"]);
    //console.clear()

    console.info("Info");
    console.log("log");
    console.warn("warn");
    console.trace("trace");

    TestTrace();
  },
  data() {
    return {
      array: [
        {
          name: "test name",
          type: "dragon",
          likes: "carrots",
          symbol: "DARGON"
        }
      ],

      components: [
        "Autocompletes",
        "Comboboxes",
        "Forms",
        "Inputs",
        "Overflow Buttons",
        "Selects",
        "Selection Controls",
        "Sliders",
        "Textareas",
        "Text Fields"
      ]
    };
  }
};
</script>
