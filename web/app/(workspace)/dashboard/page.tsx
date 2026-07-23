export default function DashboardPage() {
  const stats = [
    {
      name: "Total Products",
      value: "1,248",
      change: "+12% this week",
      changeType: "positive",
    },
    {
      name: "Active SKUs",
      value: "4,892",
      change: "Across 4 locations",
      changeType: "neutral",
    },
    {
      name: "Low Stock Alerts",
      value: "14",
      change: "Requires reorder",
      changeType: "negative",
    },
    {
      name: "Total Suppliers",
      value: "38",
      change: "2 pending approval",
      changeType: "neutral",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Stock Received",
      item: "Regular Fit Shirt (SHIRT-REG-RED-M)",
      qty: "+50",
      user: "Rahat A.",
      time: "10 mins ago",
    },
    {
      id: 2,
      action: "Stock Adjusted",
      item: "Wireless Mouse (MOUSE-WL-BLK)",
      qty: "-2",
      user: "Samiul K.",
      time: "45 mins ago",
    },
    {
      id: 3,
      action: "New Product Created",
      item: "Mechanical Keyboard",
      qty: "New Variant Matrix",
      user: "Anika T.",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header Banner Section */}
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Gudam Overview
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          This is Ai slop. We will definitely update this. For the time being,
          it is good placeholder.
        </p>
      </div>

      {/* Grid KPI Metrics Row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border border-gray-100"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.value}
            </dd>
            <dd
              className={`mt-2 text-sm font-semibold ${
                item.changeType === "positive"
                  ? "text-green-600"
                  : item.changeType === "negative"
                    ? "text-red-600"
                    : "text-gray-500"
              }`}
            >
              {item.change}
            </dd>
          </div>
        ))}
      </div>

      {/* Data Layout Split: Recent Activity Log */}
      <div className="bg-white shadow sm:rounded-lg border border-gray-100">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Recent Warehouse Operations Log
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            A live streaming view of ledger movements executed by the dev team.
          </p>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((log) => (
            <div
              key={log.id}
              className="p-4 sm:px-6 hover:bg-gray-50 flex items-center justify-between transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  {log.action}
                </span>
                <span className="text-sm text-gray-500">{log.item}</span>
              </div>
              <div className="text-right">
                <span
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    log.qty.startsWith("+")
                      ? "bg-green-50 text-green-700 ring-green-600/20"
                      : log.qty.startsWith("-")
                        ? "bg-red-50 text-red-700 ring-red-600/20"
                        : "bg-blue-50 text-blue-700 ring-blue-600/20"
                  }`}
                >
                  {log.qty}
                </span>
                <p className="mt-1 text-xs text-gray-400">
                  {log.user} • {log.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
