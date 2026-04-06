interface ImagePlaceholderProps {
  label: string
  aspectRatio?: string
  className?: string
}

export default function ImagePlaceholder({
  label,
  aspectRatio = "16/9",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border-2 border-dashed border-neutral-mist bg-surface-cream/50 p-8 ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <p className="text-center font-body text-sm text-neutral-slate">{label}</p>
    </div>
  )
}
