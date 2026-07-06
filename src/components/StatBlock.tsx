interface StatBlockProps {
  value: string;
  label: string;
  note?: string;
}

export default function StatBlock({ value, label, note }: StatBlockProps) {
  return (
    <div className="border-l-2 border-teal-500 pl-4">
      <div className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-900 leading-none">{value}</div>
      <div className="text-sm text-neutral-600 mt-1">{label}</div>
      {note && <div className="text-xs text-neutral-400 font-mono mt-0.5">{note}</div>}
    </div>
  );
}
