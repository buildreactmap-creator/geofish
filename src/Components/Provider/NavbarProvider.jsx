import AppContent from "../Pages/Content/AppContent";
import Pdb from "../Pages/PdbContent/Pdb";
import ErrPage from "../Pages/ErrorPage/ErrPage";

export const items = [
  {
    id: 1,
    title: "Peta Produksi",
    path: "/",
    icons: "fa-solid fa-house",
    element: <AppContent />,
    errorElement: <ErrPage />
  },
  {
    id: 2,
    title: "PDB Perikanan",
    path: "/pdb-perikanan",
    icons: "fa-solid fa-fish-fins",
    element: <Pdb />,
  },
];
