<template>
  <Header class="sticky" :class="`sticky ${isScrolled ? 'scrolled' : ''}`" />
  <div class="background">
    <div class="background-left"></div>
    <div class="background-right"></div>
  </div>
  <section id="first-section">
    <div class="left-section">
      <h3>
        You do the work,<br />
        We’ll do the talk
      </h3>
      <h4>Move your customers’ <span>enquiry</span> to our team of experts.</h4>
      <p>
        Let us manage your customer relationship from their first call till they
        become your raving fans
      </p>
      <button>Get Started</button>
    </div>
    <div class="right-section">
      <img src="/images/landing-one.png" />
    </div>
  </section>
  <section id="second-section">
    <FactCard v-for="(fact, index) in facts" :key="index" :facts="fact" />
  </section>
  <section id="third-section">
    <div>
      <h3 class="what-you-get">What you get</h3>
      <div class="support-cards">
        <SupportCard
          v-for="(support, index) in supports"
          :key="index"
          :title="support.title"
          :supports="support.support"
          :theme="support.theme"
        />
      </div>
    </div>
  </section>
  <section id="fourth-section">
    <h3 class="choose-a-plan">Choose a plan that works for you</h3>

    <table class="plans-table">
      <tr>
        <td class="equal-width-img">
          <div class="image"><img src="/images/plans-icon.png" /></div>
        </td>
        <td class="equal-width-td" v-for="(plan, index) in plans" :key="index">
          <PlanCard :plan="plan" />
        </td>
      </tr>
      <tr class="bottom-table-row">
        <td>Call Reception</td>
        <template v-if="plans.length > 0">
          <td v-for="(plan, index) in plans" :key="index">
            {{ plan.call_reception }}
          </td>
        </template>
      </tr>
      <tr class="bottom-table-row">
        <td>Calls Per Week</td>
        <template v-if="plans.length > 0">
          <td v-for="(plan, index) in plans" :key="index">
            {{ plan.calls_per_week }}
          </td>
        </template>
      </tr>
      <tr class="bottom-table-row">
        <td>Agents</td>
        <template v-if="plans.length > 0">
          <td v-for="(plan, index) in plans" :key="index">
            {{ plan.agent }}
          </td>
        </template>
      </tr>
    </table>

    <div class="plans-mobile-view">
      <div class="plans-cards" v-for="(plan, index) in plans" :key="index">
        <PlanCard :plan="plan" />
      </div>
    </div>
  </section>
  <section id="fifth-section">
    <div class="back">
      <h3>
        Join thousands of entrepreneurs using PressOne to improve their business
        communications.
      </h3>
      <p>Ready to make your customers love your business?</p>
      <button>Join Now</button>
    </div>
  </section>

  <Footer />
</template>

