export default function AddPreviewPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 md:p-10">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Add Employee</h1>
        <form action="#" method="POST" className="flex flex-col gap-6 md:flex-row">
          {/* Left side */}
          <div className="flex-1 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Employee Name</label>
              <input
                type="text"
                name="employee-name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter employee name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                name="contact-number"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter contact number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <input
                type="text"
                name="role"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter role"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Hire Date</label>
              <input
                type="date"
                name="hire-date"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="number"
                name="salary"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Enter salary"
                required
              />
            </div>

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
            className="hover:bg-black-100 w-1/2 rounded-md bg-black px-4 py-3 text-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
