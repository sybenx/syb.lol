import * as React from "react"
import Layout from "../components/layout"

// styles
const pageStyles = {
  color: "#4AEC44",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#6ecf6e",
}
const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1rem",
  color: "#4aec44",
}
const codeStyles = {
  color: "#052804",
  padding: 4,
  backgroundColor: "#79d676",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#4aec44",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#4aec44",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Instructions",
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  color: "#4aec44",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Plex",
    url: "https://plex.aarwares.com",
    description:
      "Watch stuff",
    color: "#e5a00d",
  },
  {
    text: "Plex Discord",
    url: "https://discord.gg/uke4sy4VmT",
    description:
      "does not exist",
    color: "#5662f6",
  },
  {
    text: "Jellyfin",
    url: "https://jelly.aarwares.com/",
    description:
      "An alternative to Plex media player, not as good yet.",
    color: "#723287",
  },
  {
    text: "Minecraft - Vantis.ninja",
    url: "https://sites.google.com/site/vantisninja/",
    description:
      "Connect to mc.vantis.ninja",
    color: "#a4a40000a400000000",
  },
  {
    text: "Vantis Discord",
    url: "https://discord.gg/6ekDM2hbrX",
    description:
      "does not exist",
    color: "#5662f6",
  },
  {
    text: "About",
    url: "https://syb.lol/",
    badge: true,
    description:
      "Are we alone in the universe?",
    color: "#609060",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>SYB.LOL</title>
      <h1 style={headingStyles}>
        syb.lol
        <br />
        <span style={headingAccentStyles}>~ . ^ . ~</span>
      </h1>
      <p style={paragraphStyles}>
       Sophisticated nomenclature:
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=syblol`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=syblol`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
