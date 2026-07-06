interface FlowStep {
  id: string;
  label: string;
  sublabel?: string;
  type?: 'node' | 'gateway' | 'cloud' | 'dashboard';
}

interface FlowDiagramProps {
  steps: FlowStep[];
  variant?: 'horizontal' | 'vertical';
}

export default function FlowDiagram({ steps, variant = 'horizontal' }: FlowDiagramProps) {
  const colorMap: Record<string, string> = {
    node: 'border-neutral-300 text-neutral-700',
    gateway: 'border-teal-500 text-teal-700',
    cloud: 'border-neutral-400 text-neutral-700',
    dashboard: 'border-neutral-300 text-neutral-700',
  };

  if (variant === 'vertical') {
    return (
      <div className="flex flex-col items-start gap-0">
        {steps.map((step, i) => (
          <div key={step.id}>
            <div className="flex items-center gap-3">
              <div className={`border px-3 py-2 min-w-[140px] bg-white ${colorMap[step.type || 'node']}`}>
                <div className="text-xs font-mono font-medium">{step.label}</div>
                {step.sublabel && <div className="text-xs text-neutral-400 mt-0.5">{step.sublabel}</div>}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-4 h-6 flex items-center">
                <div className="w-px h-full bg-neutral-300 relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-400 rotate-45 translate-y-0.5" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center flex-wrap gap-0">
      {steps.map((step, i) => (
        <div key={step.id} className="flex items-center">
          <div className={`border px-3 py-2.5 bg-white ${colorMap[step.type || 'node']}`}>
            <div className="text-xs font-mono font-medium whitespace-nowrap">{step.label}</div>
            {step.sublabel && <div className="text-xs text-neutral-400 mt-0.5 whitespace-nowrap">{step.sublabel}</div>}
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center gap-0 mx-1">
              <div className="h-px w-6 bg-neutral-300" />
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-neutral-300" style={{ borderLeftWidth: 6 }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
