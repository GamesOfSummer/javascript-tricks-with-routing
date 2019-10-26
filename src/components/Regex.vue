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
      result = result.filter(x => x).join(' ');

      console.table(result);
      console.info(result);
    }
  }
};
</script>