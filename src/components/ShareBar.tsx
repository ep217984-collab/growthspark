import { useState } from "react";
import { Copy, Facebook, Mail, Check } from "lucide-react";

function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ShareBar({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const absoluteUrl = url.startsWith("http") ? url : `https://growthsparkimpact.lovable.app${url}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable, ignore
    }
  };

  const mailHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(absoluteUrl)}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(absoluteUrl)}`;
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absoluteUrl)}`;

  return (
    <div className="flex flex-wrap items-center gap-2 print:hidden">
      <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mr-1">Share</span>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[oklch(0.236_0.047_306_/_0.25)] text-xs hover:border-gold hover:text-gold transition"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />} {copied ? "Copied" : "Copy link"}
      </button>
      <a
        href={mailHref}
        aria-label="Share via email"
        className="p-2 rounded-full border border-[oklch(0.236_0.047_306_/_0.25)] hover:border-gold hover:text-gold transition"
      >
        <Mail size={14} />
      </a>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="p-2 rounded-full border border-[oklch(0.236_0.047_306_/_0.25)] hover:border-gold hover:text-gold transition"
      >
        <XIcon />
      </a>
      <a
        href={fbHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="p-2 rounded-full border border-[oklch(0.236_0.047_306_/_0.25)] hover:border-gold hover:text-gold transition"
      >
        <Facebook size={14} />
      </a>
    </div>
  );
}
