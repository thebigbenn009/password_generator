type ColorProps = {
  color: string;
};
const StrengthBar = ({ color }: ColorProps) => {
  return (
    <div className="strength-bar" style={{ backgroundColor: color }}></div>
  );
};

export default StrengthBar;
