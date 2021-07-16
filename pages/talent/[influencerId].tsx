import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutubeSquare,
  faGooglePlusSquare,
  faPinterest,
  faPiedPiperSquare,
  faTiktok,
  faVine,
  faBitcoin,
} from '@fortawesome/free-brands-svg-icons';
import { darken } from 'polished';

import SiteLayout from 'components/layout/SiteLayout';

export default function SingleInfluencer() {
  return (
    <div>
      <TopBanner>
        <div className="banner-left">
          <Image
            src={`/images/talent-profile.jpg`}
            alt="profile"
            width={280}
            height={280}
            quality={90}
          />
          <div>
            <h3>Gwen Stacy</h3>
            <p className="headline">Some Headline</p>
            <p className="categories">Drama, Music, Travel</p>
            <p className="location">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ fontSize: 24, color: '#e74c3c', marginRight: '.5rem' }}
              />
              Rome, Italy
            </p>
            <ContactButton>Contact</ContactButton>
          </div>
        </div>
        <div className="banner-right">
          <h3>Total Reach: 1.3M</h3>
          <div className="reach-container">
            {TEMP_SOCIAL_DATA.map((social, key) => (
              <ReachIcon key={key} color={social.color}>
                <FontAwesomeIcon icon={social.icon} style={{ fontSize: 24 }} />
                <p>{social.reach}</p>
              </ReachIcon>
            ))}
          </div>
        </div>
      </TopBanner>

      <MiddleContainer>
        <h2>Summary</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem at delectus sint
          voluptatum voluptates quia laudantium ab deleniti impedit doloremque! Enim ratione, hic
          quidem aspernatur molestiae laudantium repudiandae harum! Assumenda reiciendis quaerat
          illum laboriosam quos veritatis voluptas fugiat a ex?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolorem eos
          repellendus earum fugit distinctio at corporis est quae, saepe nostrum quos quis totam
          veniam perferendis necessitatibus explicabo impedit illum quisquam pariatur velit? Saepe,
          maiores. Officiis tempore, libero nesciunt autem perspiciatis officia, magnam aperiam eos
          facere exercitationem corrupti similique odit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facere placeat nesciunt delectus obcaecati eum porro, corrupti animi
          corporis sit? Corrupti unde facilis ad amet explicabo voluptatibus voluptatem atque vitae
          quo.
        </p>

        <h2>Social</h2>
        <div className="social-container">
          {TEMP_SOCIAL_DATA.map((social, key) => (
            <SocialCard key={key}>
              <div>
                <FontAwesomeIcon
                  icon={social.icon}
                  style={{ fontSize: 36, color: social.color, marginRight: '1rem' }}
                />
                <p>{social.handle}</p>
              </div>
              <div>
                <button>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    style={{ fontSize: 24, color: '#AEB5D8' }}
                  />
                </button>
              </div>
            </SocialCard>
          ))}
        </div>
      </MiddleContainer>

      <SimilarContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 className="container-title">Similar Influencers</h3>
        </div>

        <div className="cards-container">
          {[...Array(3)].map((_, key) => (
            <SimilarCard key={key}>
              <Image
                src={`/images/talent-profile.jpg`}
                alt="similar-profile"
                width={150}
                height={150}
                quality={90}
              />

              <div className="card-info">
                <h3 className="name" style={{ marginBottom: 0 }}>
                  Influencer Name
                </h3>
                <p className="categories">Fitness, DIY, Skits </p>
                <p style={{ fontWeight: 700 }}>
                  830K <span style={{ color: 'gray' }}>reach</span>
                </p>
              </div>
            </SimilarCard>
          ))}
        </div>
      </SimilarContainer>
    </div>
  );
}