<script>
import axios from "axios"
import Header from "./components/Header.vue"
import FactCard from "./components/FactCard.vue"
import SupportCard from "./components/SupportCard.vue"
import PlanCard from "./components/PlanCard.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "Web-Developer-Test",
  data() {
    return {
      facts: [
        "75% of consumers prefer human interactions to automated interactions.",
        "81% of consumers say a positive customer service experience increases the chances of them making another purchase.",
        "76% of surveyed customers contact customer service over the phone.",
        "68% of buyers will pay more for products and services from a company with a strong record of good customer service.",
      ],
      supports: [
        {
          title: "Sales Support",
          support: [
            "We handle your enquiries, orders, reservations and help improve your customers' experience.",
            "We send a weekly report of custom sales through a personalized dashboard for your business.",
            "You can monitor the calls, hear the conversations and make instant decisions that would grow your business at a glance.",
          ],
          theme: "orange",
        },
        {
          title: "Customer Support",
          support: [
            "We handle all your customer calls and help them transition through each phase of their customer journey.",
            "We send a weekly report of customer engagement through a personalized dashboard for your business.",
            "You can monitor the calls, hear the conversations and make instant decisions that would grow your business at a glance.",
          ],
          theme: "blue",
        },
      ],
      plans: [],
      isScrolled: false,
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  created() {
    axios
      .get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://api.jsonserve.com/swQ1ic"
        )}`
      )
      .then((response) => {
        this.plans = JSON.parse(response.data.contents).data
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  },
  components: {
    Header,
    FactCard,
    SupportCard,
    PlanCard,
    Footer,
  },
}
</script>

<style>
.equal-width-td {
  width: 27%;
}
.sticky {
  position: sticky;
  top: 0;
  background-color: transparent;
  z-index: 100;
}

.sticky.scrolled {
  background-color: white;
  width: calc(100% - 220px);
  margin: 0;
  padding: 20px 110px;
  transition: background-color 0.2s ease;
}

.plans-table {
  border-collapse: collapse;
  width: calc(100% - 220px);
  margin: 0px 110px;
}

.bottom-table-row {
  text-align: center;
  font-size: 1.1rem;
  color: #616c74;
}

.bottom-table-row:nth-of-type(odd) td {
  background-color: #eaf1f6;
}

.plans-table tr:not(:first-child) td {
  padding: 15px;
}

.plans-table td:first-child {
  border-radius: 10px 0px 0px 10px;
}

.plans-table td:last-child {
  border-radius: 0px 10px 10px 0px;
  color: #0e99d2;
  font-weight: bold;
}

.equal-width-img .image {
  display: flex;
  justify-content: center;
}

.equal-width-img .image img {
  max-width: 130px;
  margin-bottom: 10px;
}

#app {
  font-family: "Urbanist", sans-serif;
  margin: 0;
  padding: 0;
  max-width: 1600px;
  margin: 0 auto;
}

body {
  margin: 0;
  padding: 0;
}

.background {
  background-color: #fffefa;
  width: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  left: 0;
}

.background-left {
  background: url("/images/faded-background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  min-width: 50vw;
  min-height: 100%;

  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  left: 0px;
}

.background-right {
  background: url("/images/faded-background-2.png");
  background-repeat: no-repeat; /* Prevent image from repeating */
  background-size: contain;
  background-position: bottom;
  transform: rotate(45deg);
  min-width: 50vw;
  min-height: 100%;
  position: fixed;
  top: 150px;
  overflow: visible;
  right: -100px;
}

#first-section {
  display: flex;
  width: calc(100% - 220px);
  justify-content: space-between;
  padding-top: 1rem;
  align-content: center;
  flex-direction: row;
  align-items: center;
  margin: 0px 110px;
  min-height: 90vh;
}

#first-section .left-section {
  width: 53.5%;
  padding-right: 5rem;
  flex: 1;
}

#first-section p {
  font-size: 1.15rem;
  font-weight: 400;
  margin-top: -1.5rem;
  color: #616c74;
}

#first-section h3 {
  font-family: "Recoleta-bold", sans-serif;
  font-size: 2.75rem;
  font-weight: 600;
  color: #212121;
}

#first-section h4 {
  font-family: "Recoleta-bold", sans-serif;
  font-size: 1.9rem;
  font-weight: 600;
  margin-top: -1.25rem;
  color: #35383f;
}

#first-section button {
  background-color: #0e99d2;
  color: white;
  font-size: 1.05rem;
  padding: 1rem 6.5rem;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid #0e99d2;
  font-family: "Urbanist", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

#first-section button:hover {
  background-color: transparent;
  color: #0e99d2;
}

#first-section span {
  color: #0e99d2;
}

#first-section .right-section {
  width: calc(46.5% - 20px);
  flex: 1;
}

#first-section .right-section img {
  padding-left: 20px;
  max-width: calc(100% - 20px);
}

#second-section {
  background: #0e99d2;
  width: calc(100% - 220px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 30px;
  padding: 70px 110px;
}

#third-section,
#fourth-section #fifth-section {
  width: calc(100% - 220px);
  margin: 0px 110px;
}

#fifth-section {
  margin: 100px 110px;
}

.support-cards {
  display: flex;
  gap: 100px;
  justify-content: center;
}

.what-you-get,
.choose-a-plan {
  font-family: "Recoleta-bold", sans-serif;
  font-size: 2.25rem;
  font-weight: 500;
  text-align: center;
  margin: 100px 100px 80px 100px;
  color: #212121;
}

.plans-top img {
  max-width: 120px;
}

.plans-top,
.plans-bottom {
  width: calc(100% - 220px);
  margin: 10px 110px;
}

.back {
  background: url("/images/background-join.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: min(1000px, 70%);
  height: fit-content;
  border-radius: 15px;
  padding: 30px 100px;
  margin: 0 auto;
  text-align: center;
}

.back p {
  font-size: 1.15rem;
  font-weight: 400;
  margin-top: -1.3rem;
  margin-bottom: 2.5rem;
  color: white;
}

.back h3 {
  font-family: "Recoleta-bold", sans-serif;
  font-size: 2.25rem;
  font-weight: 600;
  color: white;
}

.back button {
  color: #0e99d2;
  background-color: white;
  font-size: 1.05rem;
  padding: 1rem 6.5rem;
  margin-bottom: 20px;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid white;
  font-family: "Urbanist", sans-serif;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

.back button:hover {
  color: white;
  background-color: #0e99d2;
}

.plans-mobile-view {
  display: none;
}

@media screen and (min-width: 1500px) {
  #second-section,
  .footer {
    border-radius: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .sticky.scrolled {
    width: calc(100% - 100px);
    padding: 20px 50px;
  }

  .plans-table,
  #first-section {
    width: calc(100% - 100px);
    margin: 0px 50px;
  }

  #second-section {
    width: calc(100% - 100px);
    padding: 70px 50px;
    grid-template-columns: 1fr 1fr;
  }

  #third-section,
  #fourth-section #fifth-section {
    width: calc(100% - 100px);
    margin: 0px 50px;
  }

  #fifth-section {
    margin: 100px 50px;
  }

  .plans-top,
  .plans-bottom {
    width: calc(100% - 100px);
    margin: 10px 50px;
  }
}

@media screen and (max-width: 768px) {
  #first-section button {
    margin-bottom: 50px;
  }

  #first-section button {
    margin: 10px 0px 30px;
    padding: 1rem 4.5rem;
  }

  #first-section {
    flex-direction: column-reverse;
    width: calc(100% - 100px);
    margin: 0px 50px;
  }

  #first-section .right-section,
  #first-section .left-section {
    width: unset;
    padding: 10px;
  }

  .support-cards {
    flex-direction: column;
    gap: 0px;
    align-items: center;
  }

  .plans-table {
    display: none;
  }

  .plans-mobile-view {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: stretch;
  }

  .back {
    width: calc(100% - 100px);
    padding: 10px 50px;
  }

  .back h3 {
    font-size: 1.5rem;
  }

  .back p {
    font-size: 1rem;
    margin-top: 0;
  }

  #second-section {
    width: calc(100% - 100px);
    padding: 70px 50px;
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 425px) {
  .back {
    width: calc(100% - 40px);
    padding: 10px 20px;
  }

  .back h3 {
    font-size: 1.5rem;
  }

  .back p {
    font-size: 1rem;
    margin-top: 0;
  }

  #fifth-section {
    margin: 100px 20px;
    width: calc(100% - 40px);
  }

  #first-section {
    flex-direction: column-reverse;
    width: calc(100% - 40px);
    margin: 0px 20px;
  }

  #first-section .right-section,
  #first-section .left-section {
    width: unset;
    padding: 10px;
  }

  .sticky.scrolled {
    width: calc(100% - 40px);
    padding: 20px 20px;
  }

  #second-section {
    width: calc(100% - 40px);
    padding: 70px 20px;
  }

  #third-section,
  #fourth-section #fifth-section {
    width: calc(100% - 40px);
    margin: 0px 20px;
  }

  #fifth-section {
    margin: 100px 20px;
  }

  .what-you-get,
  .choose-a-plan {
    font-family: "Recoleta-bold", sans-serif;
    font-size: 2.25rem;
    font-weight: 500;
    text-align: center;
    margin: 70px 20px 50px 20px;
    color: #212121;
  }
}
</style>
