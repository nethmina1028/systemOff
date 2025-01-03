export default function ListPreviewPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 md:p-10">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Add Supplier</h1>
        <form action="#" method="POST" className="flex flex-col gap-6 md:flex-row">
          {/* Left side */}
          <div className="flex-1 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Supplier Name</label>
              <input
                type="text"
                name="supplier-name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter supplier name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter category"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contract Details</label>
              <input
                type="text"
                name="contract-details"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter contract details"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Supplier Contact No</label>
              <input
                type="tel"
                name="supplier-contact"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter supplier contact number"
                required
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter city"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Street</label>
              <input
                type="text"
                name="street"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter street"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Lane</label>
              <input
                type="text"
                name="lane"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter lane"
                required
              />
            </div>
          </div>
        </form>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="w-1/2 rounded-md bg-black px-4 py-3 text-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
