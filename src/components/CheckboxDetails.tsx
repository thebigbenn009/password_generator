import Checkbox from "@mui/material/Checkbox";
type CheckboxProps = {
  checked: boolean;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function CheckboxDetails({ onChange, checked, name }: CheckboxProps) {
  return (
    <div className="checkbox-container">
      <Checkbox
        checked={checked}
        name={name}
        onChange={onChange}
        sx={{
          "& .MuiSvgIcon-root": {
            width: "24px", // Adjust size of checkbox
            height: "24px", // Adjust size of checkbox
          },
          color: "#A4FFAF",
          "&.Mui-checked": {
            color: "#A4FFAF",
          },
        }}
      />
    </div>
  );
}

export default CheckboxDetails;
