import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import IndexPage from "../pages";
import LoginPage from "../pages/login/login";

const PublicSections = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/login" component={LoginPage} />
    </IonRouterOutlet>
  );
};

export default PublicSections;
