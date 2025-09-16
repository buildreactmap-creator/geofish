import "./FishCount.css";
import CurrentTablesFish from "./Current/Curr";

function groupFishData(fishArray) {
  const grouped = {};

  fishArray.forEach((item) => {
    const jenis = item["Jenis Ikan"];
    if (!grouped[jenis]) {
      grouped[jenis] = {
        "Jenis Ikan": jenis,
        "volume": 0,
      };
    }
    grouped[jenis]["volume"] += item["volume"];
  });

  return Object.values(grouped);
}

export default function FishCount({ dataTesting }) {
  if (!dataTesting) {
    return <CurrentTablesFish />;
  }

  const groupedData = groupFishData(dataTesting["fish data"]);
  return (
    <div className="container__fish__count">
      <h4>
        Jumlah Produksi Perikanan Budidaya <br /> {dataTesting["title"]}
      </h4>
      <div className="flex__card__fish">
        {groupedData.map((ikan, idx) => (
          <div key={idx} className="card__fish">
            <h5>{ikan["Jenis Ikan"]}</h5>
            <h3>{ikan["volume"].toFixed(2)} <span>Ton</span></h3>
          </div>
        ))}
      </div>
      <div className="sumber">
        <h5>Sumber : <a href="https://portaldata.kkp.go.id/portals/data-statistik/prod-ikan/summary">portaldata.kkp.go.id</a> || Kaltim 2023</h5>
      </div>
    </div>
  );
}
