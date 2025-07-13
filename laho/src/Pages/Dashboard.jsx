import mockData from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="ml-64 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome Club Rep</h1>
      <div className="grid grid-cols-3 gap-4">
        {mockData.stats.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-2xl text-blue-500">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
