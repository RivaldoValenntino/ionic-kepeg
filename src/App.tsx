import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";
import "./App.css";

import IndexPage from "./pages";
import LoginPage from "./pages/login/login";
import DashboardPage from "./pages/dashboard/dashboard";

import AuthLayout from "./layouts/auth-layout";
import DashboardMeterGrid from "./pages/form/meter";
import StandMeter from "./pages/form/stand-meter";
import MeterPemdaForm from "./pages/form/input-meter";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route
            path="/dashboard"
            render={() => (
              <AuthLayout>
                <DashboardPage />
              </AuthLayout>
            )}
          />
          <Route
            path="/form-meter"
            render={() => (
              <AuthLayout>
                <DashboardMeterGrid />
              </AuthLayout>
            )}
          />
          <Route
            path="/form-stand-meter"
            render={() => (
              <AuthLayout>
                <StandMeter />
              </AuthLayout>
            )}
          />
          <Route
            path="/form-input-meter"
            render={() => (
              <AuthLayout>
                <MeterPemdaForm />
              </AuthLayout>
            )}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
