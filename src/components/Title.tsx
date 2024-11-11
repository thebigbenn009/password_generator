type TitleProps = {
  title: string;
};
function Title({ title }: TitleProps) {
  return <p className="title">{title}</p>;
}

export default Title;
