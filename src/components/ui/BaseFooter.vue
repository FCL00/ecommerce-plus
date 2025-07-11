<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <a href="/" class="footer-logo">
          <span class="footer-brand-name">Shop+</span>
        </a>
        <ul class="footer-links">
          <li><a href="#" class="footer-link">About</a></li>
          <li><a href="#" class="footer-link">Privacy Policy</a></li>
          <li><a href="#" class="footer-link">Licensing</a></li>
          <li><a href="#" class="footer-link">Contact</a></li>
        </ul>
      </div>
      <hr class="footer-divider" />
      <span class="footer-text">
        © {{ new Date().getFullYear() }} <a href="/" class="footer-link">ShopPlus</a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer {
  background-color: white;
  border-radius: 8px;
  margin: 16px;
  padding: 24px 0; /* Add padding to top and bottom */
}

.footer-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px; /* Increased gap */
}

.footer-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.footer-logo-img {
  height: 32px;
  margin-right: 8px;
}

.footer-brand-name {
  font-size: 24px;
  font-weight: 600;
  color: black;
  text-decoration: none;
}

.footer-links {
  display: flex;
  gap: 20px;
  list-style-type: none;
}

.footer-link {
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  transition:
    color 0.3s,
    transform 0.2s;
  text-decoration: none;
}

.footer-link:hover {
  color: #000;
  transform: scale(1.05); /* Slight scaling effect */
}

.footer-divider {
  margin: 24px 0;
  border-top: 1px solid #e5e7eb;
}

.footer-text {
  display: block;
  font-size: 12px;
  text-align: center;
  color: #6b7280;
}

.footer-text a {
  color: #000;
  text-decoration: none;
}

.footer-text a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px; /* Space between items */
  }

  .footer-links {
    flex-direction: column;
    gap: 10px;
  }

  .footer-text {
    font-size: 14px; /* Make footer text slightly larger for mobile */
  }
}

@media (max-width: 500px) {
  .footer-logo {
    font-size: 18px; /* Adjust font size for logo on small screens */
  }

  .footer-links {
    gap: 8px; /* Reduce space between links */
  }
}
</style>
