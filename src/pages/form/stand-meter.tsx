import { useState } from "react";
import MeterCard from "../../components/meter-card";
import GambarMeter from "../../assets/images/contoh_meter.png";
import TimeInfo from "../../components/time-info";
import KubikasiButton from "../../components/ui/kubikasi-button";
import Kubikasi from "../../components/ui/kubikasi";
const StandMeter = () => {
  const [filter, setFilter] = useState<"sudah" | "belum">("belum");
  console.log(filter);
  const meters = [
    {
      title: "METER PEMDA",
      awal: 13485,
      akhir: undefined,
    },
    {
      title: "METER BCE",
      awal: 13485,
      akhir: 13800,
    },
  ];

  return (
    <div className="bg-whiteCust rounded-xl shadow-xs overflow-hidden p-4 w-full">
      <TimeInfo
        nextTime="12:00"
        countdown="00:59"
        label="Sisa waktu menuju jam berikutnya"
      />
      <div className="relative w-full">
        <Kubikasi total={4} selesai={1} />

        <KubikasiButton
          className="absolute left-0 right-0 -bottom-8 px-4"
          activeFilter={"belum"}
          btnDoneColor="bg-primary"
          btnUndoneColor="bg-orangeCust"
          onFilterChange={setFilter}
        />
      </div>

      <div className="mt-12">
        {meters.map((meter, idx) => (
          <MeterCard
            titleAction="Catat Meter"
            image={GambarMeter}
            key={idx}
            title={meter.title}
            meterAwal={meter.awal}
            meterAkhir={meter.akhir}
            pemakaian={meter.akhir ? meter.akhir - meter.awal : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default StandMeter;
