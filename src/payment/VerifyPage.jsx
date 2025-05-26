import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState(null); // null | 'success' | 'fail'
  const [refId, setRefId] = useState('');

  useEffect(() => {
    
    const verifyPayment = async () => {
      const Authority = searchParams.get('Authority');
      const Status = searchParams.get('Status');

      try {
    console.log(res);

        const res = await fetch(
          `http://localhost:5000/api/payment/verify?Authority=${Authority}&Status=${Status}`
        );
        const data = await res.json();

        if (data.success) {
          setStatus('success');
          setRefId(data.refId);
        } else {
          setStatus('fail');
        }
      } catch (error) {
        setStatus('fail');
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      {status === null && (
        <div className="text-gray-600 text-xl animate-pulse">در حال بررسی پرداخت...</div>
      )}

      {status === 'ok' && (
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full text-center">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold mb-2">پرداخت با موفقیت انجام شد</h2>
          <p className="text-gray-700 mb-4">کد پیگیری: <span className="font-mono">{refId}</span></p>
          <a
            href="/"
            className="inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
          >
            بازگشت به خانه
          </a>
        </div>
      )}

      {status === 'fail' && (
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full text-center">
          <div className="text-red-500 text-5xl mb-4">✕</div>
          <h2 className="text-2xl font-bold mb-2">پرداخت ناموفق بود</h2>
          <p className="text-gray-700 mb-4">متأسفیم! مشکلی در فرآیند پرداخت به‌وجود آمد.</p>
          <a
            href="/"
            className="inline-block mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            بازگشت به خانه
          </a>
        </div>
      )}
    </div>
  );
};

export default VerifyPage;
