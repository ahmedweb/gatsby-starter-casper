// import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      // LeftIcon: <p>home</p>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];



  NavList.push({
    primaryText: "Blog",
    // LeftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });
  NavList.push({
    primaryText: "Contact",
    // LeftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });
  return NavList;
}
export default GetNavList;
