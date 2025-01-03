export default function addPreviewPage() {
    return <div>
     <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 md:p-10">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Product</h1>
          <form action="#" method="POST" className="flex flex-col md:flex-row gap-6">
            {/* Left side */}
            <div className="flex-1 space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700">Product_Name</label>
                <input
                  type="text"
                  name="employee-name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter employee name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  name="employee-name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter employee name"
                  required
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="tel"
                  name="contact-number"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter contact number"
                  required
                />
              </div>
  
              
            </div>
  
            {/* Right side */}
            <div className="flex-1 space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  type="text"
                  name="role"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter role"
                  required
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Expire Date</label>
                <input
                  type="date"
                  name="hire-date"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>
          </form>
  
          <div className="mt-6">
            <button
              type="submit"
              className="w-1/2 bg-black text-white py-3 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-40">
              + Add
            </button>
          </div>
        </div>
      </div>
    </div>
  }