import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import {
  homeOutline,
  beakerOutline,
  barChartOutline,
  personOutline,
  home,
} from "ionicons/icons";

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
        <IonIcon icon={activeTab === "dashboard" ? home : homeOutline} />
        <IonLabel>Dashboard</IonLabel>
      </IonTabButton>

      <IonTabButton tab="lab" href="/lab" selected={activeTab === "lab"}>
        <IonIcon icon={beakerOutline} />
        <IonLabel>Lab</IonLabel>
      </IonTabButton>

      <IonTabButton
        tab="grafik"
        href="/grafik"
        selected={activeTab === "grafik"}
      >
        <IonIcon icon={barChartOutline} />
        <IonLabel>Grafik</IonLabel>
      </IonTabButton>

      <IonTabButton
        tab="profil"
        href="/profil"
        selected={activeTab === "profil"}
      >
        <IonIcon icon={personOutline} />
        <IonLabel>Profil</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default BottomTabBar;
