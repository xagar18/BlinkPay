import { useState } from "react";
import useAuthStore from "../zustand/authStore";

const Home = () => {
  const { userData } = useAuthStore();
  const [balance] = useState(5000); 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState("");

  // Dummy users data
  const dummyUsers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com" },
    { id: 5, name: "David Brown", email: "david@example.com" },
  ];

  const filteredUsers = dummyUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMoney = (user) => {
    setSelectedUser(user);
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    if (amount && selectedUser) {
      alert(`Sending ₹${amount} to ${selectedUser.name}`);
      setAmount("");
      setSelectedUser(null);
    }
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gray-900 rounded-lg p-6 mb-6 shadow-md border border-gray-800">
          <h1 className="text-3xl font-bold text-white mb-2">PayClone</h1>
          <p className="text-gray-400">Welcome, {userData?.name || "User"}</p>
        </div>

        {/* Balance Card */}
        <div className="bg-gray-900 rounded-lg p-8 mb-6 shadow-md border border-gray-800">
          <p className="text-gray-400 text-sm mb-2">Your Balance</p>
          <h2 className="text-5xl font-bold text-white">
            ₹{balance.toLocaleString()}
          </h2>
        </div>

        {/* Search Users */}
        <div className="bg-gray-900 rounded-lg p-6 shadow-md border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Send Money</h3>

          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 mb-4"
          />

          {/* Users List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 flex items-center justify-between transition border border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{user.name}</h4>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSendMoney(user)}
                  className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-lg font-semibold transition"
                >
                  Send Money
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Send Money Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full shadow-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Send Money</h3>
              <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-gray-700">
                <p className="text-gray-400 text-sm">To</p>
                <p className="text-white font-semibold text-lg">
                  {selectedUser.name}
                </p>
                <p className="text-gray-400 text-sm">{selectedUser.email}</p>
              </div>

              <form onSubmit={handleTransfer}>
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-white text-xl">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white text-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                      required
                      min="1"
                    />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setSelectedUser(null)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-white hover:bg-gray-200 text-black py-3 rounded-lg font-semibold transition"
                  >
                    Send ₹{amount || 0}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
