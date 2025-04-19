// src/lib/routes.ts

/**
 * Route definition with metadata
 */
export interface Route {
    /** URL path for the route */
    path: string;
    /** Display name for navigation */
    label: string;
    /** SEO and tooltip description */
    description?: string;
    /** Whether the route requires authentication */
    isProtected?: boolean;
    /** Whether to show in navigation menus */
    showInNav?: boolean;
  }
  
  /**
   * Structure for public routes
   */
  export interface PublicRoutes {
    home: Route;
    about: Route;
    features: Route;
    pricing: Route;
    contact: Route;
    blog: Route;
  }
  
  /**
   * Structure for authentication routes
   */
  export interface AuthRoutes {
    login: Route;
    signup: Route;
    forgotPassword: Route;
    resetPassword: Route;
  }
  
  /**
   * Structure for dashboard routes
   */
  export interface DashboardRoutes {
    overview: Route;
    apiKeys: Route;
    analytics: Route;
    settings: Route;
    billing: Route;
  }
  
  /**
   * Structure for legal routes
   */
  export interface LegalRoutes {
    terms: Route;
    privacy: Route;
  }
  
  /**
   * Complete application routes structure
   */
  export interface AppRoutes {
    public: PublicRoutes;
    auth: AuthRoutes;
    dashboard: DashboardRoutes;
    legal: LegalRoutes;
  }
  
  /**
   * Flat structure containing all routes
   */
  export type AllRoutes = PublicRoutes & AuthRoutes & DashboardRoutes & LegalRoutes;
  
  /**
   * Route parameters for dynamic route creation
   */
  export type RouteParams = Record<string, string>;
  
  /**
   * Complete application routes definition
   */
  export const routes: AppRoutes = {
    // Public routes
    public: {
      home: { 
        path: '/', 
        label: 'Home',
        description: 'API key management platform home page',
        showInNav: true 
      },
      about: { 
        path: '/about', 
        label: 'About Us',
        description: 'Learn about our company and mission',
        showInNav: true 
      },
      features: { 
        path: '/features', 
        label: 'Features',
        description: 'Explore our platform features',
        showInNav: true 
      },
      pricing: { 
        path: '/pricing', 
        label: 'Pricing',
        description: 'View pricing plans and options',
        showInNav: true 
      },
      contact: { 
        path: '/contact', 
        label: 'Contact',
        description: 'Get in touch with our team',
        showInNav: true 
      },
      blog: { 
        path: '/blog', 
        label: 'Blog',
        description: 'Read our latest articles and updates',
        showInNav: true 
      },
    },
    
    // Authentication routes
    auth: {
      login: { 
        path: '/auth', 
        label: 'Login',
        description: 'Sign in to your account',
        showInNav: false 
      },
      signup: { 
        path: '/auth', 
        label: 'Sign Up',
        description: 'Create a new account',
        showInNav: false 
      },
      forgotPassword: { 
        path: '/auth/forgot-password', 
        label: 'Forgot Password',
        description: 'Reset your password',
        showInNav: false 
      },
      resetPassword: { 
        path: '/auth/reset-password', 
        label: 'Reset Password',
        description: 'Set a new password',
        showInNav: false 
      },
    },
    
    // Protected dashboard routes
    dashboard: {
      overview: { 
        path: '/dashboard', 
        label: 'Dashboard',
        description: 'Your account overview',
        isProtected: true,
        showInNav: true 
      },
      apiKeys: { 
        path: '/dashboard/api-keys', 
        label: 'API Keys',
        description: 'Manage your API keys',
        isProtected: true,
        showInNav: true 
      },
      analytics: { 
        path: '/dashboard/analytics', 
        label: 'Analytics',
        description: 'View usage analytics and statistics',
        isProtected: true,
        showInNav: true 
      },
      settings: { 
        path: '/dashboard/settings', 
        label: 'Settings',
        description: 'Manage your account settings',
        isProtected: true,
        showInNav: true 
      },
      billing: { 
        path: '/dashboard/billing', 
        label: 'Billing',
        description: 'View and manage billing information',
        isProtected: true,
        showInNav: true 
      },
    },
    
    // Legal and policy routes
    legal: {
      terms: { 
        path: '/legal/terms', 
        label: 'Terms of Service',
        description: 'Our terms of service',
        showInNav: false 
      },
      privacy: { 
        path: '/legal/privacy', 
        label: 'Privacy Policy',
        description: 'Our privacy policy',
        showInNav: false 
      },
    }
  };
  
  /**
   * Returns all navigation links, optionally including protected routes
   * @param includeProtected Whether to include routes that require authentication
   * @returns Array of routes that should appear in navigation
   */
  export const getNavLinks = (includeProtected: boolean = false): Route[] => {
    const allRoutes = { ...routes.public, ...routes.dashboard, ...routes.legal };
    
    return Object.values(allRoutes).filter(route => 
      route.showInNav && (includeProtected || !route.isProtected)
    );
  };
  
  /**
   * Returns navigation links for public routes
   * @returns Array of public routes that should appear in navigation
   */
  export const getPublicNavLinks = (): Route[] => {
    return Object.values(routes.public).filter(route => route.showInNav);
  };
  
  /**
   * Returns navigation links for dashboard routes
   * @returns Array of dashboard routes that should appear in navigation
   */
  export const getDashboardNavLinks = (): Route[] => {
    return Object.values(routes.dashboard).filter(route => route.showInNav);
  };
  
  /**
   * Creates a route with dynamic parameters
   * @param baseRoute Base route definition
   * @param params Object mapping parameter names to values
   * @returns Route with parameters replaced in the path
   */
  export const createRoute = (baseRoute: Route, params: RouteParams): Route => {
    let path = baseRoute.path;
    
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`:${key}`, value);
    });
    
    return {
      ...baseRoute,
      path
    };
  };
  
  /**
   * Flat structure of all routes for easier imports
   */
  export const ROUTES: AllRoutes = {
    ...routes.public,
    ...routes.auth,
    ...routes.dashboard,
    ...routes.legal
  };