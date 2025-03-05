import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { HomePage } from "./HomePage";
import Catalog from "./Catalog/Catalog";
import Chat from "./Chat/Chat";
import AgentDetails from "./AgentDetails/AgentDetails";
import AgentCollective from "./AgentCollective/AgentCollective";
import DevAccountMain from "./DevAccountMain/DevAccountMain";
import Analytics from "./DevAccountMain/pages/Analytics";
import Transactions from "./DevAccountMain/pages/Transactions";
import Notifications from "./DevAccountMain/pages/Notifications";
import Profile from "./DevAccountMain/pages/Profile";
import Settings from "./DevAccountMain/pages/Settings";
import DeveloperPage from "./DeveloperPage/DeveloperPage";
import IntegrationPage from "./IntegrationPage/IntegrationPage";
import PersonalAccount from "./PersonalAccount/PersonalAccount";
import Registration from "./Registration/Registration";
import Support from "./Support/Support";
import TryAgentDemo from "./TryAgentDemo/TryAgentDemo";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={"/"} Component={HomePage} />
      <Route path={"/catalog"} Component={Catalog} />
      <Route path={"/chat"} Component={Chat} />
      <Route path={"/agent-details"} Component={AgentDetails} />
      <Route path={"/agent-collective"} Component={AgentCollective} />

      <Route path="/dev-account" element={<DevAccountMain />} />
      <Route path="/dev-account/analytics" element={<Analytics />} />
      <Route path="/dev-account/transactions" element={<Transactions />} />
      <Route path="/dev-account/notifications" element={<Notifications />} />
      <Route path="/dev-account/profile" element={<Profile />} />
      <Route path="/dev-account/settings" element={<Settings />} />

      <Route path={"/developer"} Component={DeveloperPage} />
      <Route path={"/integration"} Component={IntegrationPage} />
      <Route path={"/personal-account"} Component={PersonalAccount} />
      <Route path={"/registration"} Component={Registration} />
      <Route path={"/support"} Component={Support} />
      <Route path={"/try-agent-demo"} Component={TryAgentDemo} />

      {/* not found */}
      <Route path={"*"} Component={() => <Navigate to={"/"} replace />} />
    </Route>
  )
);
