import useStock from "../hooks/useStock";

export default function Home() {
  const { items } = useStock();

  const diversity = items.length;
  const inventoryTotal = items.reduce((sum, item) => +sum + +item.quantity, 0);

  return (
    <main>
      <h1>Dashiboard</h1>
      <div className="row">
        <div className="dashboard-card">
          Diversidade de itens
          <span>{diversity}</span>
        </div>
        <div className="dashboard-card">
          Inventario total
          <span>{inventoryTotal}</span>
        </div>
      </div>
    </main>
  );
}
