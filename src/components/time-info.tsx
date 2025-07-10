import React from "react";
import { IonIcon, IonText } from "@ionic/react";
import IcTimer from "../assets/ic_timer.svg";
interface TimeInfoProps {
  nextTime: string; // format: "12:00"
  countdown: string; // format: "00:59"
  label?: string;
  className?: string;
}

const TimeInfo: React.FC<TimeInfoProps> = ({
  nextTime,
  countdown,
  label = "Sisa waktu menuju jam berikutnya",
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl border bg-white shadow-none px-4 py-3 mb-4 ${className}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 justify-center">
          <IonIcon icon={IcTimer} className="size-20" />
          <IonText className="font-medium text-gray-800 text-sm md:text-md">
            {label}
          </IonText>
        </div>
        <div className="text-center">
          <div className="bg-orangeCust text-white text-md font-semibold rounded-md px-2 py-1">
            {nextTime}
          </div>
          <div className="text-lg font-bold text-gray-800 leading-tight my-1">
            {countdown}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeInfo;
