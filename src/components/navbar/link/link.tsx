import AnchorLink from "react-anchor-link-smooth-scroll"
import "../../../global-style.css"

type Props = {
  page: string,
  selectedPage: string,
  setSelectedPage: (value: string) => void,
}

export default function Link({page, selectedPage, setSelectedPage}: Props) {
  const navigate = page.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink 
    className={`${selectedPage === navigate ? "text-primary-500" : ""}
      transition duration-200 hover:text-primary-300 no-underline text-gray-500`} 
    href={`#${navigate}`} 
    onClick={() => setSelectedPage(navigate)}>
      {page}
    </AnchorLink>
  ) 
}