import {
  IonPage,
  IonContent,
  IonButton,
  IonText,
  IonImg,
  useIonRouter,
} from "@ionic/react";
import IcSplashScreen from "../assets/ic_splash_screen.svg";
import IcAppLogo from "../assets/logo.svg";
import "./index.css";
const IndexPage: React.FC = () => {
  const router = useIonRouter();
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container ion-text-center">
          <IonImg
            src={IcAppLogo}
            style={{ width: "80px", margin: "10px auto 20px" }}
            alt="User Icon"
          />

          <IonText color="dark">
            <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
              Selamat Datang di aplikasi Aurora Absensi
            </h2>
          </IonText>

          <IonImg
            src={IcSplashScreen}
            style={{ width: "80%", maxWidth: "300px", margin: "20px auto" }}
            alt="Ilustrasi Kalender"
          />

          <IonText color="medium">
            <p>Silahkan masuk untuk menggunakan aplikasi absen.</p>
          </IonText>

          <IonButton
            color="primary"
            className="custom-login-btn ion-margin-top"
            shape="round"
            routerLink="/login"
          >
            Masuk
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default IndexPage;
