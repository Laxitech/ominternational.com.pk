import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

type WhatsappButtonProps = {
  label?: string;
  className?: string;
  message?: string;
};

export default function WhatsappButton({
  label = "Chat on WhatsApp",
  className,
  message = "Hello OM International, I would like to enquire about university degree programmes.",
}: WhatsappButtonProps) {
  const cleanNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
  const href = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-success px-5 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors duration-200 hover:bg-success/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none",
        className,
      )}
    >
      <MessageSquare className="size-4" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
