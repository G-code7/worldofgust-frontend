export function CompareTable({ cols, rows, caption }: { cols: [string, string, string]; rows: [string, string, string][]; caption: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-line-strong">
            {cols.map((c, i) => (
              <th key={i} scope="col" className={`pb-4 font-semibold ${i === 1 ? 'text-accent' : i === 2 ? 'text-muted' : ''}`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <th scope="row" className="py-4 pr-6 font-normal text-muted">
                {r[0]}
              </th>
              <td className="tabular py-4 pr-6 font-semibold">{r[1]}</td>
              <td className="tabular py-4 text-muted">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
