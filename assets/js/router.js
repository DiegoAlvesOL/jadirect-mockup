/**
 * Purpose   : SPA Router - handles navigation between pages
 * Consumed by: index.html initialization
 * Layer     : Application — Router
 */

const Router = {
  appRoot: null,
  currentRoute: 'landing',

  // All available routes
  routes: {
    landing: {
      render: () => Pages.landing(),
    },
    signup: {
      render: () => Pages.signup(),
    },
    login: {
      render: () => Pages.login(),
    },
    portal: {
      render: () => Pages.portal(),
    },
    request: {
      render: () => Pages.request(),
    },
    myshipments: {
      render: () => Pages.myshipments(),
    },
    track: {
      render: () => Pages.track(),
    },
  },

  /**
   * Initialize the router
   */
  init() {
    this.appRoot = document.getElementById('app-root');

    if (!this.appRoot) {
      console.error('Element #app-root not found.');
      return;
    }

    // Render landing page initially
    this.render('landing');

    // Handle clicks on links with data-route attribute
    document.addEventListener('click', (event) => {
      const link = event.target.closest('[data-route]');
      if (link) {
        event.preventDefault();
        const route = link.getAttribute('data-route');
        this.navigate(route);
      }
    });

    console.log('✓ Router initialized');
  },

  /**
   * Navigate to a specific route
   */
  navigate(routeName) {
    const route = this.routes[routeName];

    if (!route) {
      console.warn(`Route not found: ${routeName}`);
      return;
    }

    this.currentRoute = routeName;
    this.render(routeName);
  },

  /**
   * Render a specific route
   */
  render(routeName) {
    const route = this.routes[routeName];

    if (!route) {
      console.error(`Route not found: ${routeName}`);
      return;
    }

    try {
      const html = route.render();
      this.appRoot.innerHTML = html;
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(`Error rendering ${routeName}:`, error);
    }
  },
};

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  Router.init();
});
