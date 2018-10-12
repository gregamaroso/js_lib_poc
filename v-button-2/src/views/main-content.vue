<template>
<div class="v-add-to-bag">
  <button
    :data-sku="sku"
    :data-qty="qty"
    v-if="displayable"
    v-on:click="addToBag">{{ label }}</button>
</div>
</template>

<script>
export default {
  name: "v-add-to-bag",
  data: () => ({
    qty: 1,
    sku: 'SKU111',
    label: 'Add To Cart',
    displayable: true
  }),
  methods: {
    addToBag: function(event) {
      console.log(this.qty, this.sku)
    }
  }
}
</script>

<style scoped>
.v-add-to-bag button {
  padding: 4px 8px;
}
</style>

