<template>
  <div class="w-screen h-screen">
    <MapComponent
        :markers="markers"
        @markerClick="handleMarkerClick"
    />

    <div style="z-index: 1000" class="absolute left-8 bottom-8">
      <DefaultButton to="/">Teruggaan</DefaultButton>
    </div>

    <MarkerModal @close="handleModalClose" v-if="selectedMarker" :marker="selectedMarker"></MarkerModal>
  </div>
</template>

<script>
import MapComponent from "../components/MapComponent.vue";
import DefaultButton from "../components/DefaultButton.vue";
import MarkerModal from "../modals/MarkerModal.vue";
import { StarService } from '../services'

export default {
  components: {MarkerModal, DefaultButton, MapComponent},
  data() {
    return {
      markers: [],
      selectedMarker: null
    }
  },
  methods: {
    handleMarkerClick($marker, $event) {
      this.selectedMarker = $marker;
    },
    handleModalClose() {
      console.log(this.selectedMarker);
      this.selectedMarker = null;
      console.log(this.selectedMarker);
    }
  },
  created() {
    StarService.getAll().then((stars) => {
      this.markers = stars;
    })
  }
}
</script>
