interface FeedbackProps {
  type: "warning" | "error" | "success";
  message: string;
}

export default function FeedbackMessage({ type, message }: FeedbackProps) {
  const bg =
    type === "error" ? "bg-[#EF4444] text-white" : "bg-yellow-300 text-black";

  return (
    <div
      className={`p-4 border-4 border-black font-black uppercase text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${bg}`}
    >
      {type === "error" ? "Critical: " : "Attention: "} {message}
    </div>
  );
}
