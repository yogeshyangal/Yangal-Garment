import React from 'react';

const BulkPriceTable = ({ pricingTiers }) => {
    if (!pricingTiers || pricingTiers.length === 0) {
        return null;
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <h3 className="text-lg font-semibold text-gray-900 p-4 bg-gray-50 border-b">
                Bulk Pricing
            </h3>
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price Range
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {pricingTiers.map((tier, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-sm font-medium text-gray-900">
                                    {tier.min_quantity}+
                                    {tier.max_quantity && ` – ${tier.max_quantity}`}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-sm text-gray-900">
                                    ₹{tier.price_min}
                                    {tier.price_max && ` – ₹${tier.price_max}`}
                                </span>
                            </td>
                        </tr>
                    ))}
                    <tr className="bg-blue-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-bold text-blue-900">
                                1000+
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-bold text-blue-900">
                                Contact for best price
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BulkPriceTable;
