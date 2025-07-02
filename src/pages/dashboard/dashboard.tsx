import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonButton,
  IonLoading,
  useIonRouter,
} from "@ionic/react";
import { useState } from "react";
import { useAuthStore } from "../../store/auth-store";

const DashboardPage: React.FC = () => {
  const auth = useAuthStore();
  const router = useIonRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    auth.logout();
    router.push("/login");
    setIsLoggingOut(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonLoading isOpen={isLoggingOut} message="Logging out..." />

        <div className="ion-text-center">
          <IonText>
            <h2>Selamat Datang di Dashboard!</h2>
            <p>Anda berhasil login ke aplikasi.</p>
          </IonText>

          <IonButton expand="block" color="secondary">
            Lihat Profil
          </IonButton>

          <IonButton
            expand="block"
            fill="outline"
            color="danger"
            className="ion-margin-top"
            onClick={handleLogout}
          >
            Logout
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
