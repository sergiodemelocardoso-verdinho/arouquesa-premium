import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFAB() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg shadow-black/30 hover:scale-105 transition-transform"
    >
      <MessageCircle size={20} />
      <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
    </a>
  );
}
