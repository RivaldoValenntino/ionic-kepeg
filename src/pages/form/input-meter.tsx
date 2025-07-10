import React, { useState } from "react";
import { IonPage, IonContent, IonButton } from "@ionic/react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import NextInputInfo from "../../components/MeterProduksi/next-input-info";
import TimeInfo from "../../components/time-info";
import Kubikasi from "../../components/ui/kubikasi";

const MeterPemdaForm: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [standAkhir, setStandAkhir] = useState("");

  const handleTakePhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 80,
      });
      setPhotoUrl(photo.dataUrl!);
    } catch (err) {
      console.error("Camera error", err);
    }
  };

  return (
    <div className="bg-whiteCust rounded-xl shadow-xs overflow-hidden p-4 w-full">
      <TimeInfo
        nextTime="12:00"
        countdown="00:59"
        label="Sisa waktu menuju jam berikutnya"
      />
      <Kubikasi total={10} selesai={5} />
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-md w-full p-4 space-y-3">
          <h2 className="text-center font-bold text-sm">METER PEMDA</h2>

          <button
            type="button"
            onClick={handleTakePhoto}
            className="w-full bg-blue-100 text-blue-600 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2"
          >
            <span>Foto Stand</span>
          </button>

          {photoUrl && (
            <img
              src={photoUrl}
              alt="Stand Meter"
              className="w-full h-36 object-cover rounded-md"
            />
          )}

          {!photoUrl && (
            <div className="w-full h-36 bg-gray-200 rounded-md flex items-center justify-center text-sm text-gray-400">
              Belum ada foto
            </div>
          )}

          <div>
            <label className="text-sm font-medium block mb-1">Stand Awal</label>
            <input
              type="text"
              value="13.485"
              readOnly
              className="w-full px-3 py-2 text-gray-400 bg-gray-100 rounded-lg text-sm border border-gray-300"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Stand Akhir
            </label>
            <input
              type="number"
              value={standAkhir}
              onChange={(e) => setStandAkhir(e.target.value)}
              placeholder="Input Satnd Akhir Meter"
              className="w-full px-3 py-2 text-sm bg-gray-100 rounded-lg border border-gray-300 placeholder-gray-400"
            />
          </div>

          <IonButton
            expand="block"
            className="!rounded-lg !text-white !bg-blue-600 !text-sm !font-semibold"
          >
            Simpan
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default MeterPemdaForm;
