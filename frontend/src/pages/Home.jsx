import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import useAuthStore from "../zustand/authStore";

const Home = () => {
  const { userData, getOtherUsers, myPayDetails, sendMoney } = useAuthStore();
  const [balance, setBalance] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState("");
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();

  // get payment account of other user
  const fetchUsers = async () => {
    const otherUserDeatils = await getOtherUsers(userData.email);
    setUsers(otherUserDeatils);
  };

  useEffect(() => {
    fetchUsers();
  }, [userData.email]);

  const fetchBalance = async () => {
    const balanceData = await myPayDetails(userData.email);
    console.log("balance fetched:", balanceData);
    setBalance(Number(balanceData) || 0);
  };
  useEffect(() => {
    fetchBalance();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMoney = (user) => {
    setSelectedUser(user);
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (amount && selectedUser) {
      await sendMoney(userData.email, selectedUser.email, amount);
      setAmount("");
      setSelectedUser(null);
      fetchBalance();
    }
  };

  return (
    <div className="min-h-screen bg-black p-3 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gray-900 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 shadow-md border border-gray-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                BlinkPay
              </h1>
              <p className="text-sm sm:text-base text-gray-400">
                Welcome, {userData?.name || "User"}
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                {userData?.email || "email"}
              </p>
            </div>
            {/* <button
              onClick={() => navigate("/transactions")}
              className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black px-4 sm:px-6 py-2 rounded-lg font-semibold transition text-sm sm:text-base"
            >
              Transaction History
            </button> */}
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-gray-900 rounded-lg p-6 sm:p-8 mb-4 sm:mb-6 shadow-md border border-gray-800">
          <p className="text-gray-400 text-xs sm:text-sm mb-2">Your Balance</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            ₹{balance.toLocaleString()}
          </h2>
        </div>

        {/* Search Users */}
        <div className="bg-gray-900 rounded-lg p-4 sm:p-6 shadow-md border border-gray-800">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
            Send Money
          </h3>

          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 mb-3 sm:mb-4"
          />

          {/* Users List - Made Scrollable */}
          <div className="space-y-2 sm:space-y-3 max-h-72 sm:max-h-96 overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 sm:p-4 flex items-center justify-between transition border border-gray-700"
              >
                <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-base sm:text-lg flex-shrink-0">
                    {user.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-semibold text-sm sm:text-base truncate">
                      {user.name}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleSendMoney(user)}
                  className="bg-white hover:bg-gray-200 text-black px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg font-semibold transition text-xs sm:text-base flex-shrink-0 ml-2"
                >
                  Send
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Send Money Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-lg p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Send Money
              </h3>
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 border border-gray-700">
                <p className="text-gray-400 text-xs sm:text-sm">To</p>
                <p className="text-white font-semibold text-base sm:text-lg">
                  {selectedUser.name}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm break-all">
                  {selectedUser.email}
                </p>
              </div>

              <form onSubmit={handleTransfer}>
                <div className="mb-4 sm:mb-6">
                  <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 sm:left-4 top-2.5 sm:top-3 text-white text-lg sm:text-xl">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0"
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-700 bg-gray-800 text-white text-lg sm:text-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                      required
                      min="1"
                    />
                  </div>
                </div>

                <div className="flex space-x-2 sm:space-x-3">
                  <button
                    type="button"
                    onClick={() => setSelectedUser(null)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-white hover:bg-gray-200 text-black py-2.5 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base"
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
