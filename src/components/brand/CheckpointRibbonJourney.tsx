function RibbonTexture({ id }: { id: string }) {
  return (
    <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.62" numOctaves="2" seed="31" result="grain" />
      <feColorMatrix in="grain" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 .11 0" result="print-grain" />
      <feBlend in="SourceGraphic" in2="print-grain" mode="multiply" />
    </filter>
  );
}

function ReturnFragment() {
  return (
    <svg viewBox="0 0 190 280" fill="none">
      <defs>
        <RibbonTexture id="return-fragment-print" />
        <mask id="return-fragment-mask">
          <rect width="190" height="280" fill="black" />
          <path d="M202 -34C130 24 116 80 140 124C158 157 181 181 169 217C161 242 138 260 112 307" stroke="white" strokeWidth="46" strokeLinecap="round" />
          <path d="M151 46C166 38 179 42 185 55C172 69 158 73 148 64C142 59 144 51 151 46Z" fill="black" />
          <path d="M145 151C154 135 168 130 180 139C179 159 169 173 156 174C146 174 140 163 145 151Z" fill="black" />
          <circle cx="141" cy="235" r="9" fill="black" />
        </mask>
      </defs>
      <rect width="190" height="280" fill="#E5252A" mask="url(#return-fragment-mask)" filter="url(#return-fragment-print)" />
    </svg>
  );
}

export default function CheckpointRibbonJourney() {
  return (
    <div className="checkpoint-ribbon-journey" aria-hidden="true">
      <div className="checkpoint-ribbon-fragment checkpoint-ribbon-return">
        <ReturnFragment />
      </div>
    </div>
  );
}
