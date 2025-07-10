import { IonButton } from "@ionic/react";

interface MeterCardProps {
  title: string;
  meterAwal: number;
  meterAkhir?: number;
  pemakaian?: number;
  onAction?: () => void;
  titleAction?: string;
  image?: string;
}

const MeterCard: React.FC<MeterCardProps> = ({
  title,
  meterAwal,
  meterAkhir,
  pemakaian,
  onAction,
  titleAction,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-none p-4 mb-4">
      <p className="font-semibold text-sm text-gray-700 mb-2 text-center">
        {title}
      </p>
      <div className="flex gap-4 h-full">
        {/* Gambar wrapper */}
        <div className="w-32 aspect-[4/3] h-auto flex-shrink-0">
          <div className="h-full w-full rounded-md overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Konten kanan */}
        <div className="flex-1 text-xs text-gray-600 flex flex-col justify-between">
          <div>
            <p className="flex justify-between py-1">
              <span>Stand Meter Awal:</span>
              <span className="font-semibold">
                {meterAwal.toLocaleString()}
              </span>
            </p>
            <div className="border-b border-gray-300 my-1" />
            <p className="flex justify-between py-1">
              <span>Stand Meter Akhir:</span>
              <span>{meterAkhir !== undefined ? meterAkhir : "–"}</span>
            </p>
            <div className="border-b border-gray-300 my-1" />
            <p className="flex justify-between py-1">
              <span>Pemakaian:</span>
              <span>{pemakaian !== undefined ? pemakaian : "–"}</span>
            </p>
          </div>

          <IonButton
            expand="block"
            className="mt-2"
            color="success"
            onClick={onAction}
          >
            {titleAction}
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default MeterCard;
