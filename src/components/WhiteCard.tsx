export default function WhiteCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200">
      {children}
    </div>
  );
}
