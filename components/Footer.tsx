import { layout_footerMessage } from "@/site-data";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`h-9 w-full flex justify-center items-center text-center text-[11px] text-gray-400 ${className}`}
    >
      <span>{layout_footerMessage}</span>
     
    </footer>
  );
}
