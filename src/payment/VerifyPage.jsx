import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      const authority = searchParams.get("Authority");
      const status = searchParams.get("Status");

      if (!authority || !status) {
        setMessage("اطلاعات پرداخت ناقص است.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("https://mystore-pbfe.onrender.com/api/payment/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authority,
            status,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setMessage("پرداخت با موفقیت انجام شد. سفارش شما ثبت شد.");
          // می‌تونی بعداً هدایت کنی:
          // setTimeout(() => navigate("/orders"), 3000);
        } else {
          setMessage(data.message || "خطا در تایید پرداخت.");
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
        setMessage("خطا در برقراری ارتباط با سرور.");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-center">
      {loading ? (
        <p className="text-blue-600">در حال بررسی وضعیت پرداخت...</p>
      ) : (
        <p className="text-lg font-medium">{message}</p>
      )}
    </div>
  );
};

export default VerifyPage;
