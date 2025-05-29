
interface CodeIconProps {
  size: number;
}

const CodeIcon = ({ size }: CodeIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 3L4 7L8 11M16 3L20 7L16 11M12 21L12 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CodeIcon;
