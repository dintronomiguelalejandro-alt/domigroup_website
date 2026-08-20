export function AccordionList({
  items,
}: {
  items: readonly { title: string; description: string }[]
}) {
  return (
    <div className="border-t-2 border-primary text-left">
      {items.map((item) => (
        <div key={item.title} className="border-b-2 border-primary py-5">
          <h3 className="text-base font-semibold">{item.title}</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}
