import AnchorLink from "react-anchor-link-smooth-scroll"
import "../../../global-style.css"
import { SelectedPage } from "../../../types"

type Props = {
  page: string,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void,
}

export default function Link({page, selectedPage, setSelectedPage}: Props) {
  const navigate = page.toLowerCase().replace(/ /g, "-") as SelectedPage
  return (
    <AnchorLink 
    className={`nav-link ${selectedPage === navigate && "text-primary-500"}`} 
    href={`#${navigate}`} 
    onClick={() => setSelectedPage(navigate)}>
      {page}
    </AnchorLink>
  ) 
}