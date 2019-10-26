<template>
  <div>
    <div>
      <h2>{{output}}</h2>
      <label></label>
      <br />
    </div>
    <br />
  </div>
</template>

<script>
const input = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB';

export default {
  name: 'Page4',
  data() {
    return { output: null };
  },

  mounted() {
    this.songDecoder(input);
  },

  methods: {
    // receives a place object via the autocomplete component
    songDecoder(input) {
      let result = input.split('WUB');

      console.table(result);

      console.table(result.filter(x => x));
    }
  }
};
</script>