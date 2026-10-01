export default function BlackBg({ className = "", onClick }) {
  return <div onClick={onClick} className={`fixed bg-black/15 ${className}`} />;
}
