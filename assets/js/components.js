/**
 * Purpose   : Reusable components (navbar, footer, badges)
 * Consumed by: All pages
 * Layer     : Presentation — Reusable Components
 */

const Components = {
  /**
   * Utility bar at the top
   * Currently disabled, returns empty markup.
   */
  utilityBar() {
    return '';
  },

  /**
   * Main navigation bar
   */
  navbar() {
    return `
      <nav class="navbar">
        <div class="container">
          <div class="navbar-logo" data-route="landing" style="cursor: pointer;">
            <img src="assets/images/logo-white.png" alt="JADirect Logo" class="logo-img">
          </div>
          <ul class="nav-links">
            <li><a href="#" data-route="landing">Track</a></li>
            <li><a href="#" data-route="landing">Services <span class="arrow">▾</span></a></li>
            <li><a href="#" data-route="landing">Enterprise <span class="arrow">▾</span></a></li>
            <li><a href="#" data-route="landing">Support</a></li>
          </ul>
          <div class="nav-auth-buttons">
            <button class="btn-signin" data-route="portal">Sign In</button>
            <button class="btn-signup" data-route="signup">Sign Up</button>
          </div>
        </div>
      </nav>
    `;
  },

  /**
   * Footer
   */
  footer() {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-logo">
            JA<span>Direct</span>
          </div>
          <div class="footer-grid">
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#" data-route="portal">Customer Portal</a></li>
                <li><a href="#" data-route="quote">Get Quote</a></li>
                <li><a href="#" data-route="signup">Business Account</a></li>
                <li><a href="#" data-route="track">Track Shipment</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Enterprise Logistics</a></li>
                <li><a href="#">Transport Solutions</a></li>
                <li><a href="#">Same Day Delivery</a></li>
                <li><a href="#">Scheduled Pickups</a></li>
                <li><a href="#">Managed Deliveries</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About JADirect</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Legal Notice</a>
              <a href="#">Cookie Settings</a>
            </div>
            <div class="footer-copy">2026 © JADirect Logistics – All rights reserved</div>
          </div>
        </div>
      </footer>
    `;
  },

  /**
   * Status badge with color
   */
  statusBadge(status) {
    const colors = {
      scheduled: '#0d6efd',
      'in-transit': '#0dcaf0',
      pending: '#fd7e14',
      delivered: '#28a745',
      active: '#198754',
      completed: '#6c757d',
    };

    const color = colors[status] || '#6c757d';

    return `<span style="display: inline-block; background: ${color}; color: white; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 600;">${status}</span>`;
  },
};