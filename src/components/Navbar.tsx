import { Link } from "react-router";

interface Props {
  className: string;
}

const Navbar = ({ className }: Props) => {
  return (
    <ul className={`${className} flex gap-16 text-lg`}>
      <Link to={"/"}>Home</Link>
      <Link to={"/News"}>News</Link>
      <Link to={"/Updates"}>Updates</Link>
      <Link to={"/FAQ"}>FAQ</Link>
    </ul>
  );
};
export default Navbar;
