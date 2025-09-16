import "../../FishCount/FishCount.css";
import fish from "../../../../assets/data/fish-data.json";

export default function CurrentTablesFish() {
  const results = [];
  fish.map((res) => {
    const t = res["title"];
    const v = res["fish data"].reduce((sum, row) => sum + row["volume"], 0);
    const n = res["fish data"].reduce(
      (sum, row) => sum + row["NilaiProduksi"] / 1000,
      0
    );

    results.push([t, v, n]);
  });
  console.log(results);
  return (
    <div className="container__fish">
      <h4>
        Jumlah Produksi Perikanan Budidaya <br /> Provinsi Kalimantan Timur
      </h4>
      <table className="table__current__fish">
        <thead>
          <tr>
            <th>Kabupaten/Kota</th>
            <th>Volume Produksi </th>
            <th>Nilai Produksi <br/>( Rp. 000.000)</th>
          </tr>
        </thead>
        <tbody>
          {results.map((a, i) => (
            <tr key={i}>
              <td>{a[0]}</td>
              <td>{new Intl.NumberFormat("id-ID", { style: "decimal", maximumFractionDigits: 2, }).format(a[1])}  Ton</td>
              <td>{new Intl.NumberFormat("id-ID", { style: "decimal", maximumFractionDigits: 2, }).format(a[2])}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sumber">
        <h5>Sumber : <a href="https://portaldata.kkp.go.id/portals/data-statistik/prod-ikan/summary">portaldata.kkp.go.id</a> || Kaltim 2023</h5>
      </div>
    </div>
  );
}
