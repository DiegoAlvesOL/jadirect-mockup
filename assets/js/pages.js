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
        <div class="hero-image-placeholder"></div>
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
          <div class="action-card" data-route="shipnow">
            <div class="icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="17" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/><path d="M8 14l2.5 2.5L16 11"/></svg>
            </div>
            <h3>Request Pickup</h3>
            <p>Schedule a pickup quickly and easily</p>
          </div>
          <div class="action-card" data-route="quote">
            <div class="icon">
              <svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5"/><path d="M9 14l2 2 4-4"/></svg>
            </div>
            <h3>Get a Quote</h3>
            <p>See the price in seconds</p>
          </div>
          <div class="action-card" data-route="signup">
            <div class="icon">
              <svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
            </div>
            <h3>Create Account</h3>
            <p>Manage all your shipments in one place</p>
          </div>
        </div>
      </div>

      <section class="section" style="padding-top: 96px;">
        <div class="section-inner">
          <div class="service-block">
            <div class="service-image"></div>
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

      <section class="stats-carousel-section">
        <div class="stats-carousel-track">
          <div class="stat-card">
            <div class="stat-card-visual number">
              93
              <span class="stat-card-visual-caption">avg/day</span>
            </div>
            <div class="stat-card-info">
              <div class="stat-card-label">93 Deliveries. Every Single Day.</div>
              <p class="stat-card-text">Reliability isn't a promise here, it's a routine.</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-card-visual number">
              56
              <span class="stat-card-visual-caption">avg/day</span>
            </div>
            <div class="stat-card-info">
              <div class="stat-card-label">56 Pickups, Right on Time</div>
              <p class="stat-card-text">Fast scheduling that keeps your business moving.</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-card-visual photo van"></div>
            <div class="stat-card-info">
              <div class="stat-card-label">Where Trucks Can't Go, We Do</div>
              <p class="stat-card-text">Agile vans built for Ireland's tightest city streets.</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-card-visual photo truck"></div>
            <div class="stat-card-info">
              <div class="stat-card-label">Big Cargo, Longer Roads</div>
              <p class="stat-card-text">Rigid trucks linking cities, built for scale.</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-card-visual client">FedEx</div>
            <div class="stat-card-info">
              <div class="stat-card-label">Trusted by FedEx Ireland</div>
              <p class="stat-card-text">A partnership built on dependable last-mile delivery.</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-card-visual number">
              93
              <span class="stat-card-visual-caption">avg/day</span>
            </div>
            <div class="stat-card-info">
              <div class="stat-card-label">93 Deliveries. Every Single Day.</div>
              <p class="stat-card-text">Reliability isn't a promise here, it's a routine.</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-card-visual number">
              56
              <span class="stat-card-visual-caption">avg/day</span>
            </div>
            <div class="stat-card-info">
              <div class="stat-card-label">56 Pickups, Right on Time</div>
              <p class="stat-card-text">Fast scheduling that keeps your business moving.</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-card-visual photo van"></div>
            <div class="stat-card-info">
              <div class="stat-card-label">Where Trucks Can't Go, We Do</div>
              <p class="stat-card-text">Agile vans built for Ireland's tightest city streets.</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-card-visual photo truck"></div>
            <div class="stat-card-info">
              <div class="stat-card-label">Big Cargo, Longer Roads</div>
              <p class="stat-card-text">Rigid trucks linking cities, built for scale.</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-card-visual client">FedEx</div>
            <div class="stat-card-info">
              <div class="stat-card-label">Trusted by FedEx Ireland</div>
              <p class="stat-card-text">A partnership built on dependable last-mile delivery.</p>
            </div>
          </div>
        </div>
      </section>

      ${Components.footer()}
    `;
  },

  /**
   * Ship Now page - single, non-recurring shipment within Ireland
   */
  shipnow() {
    return `
    ${Components.utilityBar()}
    ${Components.navbar()}

    <section class="shipnow-intro">
      <div class="shipnow-intro-inner">
        <a href="#" data-route="landing" class="page-back-link">← Back to Home</a>
        <span class="eyebrow">One-Time Shipment</span>
        <h1>Request a Pickup for a Single Item</h1>
        <p>Send one parcel, anywhere in Ireland, without creating a business account or committing to a shipping contract. Ideal for gifts, personal items, or the occasional delivery.</p>
      </div>
    </section>

    <div class="shipnow-layout">
      <div class="shipnow-content">
        <div class="info-block">
          <h2>Who is this for?</h2>
          <p>This service is designed for one-time, non-recurring shipments, a single item collected once and delivered once. If you ship regularly or need to manage multiple deliveries, <a href="#" data-route="signup">create a free account</a> instead to access our full customer portal.</p>
          <ul class="who-list">
            <li>Sending a gift to family or friends across Ireland</li>
            <li>Returning a personal item to a seller</li>
            <li>A single pickup with no ongoing shipping needs</li>
            <li>Occasional shippers who don't need a business account</li>
          </ul>
        </div>

        <div class="info-block">
          <h2>How it works</h2>
          <ol class="steps-list">
            <li><strong>Fill in the details.</strong> Tell us where to collect the item and where it should be delivered.</li>
            <li><strong>Choose a time.</strong> Pick a preferred date and time slot for pickup.</li>
            <li><strong>We collect and deliver.</strong> Our driver picks up your item and delivers it, fully tracked, anywhere in Ireland.</li>
            <li><strong>Track your delivery.</strong> Create a quick account to follow your shipment from pickup to delivery.</li>
          </ol>
        </div>

        <div class="info-block">
          <h2>Why ship with JADirect</h2>
          <div class="advantages-list">
            <div class="advantage-item">
              <span class="advantage-dot"></span>
              <div>
                <h4>No Account Needed</h4>
                <p>Request a pickup right away, no business contract required.</p>
              </div>
            </div>
            <div class="advantage-item">
              <span class="advantage-dot"></span>
              <div>
                <h4>Ireland-Wide Coverage</h4>
                <p>Reliable pickup and delivery to any address in Ireland.</p>
              </div>
            </div>
            <div class="advantage-item">
              <span class="advantage-dot"></span>
              <div>
                <h4>Reliable Tracking</h4>
                <p>Follow your shipment from pickup to delivery, even for one-time orders.</p>
              </div>
            </div>
            <div class="advantage-item">
              <span class="advantage-dot"></span>
              <div>
                <h4>Great for Occasional Use</h4>
                <p>Ideal for gifts, personal items, or returns, no volume requirement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shipnow-form-wrap">
        <div class="form-section shipnow-form-card">
          <h2>Pickup Details</h2>
          <form id="shipnow-form">
            <div class="form-row">
              <div class="form-group">
                <label>Pickup Location</label>
                <input type="text" placeholder="Street, city">
              </div>
              <div class="form-group">
                <label>Delivery Location</label>
                <input type="text" placeholder="Street, city">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Preferred Date</label>
                <input type="date">
              </div>
              <div class="form-group">
                <label>Time Slot</label>
                <select>
                  <option>08:00 - 12:00</option>
                  <option>12:00 - 16:00</option>
                  <option>16:00 - 20:00</option>
                </select>
              </div>
            </div>

            <div class="form-group full">
              <label>Estimated Weight</label>
              <input type="text" placeholder="e.g. 5 kg">
            </div>

            <div class="form-group full">
              <label>Item Description</label>
              <textarea placeholder="What are you sending? e.g. small box, fragile"></textarea>
            </div>

            <button type="submit" class="btn-primary full-width">Request Pickup</button>
          </form>
          <p class="shipnow-form-note">You'll be asked to create a quick account after submitting, so you can track this delivery.</p>
        </div>
      </div>
    </div>

    ${Components.footer()}

    <script>
      document.getElementById('shipnow-form').addEventListener('submit', (e) => {
        e.preventDefault();
        Router.navigate('signup');
      });
    </script>
  `;
  },

  /**
   * Calculates a mock shipping estimate based on weight.
   * This is a fictitious calculation for mockup purposes only,
   * it does not reflect real JADirect pricing.
   *
   * @param {number} weightKg - Estimated weight in kilograms.
   * @returns {{price: string, transitTime: string}} Mock estimate.
   */
  calculateMockQuote(weightKg) {
    const baseRate = 8;
    const perKgRate = 1.35;
    const safeWeight = Number.isFinite(weightKg) && weightKg > 0 ? weightKg : 1;
    const price = (baseRate + safeWeight * perKgRate).toFixed(2);
    const transitTime = safeWeight > 20 ? '2-3 business days' : '1-2 business days';

    return { price, transitTime };
  },

  /**
   * Get a Quote page - mock shipping cost estimator
   */
  quote() {
    return `
    ${Components.utilityBar()}
    ${Components.navbar()}

    <section class="quote-intro">
      <div class="quote-intro-inner">
        <a href="#" data-route="landing" class="page-back-link">← Back to Home</a>
        <span class="eyebrow">Instant Estimate</span>
        <h1>See the Price in Seconds</h1>
        <p>Get an instant shipping estimate for a single item, anywhere in Ireland. No account needed to check the price.</p>
      </div>
    </section>

    <div class="quote-layout">
      <div class="form-section">
        <h2>Shipment Details</h2>
        <form id="quote-form">
          <div class="form-row">
            <div class="form-group">
              <label>From</label>
              <input type="text" id="quote-origin" placeholder="Origin city or Eircode">
            </div>
            <div class="form-group">
              <label>To</label>
              <input type="text" id="quote-destination" placeholder="Destination city or Eircode">
            </div>
          </div>

          <div class="form-group full">
            <label>Estimated Weight (kg)</label>
            <input type="text" id="quote-weight" placeholder="e.g. 5">
          </div>

          <button type="submit" class="btn-primary full-width">Calculate Estimate</button>
        </form>

        <div class="quote-result" id="quote-result">
          <div class="quote-result-label">Estimated Price</div>
          <div class="quote-result-price" id="quote-result-price">€ 0.00</div>
          <div class="quote-result-transit" id="quote-result-transit">Estimated transit time</div>
          <div class="quote-result-actions">
            <button class="btn-primary" data-route="shipnow">Request This Pickup</button>
            <button class="btn-outline" data-route="signup">Create Account</button>
          </div>
          <p class="quote-result-note">This is an estimated price for a one-time shipment. Final cost may vary based on exact dimensions and address.</p>
        </div>
      </div>

      <div class="info-block">
        <h2>What affects your shipping cost</h2>
        <div class="advantages-list">
          <div class="advantage-item">
            <span class="advantage-dot"></span>
            <div>
              <h4>Weight</h4>
              <p>Heavier items cost more to collect and deliver.</p>
            </div>
          </div>
          <div class="advantage-item">
            <span class="advantage-dot"></span>
            <div>
              <h4>Distance</h4>
              <p>Longer routes within Ireland may affect transit time.</p>
            </div>
          </div>
          <div class="advantage-item">
            <span class="advantage-dot"></span>
            <div>
              <h4>Pickup Speed</h4>
              <p>Same-day or next-day pickup requests may cost more.</p>
            </div>
          </div>
          <div class="advantage-item">
            <span class="advantage-dot"></span>
            <div>
              <h4>Item Type</h4>
              <p>Fragile or oversized items may require special handling.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${Components.footer()}

    <script>
      document.getElementById('quote-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const weightInput = document.getElementById('quote-weight').value;
        const weightKg = parseFloat(weightInput);
        const estimate = Pages.calculateMockQuote(weightKg);

        document.getElementById('quote-result-price').textContent = '€ ' + estimate.price;
        document.getElementById('quote-result-transit').textContent = 'Estimated transit time: ' + estimate.transitTime;
        document.getElementById('quote-result').classList.add('visible');
      });
    </script>
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