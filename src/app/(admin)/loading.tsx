export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linaer-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-secondary border-r-secondary animate-spin"></div>
        </div>
        
        {/* Text */}
        <p className="text-gray-600 font-semibold text-lg">جاري التحميل...</p>
        <p className="text-gray-500 text-sm">يرجى الانتظار قليلاً</p>
      </div>
    </div>
  );
}