interface AdSlotProps {
  id: string;
  className?: string;
}

export default function AdSlot({ id, className = "" }: AdSlotProps) {
  return (
    <div
      className={`my-8 p-4 bg-gray-100 border border-gray-200 text-center min-h-25 flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <div className="text-xs text-gray-400 uppercase tracking-widest">
        Advertisement - {id}
        {/* AdSense code would be injected here later */}
      </div>
    </div>
  );
}
