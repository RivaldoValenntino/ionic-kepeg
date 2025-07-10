import MeterProduksiCard from "../../components/MeterProduksi/meter-produksi-card";
import ShiftPicker from "../../components/shift-picker";
const DashboardPage: React.FC = () => {
  // const auth = useAuthStore();
  // const router = useIonRouter();
  // const [isLoggingOut, setIsLoggingOut] = useState(false);

  // const handleLogout = async () => {
  //   setIsLoggingOut(true);
  //   await new Promise((resolve) => setTimeout(resolve, 300));
  //   auth.logout();
  //   router.push("/login");
  //   setIsLoggingOut(false);
  // };

  return (
    <>
      {/* <IonLoading isOpen={isLoggingOut} message="Logging out..." /> */}

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
      <ShiftPicker />
    </>
  );
};

export default DashboardPage;
