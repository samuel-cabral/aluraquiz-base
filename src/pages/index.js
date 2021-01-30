import React from 'react'
import Head from 'next/head'

import db from '../../db.json'

import QuizBackground from '../components/QuizBackground'
import QuizContainer from '../components/QuizContainer'
import QuizLogo from '../components/QuizLogo'
import Widget from '../components/Widget'
import Footer from '../components/Footer'
import GitHubCorner from '../components/GitHubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const Home = () => {
  return (
    <>
      <Head>
        <title>CSS Quiz</title>
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/omariosouto" />
      </QuizBackground>
    </>
  )
}

export default Home
