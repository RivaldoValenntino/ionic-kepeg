import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import BottomTabBar from "../components/bottom-bar";
import Profile from "../components/ui/profile";
import ShiftInfo from "../components/shift-info";
import Avatar from "../assets/ic_akun_avatar.svg";
type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          id="index-body"
          className="relative w-full max-w-3xl min-h-full h-screen mx-auto px-4 overflow-x-hidden pb-8"
        >
          <div className="circle-decoration-right"></div>
          <div className="circle-decoration-left"></div>
          <Profile cabang="Cabang Utama" nama="Nama Pengguna" avatar={Avatar} />
          <ShiftInfo
            shift="Shift 1"
            tanggal="02 Juli 2023, 11:45"
            jam="08:00"
          />
          <div className="relative z-10">{children}</div>
        </div>
      </IonContent>
      <BottomTabBar activeTab="dashboard" />
    </IonPage>
  );
};

export default AuthLayout;
