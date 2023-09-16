<template>
  <div :class="`card ${theme}`">
    <div class="icon">
      <img
        class="logo"
        :src="`/images/support-${theme}.png`"
        alt="supportIcon"
      />
    </div>
    <div class="supports">
      <h3>{{ title }}</h3>

      <ul class="support-lists">
        <li v-for="(support, index) in supports" :key="index">
          <img :src="`/images/list-${theme}.png`" alt="list" />{{ support }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupportCard",
  props: {
    supports: Array,
    title: String,
    theme: String,
  },
}
</script>

<style scoped>
.icon {
  width: 100%;
  display: flex;
}
.card {
  width: 470px;
  height: fit-content;
  padding-top: 100px;
  padding-bottom: 0px;
  background-size: contain;
  border: 1px solid #eee;
  border-radius: 15px;
  background-repeat: no-repeat;
}
.blue {
  background-image: url("/images/background-blue.png");
}

.orange {
  background-image: url("/images/background-orange.png");
}

.supports {
  background: white;
  margin-top: -70px;
  padding-top: 10px;
  border-radius: 25px;
  padding-bottom: 10px;
  height: max-content;
  min-height: 500px;
}

.icon img {
  width: 140px;
  margin: 0 auto;
}

.support-lists img {
  width: 25px;
  margin-top: 10px;
}

h3 {
  font-family: "Recoleta-bold", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 80px 10px 40px 10px;
  color: #212121;
}

li {
  font-size: 16.5px;
  font-weight: 300;
  letter-spacing: 0.4px;
  color: #616c74;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 25.2px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0 25px;
}

@media screen and (max-width: 768px) {
  .card {
    width: unset;
    margin-bottom: 50px;
  }
}
</style>
