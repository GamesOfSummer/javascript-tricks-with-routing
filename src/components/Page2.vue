<template>
  <div id="app">
    <input v-model="dragonName" placeholder="edit dragon name" />
    <p>Message is: {{ dragonFullName }}</p>

    <input type="checkbox" id="checkbox" v-model="showDragon" />
    <label for="checkbox">{{ showDragon }}</label>

    <br />
    <br />
    {{currentAnimal}}
  </div>
</template>

<script>
const turtle = {
  name: 'Bob 🐢',
  legs: 4,
  shell: true,
  type: 'amphibious',
  meal: 10,
  diet: 'berries'
};

const dragon = {
  name: 'Tom 🀄🐉',
  legs: 4,
  shell: false,
  type: 'mythic rare',
  meal: 50,
  diet: 'MEAT'
};

export default {
  data() {
    return {
      showDragon: false,
      dragonName: ''
    };
  },

  mounted() {
    console.clear();
  },
  computed: {
    currentAnimal: {
      get: function() {
        if (this.showDragon) {
          return this.feed(dragon);
        } else {
          return this.feed(turtle);
        }
      },
      set: function(newValue) {
        console.log(newValue);
      }
    },
    dragonFullName: {
      get: function() {
        if (this.showDragon) {
          return this.dragonName;
        } else {
          ('NO DRAGON NAME');
        }
      },
      set: function(newValue) {
        console.log(newValue);
        this.dragonName = newValue + 'FULL NAME';
      }
    }
  },
  methods: {
    feed(animal) {
      const { name, meal, diet } = animal;
      return `Feed ${name} ${meal} kilos of ${diet}`;
    }
  }
};
</script>
