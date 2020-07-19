import React from "react";
import styled from "styled-components";
import { profile } from "~/data/profile"
import Image from "~/Parts/Image"
import { Fade } from 'react-awesome-reveal';
import GitHub from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import { githubLink, telLink, mailLink, twitterLink } from "~/lib/index"

type Props = {
  className?: string;
  profile: profile

}

const Component: React.FC<Props> = (props) => {
  const { className, profile } = props;
  return (
    <div className={className}>
      <div className="profile_image">
        <Image filename={profile.image} height={"15rem"} width={"15rem"} style={{ borderRadius: "50%" }} />
      </div>
      <Fade direction="top" triggerOnce >
        <h2 className="name">{profile.name[0]} {profile.name[1]}</h2>
      </Fade>
      <Fade direction="top" delay={200} triggerOnce >
        <div className="info">
          <h3 className="title width_material_icon">GitHub <GitHub /></h3>
          <a
            href={githubLink(profile.github)}
            rel="noopener noreferrer"
            target="_blank" >
            <div className="value">{profile.github}</div>
          </a>
        </div>
      </Fade>
      <Fade direction="top" delay={400} triggerOnce >
        <div className="info">
          <h3 className="title width_material_icon">Phone <PhoneIcon /></h3>
          <a href={telLink(profile.tel)} rel="noopener noreferrer" target="_blank" >
            <div className="value">{profile.tel}</div>
          </a>
        </div>
      </Fade>
      <Fade direction="top" delay={600} triggerOnce >
        <div className="info">
          <h3 className="title width_material_icon">Email <MailIcon /></h3>
          <a href={mailLink(profile.mail)} rel="noopener noreferrer" target="_blank" >
            <div className="value">{profile.mail}</div>
          </a>
        </div>
      </Fade>

    </div>
  )
}

export default styled(Component)`
  flex-basis: 30rem;
  flex-grow: 0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
  & h2{
    font-weight: 200;
  }
  & h3{
    justify-content: center;
    margin: 1.5rem .5rem 1rem;
  }
  & > * {
    text-align: center;
  }
  .profile_image{
    display:flex;
    justify-content: center;
  }
  .name{
    text-align: center;
  }
`;