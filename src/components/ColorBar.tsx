type ColorBarProps = {
  color: string;
};

function ColorBar({ color }: ColorBarProps) {
  return <div className="strength-bar" style={{ background: color }}></div>;
}

export default ColorBar;
