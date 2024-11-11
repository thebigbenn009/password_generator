import ColorBar from "./ColorBar";

type PasswordStrengthProps = {
  strength: "too weak" | "weak" | "medium" | "strong";
  color: "#F64A4A" | "#FB7C58" | "#F8CD65" | "#A4FFAF";
  numColors: number;
};

function PasswordStrength({
  strength,
  color,
  numColors,
}: PasswordStrengthProps) {
  const colorArray: string[] = new Array(numColors).fill(color);
  // const [colors, setColors] = useState<string[]>(colorArray);
  return (
    <div className="password-strength">
      <p className="p">strength</p>
      <div className="strength">
        <p>{strength}</p>
        <div className="strength-bar-container">
          {colorArray.map((color, index) => {
            return <ColorBar key={index} color={color} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PasswordStrength;
