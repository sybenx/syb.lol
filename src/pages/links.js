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
  url: "https://youtu.be/dQw4w9WgXcQ",
  color: "#4aec44",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#5B5B5B",
  border: "0px solid #FF4500",
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
    text: "Plex on Thorware",
    url: "http://thorware:32400",
    badge: true,
    description:
      "'Watch anytime, anywhere with Plex'",
    color: "#e5a00d",
  },
  {
    text: "Jellyfin on Thorware",
    url: "http://thorware:8096/",
    badge: true,
    description:
      "'The Free Software Media System' < Plex",
    color: "#723287",
  },
  {
    text: "Plex Stats (Tautulli",
    url: "http://thorware:8181",
    badge: true,
    description:
      "Tautulli",
    color: "Orange",
  },
  {
    text: "Nextcloud via VPS",
    url: "https://nextcloud.syb.lol/",
    description:
      "'Nextcloud server, hosted local (1000GB)'",
    color: "#088FD9",
  },
  {
    text: "Sonarr",
    url: "http://thorware:8989/",
    badge: true,
    description:
      "TV Shows tracker",
    color: "lightblue",
  },
  {
    text: "Radarr",
    url: "http://thorware:7878/",
    badge: true,
    description:
      "Movies tracker",
    color: "Orange",
  },
  {
    text: "FileBrowser",
    url: "http://thorware:4000",
    badge: true,
    description:
      "files browser (12TB)",
    color: "Orange",
  },
 {
    text: "MCSS Remote Panel",
    url: "http://beelink:25560",
    badge: true,
    description:
      "Panel",
    color: "Green",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title href="https://syb.lol/">syb.lol</title>
      <h1 style={headingStyles}>
        syb.lol
        <br />
        <span href="https://syb.lol/" style={headingAccentStyles}>~ ° ^ ° ~</span>
      </h1>
      <p style={paragraphStyles}>
       links:
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="Tailscale">
                  tailscale
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
        placeholder="tracedSVG"
        width="20"
      />
    </main>
  )
}

export default IndexPage
