import { RouteType } from "./config";
 // Pages
import HomePage from "../pages/home/HomePage";
import IntroductionPage from "../pages/introduction/IntroductionPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DefaultPage from "../pages/dashboard/DefaultPage";
import AdditionalPage from "../pages/dashboard/AdditionalPage";
import ComponentPageLayout from "../pages/components/ComponentsPageLayout";
import GridPage from "../pages/components/GridPage";
import ButtonsPage from "../pages/components/ButtonsPage";
import SettingsPage from "../pages/settings/SettingsPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    heading: "General",
    path: "/introduction",
    element: <IntroductionPage />,
    state: "introduction",
    sidebarProps: {
      displayText: "Introduction",
      icon: <HomeOutlinedIcon />,
    },
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index",
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default",
        },
      },
      {
        path: "/dashboard/additional",
        element: <AdditionalPage />,
        state: "dashboard.additional",
        sidebarProps: {
          displayText: "Additional",
        },
      },
    ],
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/component/grid",
        element: <GridPage />,
        state: "component.grid",
        sidebarProps: {
          displayText: "Data Grid",
        },
      },
      {
        path: "/component/buttons",
        element: <ButtonsPage />,
        state: "component.buttons",
        sidebarProps: {
          displayText: "Buttons",
        },
      },
    ],
  },
  {
    heading: "SETTINGS",
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />,
    },
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    state: "settings",
    sidebarProps: {
      displayText: "Settings",
      icon: <FormatListBulletedOutlinedIcon />,
    },
  },
];

export default appRoutes;
