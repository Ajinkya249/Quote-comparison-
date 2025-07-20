import React from 'react';

function AIResults() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">AI Comparison Results</h1>

      <table className="w-full border text-sm text-left">
        <thead className="bg-yellow-400 text-black">
          <tr>
            <th className="p-2 border">Vendor</th>
            <th className="p-2 border">Total Cost</th>
            <th className="p-2 border">Warranty</th>
            <th className="p-2 border">Efficiency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Vendor A</td>
            <td className="p-2 border">₹1,20,000</td>
            <td className="p-2 border">10 years</td>
            <td className="p-2 border">18%</td>
          </tr>
          <tr className="bg-yellow-50">
            <td className="p-2 border font-bold">Vendor B (Recommended)</td>
            <td className="p-2 border font-bold">₹1,15,000</td>
            <td className="p-2 border">12 years</td>
            <td className="p-2 border">19%</td>
          </tr>
          <tr>
            <td className="p-2 border">Vendor C</td>
            <td className="p-2 border">₹1,30,000</td>
            <td className="p-2 border">10 years</td>
            <td className="p-2 border">17.5%</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8 text-green-700 bg-green-100 p-4 rounded-lg">
        ✅ Based on your input, <strong>Vendor B</strong> offers the best balance between cost, warranty, and efficiency.
      </div>
    </div>
  );
}

export default AIResults;
