// A simple placeholder logo component
export default function SimpleLogoComponent({
  alt = "Urban Reparaturen Logo",
  className = "",
}: {
  alt?: string;
  className?: string;
}) {
  return (
    <div 
      className={`flex items-center justify-center bg-[#1A4D3C] text-white font-bold ${className}`}
      style={{width: '196px', height: '50px'}}
    >
      Urban Reparaturen
    </div>
  );
}