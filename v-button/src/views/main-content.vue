<template>
<div class="v-add-to-bag">
  <button
    class="product__add-to-bag"
    :data-sku="sku"
    :data-qty="qty"
    v-if="displayable"
    @click="addToBag">{{ label }}</button>
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
      console.log('Vue', this.sku, this.qty)
    }
  }
}
</script>

<style scoped>
.v-add-to-bag button {
  padding: 4px 8px;
}
</style>

