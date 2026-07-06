interface Row {
  label: string;
  value: string;
  note?: string;
}

interface SpecTableProps {
  rows: Row[];
  title?: string;
}

export default function SpecTable({ rows, title }: SpecTableProps) {
  return (
    <div className="border border-neutral-200">
      {title && (
        <div className="px-4 py-2.5 bg-neutral-50 border-b border-neutral-200">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-500">{title}</span>
        </div>
      )}
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
              <td className="px-4 py-2.5 text-neutral-500 font-medium w-2/5 border-r border-neutral-200 text-xs uppercase tracking-wide">
                {row.label}
              </td>
              <td className="px-4 py-2.5">
                <span className="font-mono text-sm text-neutral-900">{row.value}</span>
                {row.note && <span className="ml-2 text-xs text-neutral-400">{row.note}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
