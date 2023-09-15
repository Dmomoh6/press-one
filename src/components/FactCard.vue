<template>
  <div class="card">
    <div class="icon">
      <img class="logo" src="/images/fact-icon.png" alt="factIcon" />
    </div>
    <div class="facts">{{ facts }}</div>
  </div>
</template>

<script>
export default {
  name: "FactCard",
  props: {
    facts: String,
  },
}
</script>

<style scoped>
.icon {
  width: 100%;
  display: flex;
}
.card {
  width: 100%;
}
.facts {
  border-radius: 13px;
  background: #f3f8fe;
  height: 100px;
  margin-top: -60px;
  padding: 60px 5px 10px 5px;
  text-align: center;
  font-size: 14px;
  color: #474b50;
  font-weight: 500;
  border: 1rem solid white;
}

img {
  width: 120px;
  margin: 0 auto;
}
</style>
