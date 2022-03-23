import React from "react"
import { Link } from "gatsby"

const links = ["home", "about", "blog"]

const Header = () => (
    <header>
        {links.map((link, index) => (
            <Link key={index} to={`/${link}`} />
        ))}
    </header>
)

Header.displayName = "Header"
export default Header
