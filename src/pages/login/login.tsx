// src/pages/LoginPage.tsx

import {
  IonPage,
  IonContent,
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonText,
  IonInputPasswordToggle,
  IonImg,
  useIonRouter,
  IonLoading,
} from "@ionic/react";
import IlustrasiLogin from "../../assets/ic_masuk_akun.svg";
import "./login.css";
import { useEffect, useRef, useState } from "react";
import api from "../../libs/api";
import { LoginResponse } from "../../types/responses/login";
import { useAuth, useAuthStore } from "../../store/auth-store";

const LoginPage: React.FC = () => {
  const usernameRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useIonRouter();
  const auth = useAuthStore();

  const handleLogin = async () => {
    const username = usernameRef.current?.value as string;
    const password = passwordRef.current?.value as string;
    if (!username || !password) {
      alert("Please enter username and password.");
      usernameRef.current?.setFocus();
      return;
    }

    const data = { username, password };

    try {
      setIsLoggedIn(true);
      const response = await api.post<LoginResponse>("/mobile-v2/login", data);
      const result = response.data;
      if (result) {
        auth.setToken(result.token);
        auth.setUser(result.user);
        router.push("/dashboard");
        setIsLoggedIn(false);
      }
    } catch (error: unknown) {
      console.log(error);
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      usernameRef.current?.setFocus();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle style={{ fontSize: "1rem" }}>Masuk Akun</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonLoading isOpen={isLoggedIn} message="Logging in..." />

        <div className="login-container ion-text-center">
          <IonImg
            src={IlustrasiLogin}
            style={{ width: "50%", maxWidth: "300px", margin: "20px auto" }}
            alt="Ilustrasi Masuk"
            className="login-illustration"
          />

          <IonText color="dark">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              Masuk ke Aplikasi
            </h2>
          </IonText>

          <IonText color="medium">
            <p style={{ marginTop: "8px", fontSize: "14px" }}>
              Masukan informasi pengguna Anda di bawah ini untuk melanjutkan
            </p>
          </IonText>

          <div
            className="input-container"
            style={{
              textAlign: "left",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {/* <IonLabel position="stacked" class="custom-ion-label">
              Username
            </IonLabel> */}
            <IonInput
              placeholder="Masukan Username"
              type="text"
              fill="outline"
              label="Username"
              ref={usernameRef}
              labelPlacement="floating"
              className="input-field"
            />

            {/* <IonLabel
              position="stacked"
              style={{ marginTop: "28px" }}
              class="custom-ion-label"
            >
              Password
            </IonLabel> */}
            <IonInput
              placeholder="Masukan Password"
              type="password"
              fill="outline"
              ref={passwordRef}
              required={true}
              label="Password"
              labelPlacement="floating"
              className="input-field ion-margin-top"
            >
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
          </div>

          <IonButton
            shape="round"
            size="default"
            className="login-button"
            onClick={handleLogin}
          >
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
