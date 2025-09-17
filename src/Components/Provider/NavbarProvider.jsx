import AppContent from "../Pages/AppContent/AppContent";
import Pdb from "../Pages/PdbContent/Pdb";
import Produksi from "../Pages/Produksi/Produksi"
import ErrPage from "../Pages/ErrorPage/ErrPage";

export const items = [
  {
    id: 1,
    title: "Peta Produksi",
    path: "/geofish",
    icons: "fa-solid fa-house",
    element: <AppContent />,
    errorElement: <ErrPage />
  },
  {
    id: 2,
    title: "PDB Perikanan",
    path: "/geofish/pdb-perikanan",
    icons: "fa-solid fa-fish-fins",
    element: <Pdb />,
  },
  {
    id: 3,
    title: "Produksi",
    path: "/geofish/produksi-perikanan",
    icons: "fa-solid fa-fish-fins",
    element: <Produksi />,
  },
];
