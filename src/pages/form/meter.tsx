import { IonText } from "@ionic/react";
import IcWm from "../../assets/ic_wm.svg";

import TimeInfo from "../../components/time-info";
const meterItems = [
  {
    title: "Stand Meter Kubikasi",
    image: "/assets/kubikasi.png",
    progress: "4/4",
    progressColor: "bg-primary",
  },
  {
    title: "Stand Meter PLN",
    image: "/assets/pln.png",
    progress: "1/4",
    progressColor: "bg-orangeCust",
  },
  {
    title: "Ampere dan Tekanan Pompa",
    image: "/assets/pompa.png",
    progress: "0/4",
    progressColor: "bg-orangeCust/80",
  },
  {
    title: "Intake Sungai",
    image: "/assets/sungai.png",
    progress: "0/4",
    progressColor: "bg-orangeCust/80",
  },
];

const DashboardMeterGrid: React.FC = () => {
  return (
    <>
      <div className="bg-whiteCust rounded-xl shadow-md overflow-hidden p-4 w-full">
        {/* Header Waktu */}
        <TimeInfo
          nextTime="12:00"
          countdown="00:59"
          label="Sisa waktu menuju jam berikutnya"
        />
        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          {meterItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-none p-3 flex flex-col items-center text-center"
            >
              <div className="custom-gradient-shadow w-20 h-20 rounded-lg flex items-center justify-center mb-2">
                <img
                  src={IcWm}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div
                className={`text-white text-xs font-semibold px-2 py-1 rounded-full w-full mb-1 mt-2 ${item.progressColor}`}
              >
                {item.progress}
              </div>
              <IonText className="text-sm font-medium text-gray-800">
                {item.title}
              </IonText>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardMeterGrid;
