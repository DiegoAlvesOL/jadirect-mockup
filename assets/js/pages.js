/**
 * Purpose   : Page renderers - all pages are rendered dynamically
 * Consumed by: router.js
 * Layer     : Presentation — Page Renderers
 */

const Pages = {
  /**
   * Landing page
   */
  landing() {
    return `
      ${Components.utilityBar()}
      ${Components.navbar()}

      <section class="hero">
        <div class="hero-image-placeholder">
          <span>Image – JADirect Fleet in Action · Dublin Ireland</span>
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1>Your Shipment, Our Responsibility</h1>
          <div class="track-form">
            <input type="text" placeholder="Track your shipment here...">
            <button>Track</button>
          </div>
        </div>
      </section>

      <div class="action-cards-wrap">
        <div class="action-cards">
          <div class="action-card">
            <div class="icon">📦</div>
            <h3>Request Pickup</h3>
            <p>Schedule a pickup quickly and easily</p>
          </div>
          <div class="action-card">
            <div class="icon">💰</div>
            <h3>Get a Quote</h3>
            <p>See the price in seconds</p>
          </div>
          <div class="action-card highlight">
            <div class="icon">📱</div>
            <h3>Create Account</h3>
            <p>Manage all your shipments in one place</p>
          </div>
        </div>
      </div>

      <section class="section" style="padding-top: 96px;">
        <div class="section-inner">
          <div class="service-block">
            <div class="service-image">
              <span>Image – Warehouse in Dublin</span>
            </div>
            <div class="service-card">
              <span class="eyebrow">Premium Services</span>
              <h2>Reliable Logistics</h2>
              <p>We specialize in deliveries across Ireland. Fast, secure and fully trackable. From your business to anywhere.</p>
              <div class="solutions-label">What We Offer</div>
              <div class="solutions-grid">
                <div class="solution-item"><span class="solution-dot"></span>Scheduled Pickups</div>
                <div class="solution-item"><span class="solution-dot"></span>Express Delivery</div>
                <div class="solution-item"><span class="solution-dot"></span>Real-time Tracking</div>
                <div class="solution-item"><span class="solution-dot"></span>24/7 Support</div>
              </div>
              <button class="btn-primary" data-route="signup">Get Started →</button>
            </div>
          </div>
        </div>
      </section>

      <div class="teal-banner">
        <div class="inner">
          <div class="teal-banner-image">
            <span>Image</span>
          </div>
          <div>
            <h3>Ready to Ship?</h3>
            <p>Create your account now and start managing your shipments. It's quick, easy and secure.</p>
          </div>
          <button class="btn-outline-white" data-route="signup">Create Free Account</button>
        </div>
      </div>

      ${Components.footer()}
    `;
  },

  /**
   * Signup page
   */
  signup() {
    return `
      ${Components.utilityBar()}
      ${Components.navbar()}

      <div class="auth-container">
        <div class="auth-box">
          <h1>Create Account</h1>
          <p class="auth-subtitle">Manage your shipments and pickups</p>

          <form id="signup-form">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="John">
            </div>

            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Smith">
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com">
            </div>

            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" placeholder="+353 1 234 5678">
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="••••••••">
            </div>

            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="••••••••">
            </div>

            <div class="form-group checkbox">
              <input type="checkbox" id="terms" checked>
              <label for="terms">I agree with the <a href="#">Terms of Use</a></label>
            </div>

            <button type="submit" class="btn-primary full-width">Create Account</button>
          </form>

          <p class="auth-footer">Already have an account? <a href="#" data-route="login">Sign in</a></p>
        </div>
      </div>

      ${Components.footer()}

      <script>
        document.getElementById('signup-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const firstName = document.getElementById('firstName').value || 'Customer';
          localStorage.setItem('customer_name', firstName);
          Router.navigate('portal');
        });
      </script>
    `;
  },

  /**
   * Login page
   */
  login() {
    return `
      ${Components.utilityBar()}
      ${Components.navbar()}

      <div class="auth-container">
        <div class="auth-box">
          <h1>Sign In</h1>
          <p class="auth-subtitle">Access your shipments</p>

          <form id="login-form">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com">
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="••••••••">
            </div>

            <button type="submit" class="btn-primary full-width">Sign In</button>
          </form>

          <p class="auth-footer">Don't have an account? <a href="#" data-route="signup">Create one</a></p>
        </div>
      </div>

      ${Components.footer()}

      <script>
        document.getElementById('login-form').addEventListener('submit', (e) => {
          e.preventDefault();
          localStorage.setItem('customer_name', 'Customer');
          Router.navigate('portal');
        });
      </script>
    `;
  },

  /**
   * Customer portal home
   */
  portal() {
    const customerName = localStorage.getItem('customer_name') || 'Customer';

    return `
      ${Components.utilityBar()}
      ${Components.navbar()}

      <div class="portal-container">
        <div class="portal-header">
          <div>
            <h1>Hello, ${customerName}! 👋</h1>
            <p>Manage your shipments and pickups</p>
          </div>
          <button class="btn-logout" data-route="landing">Sign Out</button>
        </div>

        <div class="portal-actions">
          <button class="portal-card primary" data-route="request">
            <span class="icon">📦</span>
            <span class="label">Request New Pickup</span>
          </button>
          <button class="portal-card secondary" data-route="myshipments">
            <span class="icon">📋</span>
            <span class="label">My Shipments</span>
          </button>
          <button class="portal-card secondary" data-route="track">
            <span class="icon">🔍</span>
            <span class="label">Track Shipment</span>
          </button>
        </div>
      </div>

      ${Components.footer()}
    `;
  },

  /**
   * Request new pickup form
   */
  request() {
    return `
      ${Components.utilityBar()}
      ${Components.navbar()}

      <div class="portal-container">
        <div class="portal-header">
          <div>
            <h1>Request New Pickup</h1>
            <p>Fill in the details and schedule your pickup</p>
          </div>
          <button class="btn-back" data-route="portal">← Back</button>
        </div>

        <div class="form-section">
          <h2>Pickup Details</h2>
          <form id="request-form">
            <div class="form-row">
              <div class="form-group">
                <label>Pickup Location</label>
                <input type="text" placeholder="Your address">
              </div>
              <div class="form-group">
                <label>Preferred Date</label>
                <input type="date">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Time Slot</label>
                <select>
                  <option>08:00 - 12:00</option>
                  <option>12:00 - 16:00</option>
                  <option>16:00 - 20:00</option>
                </select>
              </div>
              <div class="form-group">
                <label>Estimated Weight</label>
                <input type="text" placeholder="e.g. 5 kg">
              </div>
            </div>

            <div class="form-group full">
              <label>Additional Notes</label>
              <textarea placeholder="Any additional details..."></textarea>
            </div>

            <button type="submit" class="btn-primary">Request Pickup</button>
          </form>
        </div>
      </div>

      ${Components.footer()}

      <script>
        document.getElementById('request-form').addEventListener('submit', (e) => {
          e.preventDefault();
          alert('✓ Pickup request submitted!\\nOur team will contact you soon.');
          Router.navigate('myshipments');
        });
      </script>
    `;
  },

  /**
   * My shipments list
   */
  myshipments() {
    return `
      ${Components.utilityBar()}
      ${Components.navbar()}

      <div class="portal-container">
        <div class="portal-header">
          <div>
            <h1>My Shipments</h1>
            <p>History of all your shipments</p>
          </div>
          <button class="btn-back" data-route="portal">← Back</button>
        </div>

        <div class="filters-bar">
          <input type="text" placeholder="🔍 Search by reference...">
          <select>
            <option value="">All Status</option>
            <option value="scheduled">Scheduled</option>
            <option value="in-transit">In Transit</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>

        <div class="shipments-list">
          ${mockData.shipments.map(ship => `
            <div class="shipment-card">
              <div class="shipment-header">
                <div>
                  <div class="shipment-ref">${ship.reference}</div>
                  <div class="shipment-date">${ship.date} at ${ship.time}</div>
                </div>
                ${Components.statusBadge(ship.status)}
              </div>
              <div class="shipment-route">
                <div class="location from">
                  <span class="label">From:</span>
                  <span>${ship.origin}</span>
                </div>
                <div class="arrow">→</div>
                <div class="location to">
                  <span class="label">To:</span>
                  <span>${ship.destination}</span>
                </div>
              </div>
              <div class="shipment-footer">
                <span class="weight">📦 ${ship.weight}</span>
                <button class="btn-small" data-route="track">Track</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      ${Components.footer()}
    `;
  },

  /**
   * Track shipment with timeline
   */
  track() {
    return `
      ${Components.utilityBar()}
      ${Components.navbar()}

      <div class="portal-container">
        <div class="portal-header">
          <div>
            <h1>Track Your Shipment</h1>
            <p>Enter the reference number to track your pickup</p>
          </div>
          <button class="btn-back" data-route="portal">← Back</button>
        </div>

        <div class="track-section">
          <div class="track-input-group">
            <input type="text" id="track-input" placeholder="e.g. ORD-2026-05-002">
            <button class="btn-primary">Track</button>
          </div>

          <div class="track-result">
            <h2>ORD-2026-05-002</h2>
            <p>${mockData.shipments[1].origin} → ${mockData.shipments[1].destination}</p>
            
            <div class="timeline">
              ${mockData.trackingTimeline.map((item, idx) => `
                <div class="timeline-item ${item.status}">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-desc">${item.description}</div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="track-details">
              <div class="detail-item">
                <span class="label">Weight:</span>
                <span class="value">500 kg</span>
              </div>
              <div class="detail-item">
                <span class="label">Status:</span>
                <span class="value">In Transit</span>
              </div>
              <div class="detail-item">
                <span class="label">Vehicle:</span>
                <span class="value">${mockData.vehicleInfo.model} ${mockData.vehicleInfo.plate}</span>
              </div>
              <div class="detail-item">
                <span class="label">Driver:</span>
                <span class="value">${mockData.vehicleInfo.driver} (${mockData.vehicleInfo.phone})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      ${Components.footer()}
    `;
  },
};
