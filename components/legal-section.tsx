export function LegalSection({
  id,
  number,
  title,
  body,
  links,
}: {
  id: string
  number: string
  title: string
  body: readonly string[]
  links?: readonly { name: string; href: string }[]
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="flex items-center gap-3 text-lg font-semibold">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-primary text-xs font-semibold text-primary">
          {number}
        </span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 pl-10">
        {body.map((paragraph, i) => (
          <p key={i} className="text-sm text-muted-foreground">
            {paragraph}
          </p>
        ))}
        {links && (
          <ul className="space-y-2 pt-1">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {link.name} &rarr;
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
