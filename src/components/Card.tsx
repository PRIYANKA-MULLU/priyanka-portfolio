export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-soft rounded-2xl p-6 shadow-card border border-gray-100">
      {children}
    </div>
  );
}
