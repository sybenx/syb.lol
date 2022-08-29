import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

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
  backgroundColor: "#674ea7",
  border: "0px solid #674ea7",
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
      "Media Server",
    color: "#e5a00d",
  },
  {
    text: "Jellyfin",
    url: "https://jelly.aarwares.com/",
    badge: true,
    description:
      "An alternative to Plex media player, not as good yet.",
    color: "#723287",
  },
  {
    text: "Plex Discord",
    url: "https://discord.gg/uke4sy4VmT",
    description:
      "Media request and info",
    color: "#5662f6",
  },
  {
    text: "Minecraft - Vantis.ninja",
    url: "https://sites.google.com/site/vantisninja/",
    description:
      "Connect to mc.vantis.ninja",
    color: "#ad1212",
  },
  {
    text: "Vantis Discord",
    url: "https://discord.gg/BXq8ryg",
    description:
      "Vantis server status and chat",
    color: "#5662f6",
  },
  {
    text: "About",
    url: "https://syb.lol/",
    description:
      "first",
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
                <span style={badgeStyle} aria-label="Beta Badge">
                  BETA
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <StaticImage
        alt="QRKL CIRLE"
        src="../images/qrkl.png"
        placeholder="blurred"
      />
    </main>
  )
}

export default IndexPage
