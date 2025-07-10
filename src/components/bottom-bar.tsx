import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import {
  homeOutline,
  beakerOutline,
  barChartOutline,
  personOutline,
  home,
} from "ionicons/icons";
import IcHome from "../assets/ic_home.svg";
import IcLabBeaker from "../assets/ic_lab_beaker.svg";
import IcGraph from "../assets/ic_graph.svg";
import IcUser from "../assets/ic_user.svg";
interface BottomTabBarProps {
  activeTab: "dashboard" | "lab" | "grafik" | "profil";
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab }) => {
  return (
    <IonTabBar slot="bottom" style={{ color: "#3060FF" }}>
      <IonTabButton
        tab="dashboard"
        href="/dashboard"
        selected={activeTab === "dashboard"}
      >
        <IonIcon
          icon={activeTab === "dashboard" ? IcHome : IcHome}
          size="large"
        />
        <IonLabel>Dashboard</IonLabel>
      </IonTabButton>

      <IonTabButton tab="lab" href="/lab" selected={activeTab === "lab"}>
        <IonIcon
          icon={activeTab === "lab" ? IcLabBeaker : IcLabBeaker}
          size="large"
        />
        <IonLabel>Lab</IonLabel>
      </IonTabButton>

      <IonTabButton
        tab="grafik"
        href="/grafik"
        selected={activeTab === "grafik"}
      >
        <IonIcon
          icon={activeTab === "grafik" ? IcGraph : IcGraph}
          size="large"
        />
        <IonLabel>Grafik</IonLabel>
      </IonTabButton>

      <IonTabButton
        tab="profil"
        href="/profil"
        selected={activeTab === "profil"}
      >
        <IonIcon icon={activeTab === "profil" ? IcUser : IcUser} size="large" />
        <IonLabel>Profil</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default BottomTabBar;
