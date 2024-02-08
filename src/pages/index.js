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
  text: "*",
  url: "https://aaro.cc",
  color: "#4aec44",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#98221C",
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
    text: "aaro.cc",
    url: "https://aaro.cc",
    badge: true,
    description:
      "Aaro.cc media services links",
    color: "#3cc806",
  },
  {
    text: "AarWares",
    url: "https://aarwares.com",
    badge: true,
    description:
      "Bartender, etc.",
    color: "#0000FF",
  },
  {
    text: "Plex on syb.lol",
    url: "https://plex.syb.lol",
    badge: false,
    description:
      "'Watch anytime, anywhere with Plex'",
    color: "#e5a00d",
  },
  {
    text: "Jellyfin on syb.lol",
    url: "https://jellyfin.syb.lol/",
    badge: false,
    description:
      "Watch anytime anywhere *without ads*",
    color: "#723287",
  },
  {
    text: "Plex Discord",
    url: "https://discord.gg/uke4sy4VmT",
    description:
      "Media request and info",
    color: "#5662f6",
  },
  /*
  {
    text: "Plex Stats",
    url: "https://plexstats.aarwares.com",
    badge: true,
    description:
      "Tautulli",
    color: "Orange",
  },
  */
  {
    text: "Nextcloud on aaro.cc",
    url: "https://nextcloud.aaro.cc/",
    badge: true,
    description:
      "'Nextcloud server, hosted on Starlink (1000GB)'",
    color: "#088FD9",
  },
  {
    text: "Minecraft - Vantis.Ninja",
    url: "https://vantis.ninja/",
    description:
      "A Minecraft community since 2016",
    color: "#ad1212",
  },
  {
    text: "Vantis Discord",
    url: "https://discord.gg/BXq8ryg",
    description:
      "Vantis server status and chat",
    color: "#5662f6",
  },
  /*
 {
    text: "Minecraft playtime and stats",
    url: "https://plananalytics.vantis.ninja",
    badge: true,
    description:
      "Plan | Analytics",
    color: "Green",
  },
  {
    text: "X",
    url: "https://x.com/syben_",
    description:
      "neuron",
    color: "#FFFFFF",
  },
  */
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>syb.lol</title>
      <h1 style={headingStyles}>
        syb.lol
        <br />
        <span style={headingAccentStyles}>~ ° ^ ° ~</span>
      </h1>
      <p style={paragraphStyles}>
       Sites and hosted services:
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
                <span style={badgeStyle} aria-label="Beta Badge">
                  cloudflare
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
