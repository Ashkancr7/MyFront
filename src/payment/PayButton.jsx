import React from 'react';

const PayButton = () => {
  const handlePayment = async () => {
    try { 
      const res = await fetch('http://localhost:5000/api/payment/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ amount }),
      });
      const data = await res.json();

      if (data.url) {
        // هدایت کاربر به صفحه زرین‌پال برای پرداخت
        window.location.href = data.url;
      } else {
        alert('خطا در دریافت لینک پرداخت');
      }
    } catch (err) {
      console.log('خطای ارتباط با سرور: ' + err.message);
      alert('مشکلی در ارتباط با سرور پیش آمد');
    }
  };

  return (
    <button onClick={handlePayment} className="bg-yellow-500 text-white px-4 py-2 rounded">
      پرداخت تستی با زرین‌پال
    </button>
  );
};

export default PayButton;
