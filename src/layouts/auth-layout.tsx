import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import BottomTabBar from "../components/bottom-bar";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          id="index-body"
          className="relative w-full max-w-3xl min-h-full mx-auto px-4 overflow-x-hidden"
        >
          <div className="circle-decoration-right"></div>
          <div className="circle-decoration-left"></div>

          <div className="relative z-10">{children}</div>
        </div>
      </IonContent>
      <BottomTabBar activeTab="dashboard" />
    </IonPage>
  );
};

export default AuthLayout;
