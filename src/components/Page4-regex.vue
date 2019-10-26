<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br />
    </div>
    <br />
  </div>
</template>

<script>
const marker = { lat: 32.934361, lng: -96.84965 };

export default {
  name: "Page3",
  data() {
    return {
      //32.934361, -96.849650

      center: { lat: 32.934361, lng: -96.84965 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      console.info("---");

      if (this.currentPlace) {
        console.table(this.currentPlace);
        console.info(this.currentPlace);

        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };

        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>