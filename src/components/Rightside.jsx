import React from 'react'
import styled from 'styled-components';

const Rightside = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <NewsList>
          <li><p>India’s IVF industry grows rapidly</p>
            <span>19h ago • 734 readers</span></li>
          <li><p>US visa delays hit Indian IT talent</p>
            <span> 2d ago • 7,306 readers</span></li>
          <li><p>Cricket broadcast gets tech savvy</p>
            <span>19h ago • 358 readers</span></li>
          <li><p>Discussing mental health with peers</p>
            <span> 1d ago • 906 readers</span></li>
          <li><p>Restaurants eye travel retail</p>
            <span>19h ago • 74 readers</span></li>
          <li><p>More women enter IT workforce</p>
            <span> 1d ago • 546 readers</span></li>
          <li><p>Fraud detection in focus at India Inc</p>
            <span>19h ago • 734 readers</span></li>
          <li><p>US visa delays hit Indian IT talent</p>
            <span> 2d ago • 75 readers</span></li>
          <li><p>Women at India Inc more stressed</p>
            <span>19h ago • 526 readers</span></li>
          <li><p>Retailers bet big on ethnic wear</p>
            <span> 2d ago • 306 readers</span></li>
        </NewsList>
      </FollowCard>
    </Container>
  )
}

const Container = styled.div`
    grid-area: rightside;
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    padding: 12px;
`;

const Title = styled.div`
    h2{
      font-size: 16px;
      font-weight: 700;
      padding: 10px 0 0 10px;
    }
    img{
      height: 16px;
      width: 16px;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const NewsList = styled.ul`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.6);
  text-align: start !important;

  p{
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
  span{
    font-size: 13px;
  }
  li{
    &:hover {
    background-color: rgba(0,0,0,0.08);
    }
  }
`
export default Rightside