export function LegalToc({
  items,
}: {
  items: readonly { id: string; number: string; title: string }[]
}) {
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border-2 border-primary p-6 sm:p-8"
    >
      <p className="text-xs font-medium tracking-widest text-primary uppercase">
        On this page
      </p>
      <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-baseline gap-2 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="text-xs font-semibold tabular-nums text-primary">
                {item.number}
              </span>
              <span className="group-hover:underline">{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
