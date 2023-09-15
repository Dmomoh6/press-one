<template>
  <div class="footer">
    <div class="top-section">
      <div class="first">
        <img class="logo" src="@/assets/logo.png" width="60px" alt="Logo" />
        <a href="mailto:hello@pressone.africa" target="_blank"
          >hello@pressone.africa</a
        ><a href="tel:+234 1 343 8962" target="_blank">+234 1 343 8962</a>
        <ul class="social-icons">
          <li>
            <img class="social-icon" src="/images/social-icons/facebook.png" />
          </li>
          <li>
            <img class="social-icon" src="/images/social-icons/twitter.png" />
          </li>
          <li>
            <img class="social-icon" src="/images/social-icons/instagram.png" />
          </li>
          <li>
            <img class="social-icon" src="/images/social-icons/linkedin.png" />
          </li>
        </ul>
      </div>
      <div class="second">
        <h4>Company</h4>
        <ul>
          <li>Help & Support</li>
          <li>About Us</li>
          <li>Product</li>
          <li>Media</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div class="third">
        <h4>Address</h4>
        <p>The Lennox Mall, 3 Admiralty Way, <br />Lekki Phase 1, Lagos</p>
      </div>
    </div>
    <div class="bottom-section">
      <div class="left">
        © 2022 PressOne Africa <span>All rights reserved</span>
      </div>
      <ul class="right">
        <li>Terms & Agreement</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped>
.footer {
  background-color: #fef8e7;
  width: calc(100% - 220px);
  color: #474b50;
  padding: 70px 110px;
  margin-bottom: 20px;
}

@media screen and (max-width: 1024px) {
  .footer {
    width: calc(100% - 100px);
    padding: 70px 50px;
  }
}

.top-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

a {
  color: #474b50;
  text-decoration: none;
  width: fit-content;
}

.top-section .third {
  text-align: right;
}

.top-section .first {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.first img {
  margin-bottom: 10px;
}
.second h4,
.third h4 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 0;
  color: #212121;
}
.second ul,
.social-icons {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.second {
  margin-left: 30%;
}
.social-icons {
  display: flex;
  gap: 20px;
}

.social-icons img {
  width: 25px;
  cursor: pointer;
}

.second li {
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #616c74;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: fit-content;
}

.second li:hover,
a:hover {
  color: #0e99d2;
}

.third p {
  font-size: 1.1rem;
  line-height: 1.5rem;
}

.bottom-section {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  align-items: center;
  margin-top: 20px;
  font-weight: 600;
}

.bottom-section .left span {
  margin-left: 20px;
}

.bottom-section .right {
  list-style-type: none;
  display: flex;
  gap: 20px;
}
.bottom-section .right li:hover {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.bottom-section .right li:hover {
  color: #0e99d2;
}

@media screen and (max-width: 768px) {
  .footer {
    width: calc(100% - 100px);
    padding: 70px 50px;
  }
  .top-section {
    grid-template-columns: 1fr;
  }

  .second {
    margin: 40px 0 0 0;
  }

  .top-section .third {
    text-align: left;
    margin: 40px 0 0 0;
  }

  .bottom-section {
    flex-direction: column;
    margin-top: 40px;
    align-items: flex-start;
  }

  .bottom-section .right {
    padding: 0;
  }
}

@media screen and (max-width: 425px) {
  .footer {
    width: calc(100% - 40px);
    padding: 70px 20px;
  }
}
</style>
