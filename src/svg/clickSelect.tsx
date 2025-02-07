export const ClickSelect = ({
  className,
  size = 30,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <style>
        {`.cls-1{fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:1.92px;}`}
      </style>
    </defs>
    <line className="cls-1" x1="12" y1="0.5" x2="12" y2="5.29" />
    <line className="cls-1" x1="5.29" y1="12" x2="0.5" y2="12" />
    <line className="cls-1" x1="20.13" y1="3.87" x2="16.74" y2="7.26" />
    <line className="cls-1" x1="7.26" y1="16.74" x2="3.87" y2="20.13" />
    <line className="cls-1" x1="7.26" y1="7.26" x2="3.87" y2="3.87" />
  </svg>
)
