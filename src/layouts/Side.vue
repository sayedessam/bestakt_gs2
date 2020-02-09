<template>
  <div>
    <div style="float: left; width: 27%; border: 1px solid purple;">
      <h2 style="text-align: center; background-color: turquoise;">
        سجل الآن وتمتع بخصم 30% فوراً
      </h2>
    </div>

    <div :style="`float: right; border: 1px solid ${color}; width: 69%;`">
      <slot />

    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      required: true,
      default: 'teal'
    }
  }
}
</script>