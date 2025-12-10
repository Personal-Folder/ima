export interface DashboardRouteConfig {
    path: string;
    component: React.ComponentType<any>;
    icon?: React.ReactNode;
    isAuthenticated?: boolean;
    permissions?: string[];
    subRoutes?: DashboardRouteConfig[];
  }

  export interface MainLayoutProps {
    routes: {
      path: string;
      component: React.ComponentType;
      icon?: React.ReactNode;
      isAuthenticated?: boolean;
      subRoutes?: {
        path: string;
        component: React.ComponentType;
        icon?: React.ReactNode;
        isAuthenticated?: boolean;
      }[];
    }[];
  }