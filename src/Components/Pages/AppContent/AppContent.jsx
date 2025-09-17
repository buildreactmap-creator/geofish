import { useState } from "react";
import "./AppContent.css";
import Maps from "../../Layouts/Maps/Maps";
import FishCount from "../../Layouts/FishCount/FishCount";
import BasicTable from "../../Layouts/Table/Table";

// fish data
import fishData from "../../../assets/data/fish-data.json";

export default function AppContent() {
  const [dataMaps, setDataMaps] = useState(false);
  const forkData = fishData.find((i) => i.title === dataMaps);
  // console.log(dataMaps, forkData);
  return (
    <>
      <div className="grid__content">
        <Maps dataMaps={setDataMaps} />
        <FishCount
          dataMaps={dataMaps}
          setDataMaps={setDataMaps}
          dataTesting={forkData}
        />
      </div>
      <div className="flex__content space">
        <BasicTable />
      </div>
    </>
  );
}
