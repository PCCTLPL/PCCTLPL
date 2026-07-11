import React from 'react';

const routes = [
  { from: "Delhi", to: "Mumbai", time: "3-5 Days" },
  { from: "Gurgaon", to: "Bangalore", time: "4-6 Days" },
  { from: "Mumbai", to: "Chennai", time: "3-4 Days" },
  { from: "Pune", to: "Hyderabad", time: "2-3 Days" },
  { from: "Delhi", to: "Ahmedabad", time: "2-4 Days" }
];

const Routes = () => {
  return (
    <section className="py-16 px-6 bg-[#1a000a]"> {/* Darker background for contrast */}
      <h2 className="text-3xl font-bold text-[#d4af37] text-center mb-10">Popular Transport Routes</h2>
      <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-[#d4af37]/30">
        <table className="w-full text-left text-white">
          <thead className="bg-[#d4af37] text-black">
            <tr>
              <th className="p-4">Origin</th>
              <th className="p-4">Destination</th>
              <th className="p-4">Delivery Time</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, index) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                <td className="p-4">{route.from}</td>
                <td className="p-4">{route.to}</td>
                <td className="p-4">{route.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Routes;
