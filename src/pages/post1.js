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
  maxWidth: 400,
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
  text: "Home",
  url: "https://syb.lol",
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

]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>syb.lol</title>
      <h1 style={headingStyles}>
        syb.lol
        <br />
        <span style={headingAccentStyles}>~ . ^ . ~</span>
      </h1>
      <h3>
      	I feel bad for Google
      </h3>
      <p style={paragraphStyles}>
       Once upon a time, Google was our hero, even our friend. Today it is the villain. The enemy. Taking advantage of every opportunity it gets to abuse its power, embed itself into the governments around the world that will partner with it (moral attrocities ignored, not to mention the casual user's wellbeing). Google has become a behemoth concerned with its own survival before the survival of anything or anyone else. 
      <br/><br/>
       I remember the days when I relished the idea of downloading Chrome on the next computer I used. How much Google Docs revolutionized creating documents. From random shutdowns deleting all your work to being able to seamlessly access your work on any machine you had access to, never losing any progress ever.
       <br/><br/>
       Some of this is still true about Google. But this is also the company that's detached itself from reality. Google News is the targetted PR machine, serving whatever whims its political ally's request.
       <br/><br/>
       Will we ever get back to the "Good ole' days?"... Or are those days over? Will Google sink further into becoming the New Standard Oil or AT&T of old. Monopolies that are so entrenched they are inexplicably linked to surviving on monopolistic power by means of government favors and regulation hellbent on pushing the little guy down.
       <br/><br/>
       Unsure. Good luck to us I guess
       <br/><br/><br/><br/>
       <b>Aaron</b>
       <br/><br/>
       <i>2022-9-5 9:55AM</i>
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
        placeholder="tracedSVG"
        width="20"
      />
    </main>
  )
}

export default IndexPage
