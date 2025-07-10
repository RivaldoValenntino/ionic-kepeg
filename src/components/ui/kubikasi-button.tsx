import { IonButton } from "@ionic/react";

interface KubikasiButtonProps {
  onFilterChange: (filter: "sudah" | "belum") => void;
  activeFilter: "sudah" | "belum";
  btnDoneColor?: string;
  btnUndoneColor?: string;
  className?: string;
}

const KubikasiButton: React.FC<KubikasiButtonProps> = ({
  onFilterChange,
  activeFilter,
  btnDoneColor,
  btnUndoneColor,
  className,
}) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-2">
        <IonButton
          color="none"
          expand="block"
          fill="solid"
          className={`text-white rounded-md ${btnDoneColor}`}
          onClick={() => onFilterChange("sudah")}
        >
          SUDAH
        </IonButton>

        <IonButton
          color="none"
          expand="block"
          fill="solid"
          className={`text-white rounded-md ${btnUndoneColor}`}
          onClick={() => onFilterChange("belum")}
        >
          BELUM
        </IonButton>
      </div>
    </div>
  );
};

export default KubikasiButton;
