<template>
  <div class="card">
    <div>
      <h5>{{ plan.name }}</h5>
      <h3>
        {{ amount }}
        <span> {{ plan.amount != "Custom" ? "/month" : "" }}</span>
      </h3>
      <p>{{ plan.description }}</p>
      <div class="plan-details">
        <p>{{ plan.call_reception }}</p>
        <p>{{ plan.calls_per_week }}</p>
        <p>{{ plan.agent }}</p>
      </div>
      <button>{{ plan.cta }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanCard",
  props: {
    plan: Object,
  },
  computed: {
    amount() {
      let amountString = ""
      if (this.plan.amount != "Custom") {
        amountString += "N"
        amountString += new Intl.NumberFormat().format(this.plan.amount)
      } else {
        amountString = this.plan.amount
      }

      return amountString
    },
  },
}
</script>

<style scoped>
.card {
  min-height: 180px;
  position: relative;
  margin-left: 20px;
  margin-bottom: 10px;
}

.card > div {
  border: 1px solid #d9e2e7;
  border-radius: 14px;

  padding: 20px;
}

h3 {
  font-family: "Recoleta-bold", sans-serif;
  font-size: 1.7rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #212121;
}

h3 span {
  color: #a7b4be;
  font-size: 15px;
  font-weight: 300;
  font-family: "Urbanist", sans-serif;
}

h5 {
  font-size: 0.9rem;
  color: #0e99d2;
  margin: 0px;
  font-weight: 600;
}

p {
  color: #616c74;
  margin-top: -20px;
  font-size: 0.95rem;
  min-height: 60px;
  font-weight: normal;
}

button {
  background-color: #0e99d2;
  color: white;
  width: 100%;
  padding: 0.8rem 0px;
  font-weight: 600;
  border-radius: 4px;
  font-size: 1rem;
  border: 1px solid #0e99d2;
  font-family: "Urbanist", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

button:hover {
  background-color: transparent;
  color: #0e99d2;
}

.plan-details {
  display: none;
}
@media screen and (max-width: 768px) {
  .plan-details {
    display: block;
    margin-top: 40px;
  }

  .card {
    margin: 0 50px;
  }

  p {
    min-height: 40px;
  }
}

@media screen and (max-width: 425px) {
  .card {
    margin: 0 20px;
  }
}
</style>
