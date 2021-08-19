import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { darken } from 'polished';
import styled from 'styled-components';

import useWindowResize from 'components/hooks/useWindowResize';
import { ClientContext } from 'pages/clients';

export default function CampaignModal() {
  const { isModalOpen, setIsModalOpen } = useContext(ClientContext);

  const [windowWidth] = useWindowResize();

  return (
    <div style={{ position: 'relative' }}>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Influencer Modal"
        ariaHideApp={false}
        style={{
          overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,0.7)' },
          // @ts-ignore
          content: windowWidth > 900 ? regularModal : mobileModal,
        }}
      >
        <MainContainer>
          <ClientImageContainer>
            {windowWidth <= 900 && (
              <CloseButton
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(false);
                }}
              >
                X
              </CloseButton>
            )}
            <Image
              src={`/images/clients/campaign-modal.jpg`}
              alt="logo"
              quality={90}
              layout="fill"
              objectFit="cover"
            />
          </ClientImageContainer>
          <ClientDescriptionContainer>
            {windowWidth > 900 && (
              <CloseButton
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(false);
                }}
              >
                X
              </CloseButton>
            )}

            <h3 className="heading">Lorem ipsum dolor sit amet.</h3>

            <h3 className="sub-heading">Campaign Description</h3>

            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas eveniet
              labore porro laborum non? Alias incidunt doloremque vero, deleniti illo,
              exercitationem molestias, commodi delectus voluptas veniam aspernatur quae nihil quis
              mollitia. Commodi nihil culpa voluptatem odit praesentium debitis facilis dolore eum
              sequi cupiditate voluptatum excepturi, ab pariatur. Aperiam, ipsam!
            </p>

            <h3 className="sub-heading">The Demographics</h3>

            <p className="description-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus enim,
              officiis beatae eveniet nihil quia alias, corrupti odio, sit vero quasi distinctio
              animi a.
            </p>

            <p className="description-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus enim,
              officiis beatae eveniet nihil quia alias, corrupti odio, sit vero quasi distinctio
              animi a.
            </p>

            <h3 className="sub-heading">The Cast</h3>

            <p className="description-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus enim,
              officiis beatae eveniet nihil quia alias, corrupti odio, sit vero quasi distinctio
              animi a.
            </p>

            <p className="description-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus enim,
              officiis beatae eveniet nihil quia alias, corrupti odio, sit vero quasi distinctio
              animi a.
            </p>

            <StartCampaignButton>Start Your Campaign</StartCampaignButton>
          </ClientDescriptionContainer>
        </MainContainer>
      </Modal>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ClientImageContainer = styled.div`
  position: relative;
  height: 80vh;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    height: 40vh;
  }
`;

const ClientDescriptionContainer = styled.div`
  padding: 2rem 2rem 5rem;
  width: 50%;
  overflow-y: scroll;
  height: 80vh;

  h3 {
    text-transform: uppercase;
  }

  h3.sub-heading {
    font-size: 1rem;
  }

  p.description-text {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.85rem;
    line-height: 1.5rem;
  }

  @media (max-width: 900px) {
    position: relative;
    width: 100%;
    height: auto;
    overflow-y: auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 25px;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  background: #ff0051;
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50px;

  &:hover {
    background: ${darken(0.1, '#e20046')};
  }

  ${(props) => props.theme.global.setFocus('#e20046')}

  @media (max-width: 900px) {
    z-index: 999;
  }
`;

const StartCampaignButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  background: ${(props) => props.theme.colors.pink};
  color: #fff;
  border: none;
  padding: 1rem;
  font-size: calc(16px + (18 - 16) * ((100vw - 400px) / (1800 - 400)));
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.pink)};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.pink)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.pink)};

  @media (max-width: 900px) {
    position: fixed;
    left: 0;
    width: 100%;
  }
`;

const mobileModal = { top: 0, bottom: 0, left: 0, right: 0 };
const regularModal = {
  top: '10%',
  maxWidth: '80%',
  height: '80vh',
  margin: '0 auto',
  overflow: 'hidden',
};