const TopBanner = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 2rem;

  .banner-left {
    display: flex;
    padding: 0 1rem;
    align-items: center;
    width: 60%;

    img {
      border: 2px solid ${(props) => props.theme.colors.pink} !important;
      border-radius: 200px;
    }

    > div {
      margin-left: 2rem;

      h3 {
        font-size: 2rem;
        margin-bottom: 0;
        color: ${(props) => props.theme.colors.darkGray};
      }

      .headline {
        font-style: italic;
        margin: 0.75rem 0;
        color: ${(props) => props.theme.colors.purple};
      }

      .categories {
        margin: 0.75rem 0;
      }

      .location {
        font-size: 1.25rem;
      }
    }

    @media (max-width: 1060px) {
      flex-direction: column;
    }

    @media (max-width: 700px) {
      flex-direction: row;
      width: 100%;
    }

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }

  .banner-right {
    padding: 0 1rem 0 2.5rem;
    width: 40%;
    border-left: 1px solid lightgray;

    @media (max-width: 700px) {
      border-left: none;
      border-top: 1px solid lightgray;
      margin-top: 2rem;
      padding-top: 1rem;
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ReachIcon = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  width: 75px;
  padding: 1rem;
  border-radius: 50px;
  color: white;
  display: inline-block;
  text-align: center;
  margin: 0 1rem 1rem 0;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);

  p {
    margin: 0.25rem 0 0;
    font-size: 0.8rem;
  }
`;

const MiddleContainer = styled.div`
  padding: 2rem;

  p {
    color: ${(props) => props.theme.colors.gray};
  }

  .social-container {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 720px) {
      justify-content: center;
    }
  }
`;

const SocialCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  width: 300px;
  margin: 0 1rem 1rem 0;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const SimilarContainer = styled.div`
  border-top: 1px solid lightgray;
  margin: 1rem 0;

  .container-title {
    display: inline-block;
    margin: 0 auto;
    background: white;
    text-align: center;
    transform: translateY(-13px);
    padding: 0 2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.gray};
  }

  .cards-container {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;

    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }
  }
`;

const SimilarCard = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  margin: 0.5rem 1rem;

  img {
    border-radius: 100px;
    border: 2px solid ${(props) => props.theme.colors.teal} !important;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    text-align: left;

    .categories {
      font-style: italic;
      margin: 0.75rem 0;
      color: ${(props) => props.theme.colors.purple};
    }
  }

  @media (min-width: 820px) and (max-width: 1200px) {
    width: 46%;
  }
`;

const ContactButton = styled.button`
  display: block;
  width: 100%;
  background: ${(props) => props.theme.colors.paleBlue};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border-radius: 50px;
  margin: 0.75rem 0.5rem 0.25rem 0;
  font-size: calc(10px + (18 - 10) * ((100vw - 900px) / (1800 - 900)));
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.paleBlue)};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.paleBlue)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.paleBlue)};
`;

SingleInfluencer.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;

const TEMP_SOCIAL_DATA = [
  {
    icon: faFacebookSquare,
    color: '#1877f2',
    handle: 'Gwen Stacy',
    reach: '12K',
  },
  {
    icon: faTwitter,
    color: '#1da1f2',
    handle: '@gwenstacy',
    reach: '24K',
  },
  {
    icon: faYoutubeSquare,
    color: '#ff0000',
    handle: 'Gwen Films',
    reach: '2.1m',
  },
  {
    icon: faInstagram,
    color: '#c32aa3',
    handle: '@theRealGwenStacy',
    reach: '990K',
  },
  {
    icon: faPinterest,
    color: '#bd081c',
    handle: 'Gwen Stacy',
    reach: '100',
  },
  {
    icon: faLinkedin,
    color: '#0a66c2',
    handle: 'Gwen Stacy',
    reach: '333',
  },
  {
    icon: faGooglePlusSquare,
    color: '#db4437',
    handle: 'Gwen Stacy',
    reach: '200',
  },
  {
    icon: faPiedPiperSquare,
    color: '#25d366',
    handle: 'Gwen Stacy',
    reach: '0',
  },
  {
    icon: faTiktok,
    color: '#69c9d0',
    handle: '@GwenStacyTokz',
    reach: '33K',
  },
  {
    icon: faVine,
    color: '#00b489',
    handle: '@GwenStacyTokz',
    reach: '132K',
  },
  {
    icon: faBitcoin,
    color: '#fbbc05',
    handle: '@CryptoStacy',
    reach: '2K',
  },
];