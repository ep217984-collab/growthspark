import { useRef, useState } from "react";
import { Download, ExternalLink, Maximize2, Minus, Plus, RotateCcw } from "lucide-react";

export function PdfViewer({ src, title }: { src: string; title: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(100);

  const goFullScreen = () => {
    const el = wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else if (el.requestFullscreen) {
      void el.requestFullscreen();
    } else {
      window.open(src, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="surface-card rounded-2xl overflow-hidden border border-[oklch(0.308_0.034_127_/_0.18)] shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[oklch(0.308_0.034_127_/_0.16)] px-4 py-3 bg-[var(--section-alt)]">
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground truncate max-w-[45%]">
          Document
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(60, z - 20))}
            aria-label="Zoom out"
            className="p-2 rounded-full border border-[oklch(0.308_0.034_127_/_0.25)] hover:border-gold hover:text-gold transition"
          >
            <Minus size={14} />
          </button>
          <span className="text-xs text-muted-foreground w-12 text-center tabular-nums">{zoom}%</span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(200, z + 20))}
            aria-label="Zoom in"
            className="p-2 rounded-full border border-[oklch(0.308_0.034_127_/_0.25)] hover:border-gold hover:text-gold transition"
          >
            <Plus size={14} />
          </button>
          <button
            type="button"
            onClick={() => setZoom(100)}
            aria-label="Reset zoom"
            className="p-2 rounded-full border border-[oklch(0.308_0.034_127_/_0.25)] hover:border-gold hover:text-gold transition"
          >
            <RotateCcw size={14} />
          </button>
          <button
            type="button"
            onClick={goFullScreen}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[oklch(0.308_0.034_127_/_0.25)] text-xs hover:border-gold hover:text-gold transition"
          >
            <Maximize2 size={13} /> Full screen
          </button>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[oklch(0.308_0.034_127_/_0.25)] text-xs hover:border-gold hover:text-gold transition"
          >
            <ExternalLink size={13} /> New tab
          </a>
          <a
            href={src}
            download
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gold text-primary-foreground text-xs font-semibold hover:opacity-90 transition"
          >
            <Download size={13} /> Download
          </a>
        </div>
      </div>

      <div ref={wrapRef} className="bg-[var(--section-alt)] overflow-auto">
        <div
          style={{ width: `${zoom}%` }}
          className="mx-auto min-w-full transition-[width] duration-200"
        >
          <object data={`${src}#view=FitH&toolbar=1&navpanes=0`} type="application/pdf" className="w-full h-[70vh] min-h-[520px] bg-white">
            <iframe src={`${src}#view=FitH`} title={title} className="w-full h-[70vh] min-h-[520px] bg-white" />
          </object>
        </div>
      </div>

      <div className="px-4 py-3 text-xs text-muted-foreground border-t border-[oklch(0.308_0.034_127_/_0.16)] md:hidden">
        On some mobile browsers inline PDFs are limited. Use Full screen, New tab, or Download to read the document.
      </div>
    </div>
  );
}
