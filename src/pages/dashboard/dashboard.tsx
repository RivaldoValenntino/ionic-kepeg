import { IonPage, IonContent, IonLoading, useIonRouter } from "@ionic/react";
import { useState } from "react";
import { useAuthStore } from "../../store/auth-store";
import BottomTabBar from "../../components/bottom-bar";
import MeterProduksiCard from "../../components/MeterProduksi/meter-produksi-card";
import ShiftInfo from "../../components/shift-info";
import Profile from "../../components/ui/profile";
import Avatar from "../../assets/ic_akun_avatar.svg";
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
    <>
      <IonLoading isOpen={isLoggingOut} message="Logging out..." />
      <Profile
        avatar={Avatar}
        cabang="Cabang Utama"
        nama="Nama Pengguna"
        className="self-start"
      />
      <ShiftInfo
        shift="Shift 1"
        tanggal="02 Juli 2023, 11:45"
        jam="08:00 - 17:00"
      />
      <MeterProduksiCard
        title="Meter Produksi"
        lokasi="PEMDA"
        chartData={[3000, 6000, 7000, 8000, 5000]}
        meterAwal={13485}
        meterAkhir={17485}
        kubikasi={4000}
        nextInputTime="02 Juli 2025, 11:45"
        countdown="00:15"
        produksiInfo="PROD 2850 M3 per hari"
        className="mt-2"
      />
    </>
  );
};

export default DashboardPage;
