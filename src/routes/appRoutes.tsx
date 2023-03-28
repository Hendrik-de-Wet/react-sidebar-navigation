import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import SettingsPage from "../pages/settings/SettingsPage";
import AdditionalPage from "../pages/dashboard/AdditionalPage";
import ComponentPageLayout from "../pages/components/ComponentsPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridPage from "../pages/components/GridPage";
import ButtonsPage from "../pages/components/ButtonsPage";
import InstallationPage from "../pages/introduction/IntroductionPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    heading: "",
    element: <HomePage />,
    state: "home"
  },
  {
    heading: "General",
    path: "/introduction",
    element: <InstallationPage />,
    state: "introduction",
    sidebarProps: {
      displayText: "Introduction",
      icon: <HomeOutlinedIcon />
    }
  },
  {
    heading: "",
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        heading: "",
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        heading: "",
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default"
        },
      },
      {
        heading: "",
        path: "/dashboard/additional",
        element: <AdditionalPage />,
        state: "dashboard.additional",
        sidebarProps: {
          displayText: "Additional"
        }
      }
    ]
  },
  {
    heading: "",
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        heading: "",
        path: "/component/grid",
        element: <GridPage />,
        state: "component.grid",
        sidebarProps: {
          displayText: "Data Grid"
        },
      },
      {
        heading: "",
        path: "/component/buttons",
        element: <ButtonsPage />,
        state: "component.buttons",
        sidebarProps: {
          displayText: "Buttons"
        }
      }
    ]
  },
  {
    heading: "SETTINGS",
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    heading: "",
    path: "/settings",
    element: <SettingsPage />,
    state: "settings",
    sidebarProps: {
      displayText: "Settings",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;