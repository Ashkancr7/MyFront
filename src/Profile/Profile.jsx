import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../Navbar";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bio: "کاربر عزیز خوش آمدی 🌟",
    avatar: "https://i.pravatar.cc/150?u=custom-user",
  });

  const [formData, setFormData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  // Load user from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("checkoutUserData");
    if (stored) {
      const parsed = JSON.parse(stored);
      const fullName = `${parsed.name} ${parsed.lname}`;
      const updatedUser = {
        name: fullName,
        email: parsed.email || "",
        phone: parsed.phone || "",
        address: parsed.address || "",
        bio: "کاربر لاگین‌شده عزیز 👋",
        avatar: "https://i.pravatar.cc/150?u=" + parsed.email,
      };
      setUser(updatedUser);
      setFormData(updatedUser);
    }
  }, []);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };
  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center p-4">
        <div className="bg-white shadow-2xl rounded-3xl max-w-2xl w-full p-8 transition-all duration-500">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md object-cover"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-indigo-500 mt-1">کاربر ثبت‌نام‌شده</p>

              <div className="mt-4 space-y-2 text-gray-600 text-sm">
                <p className="flex items-center gap-2"><FaEnvelope className="text-indigo-400" /> {user.email}</p>
                <p className="flex items-center gap-2"><FaPhone className="text-indigo-400" /> {user.phone}</p>
                <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-400" /> {user.address}</p>
                <p className="flex items-start gap-2"><FaInfoCircle className="text-indigo-400 mt-1" /> <span>{user.bio}</span></p>
              </div>

              <button
                onClick={handleEdit}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow hover:scale-105 transition-transform"
              >
                ویرایش اطلاعات
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-center text-indigo-600 mb-4">
              ویرایش پروفایل
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="نام و نام خانوادگی"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 pb-1"
              />
              <input
                type="email"
                name="email"
                placeholder="ایمیل"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 pb-1"
              />
              <input
                type="text"
                name="phone"
                placeholder="شماره تماس"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 pb-1"
              />
              <input
                type="text"
                name="address"
                placeholder="آدرس"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 pb-1"
              />
              <textarea
                name="bio"
                rows={3}
                placeholder="بیوگرافی"
                value={formData.bio}
                onChange={handleChange}
                className="w-full border-b-2 border-indigo-300 focus:outline-none focus:border-indigo-600 pb-1"
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
              >
                انصراف
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
              >
                ذخیره
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
