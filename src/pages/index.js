import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import db from '../../db.json'

import QuizBackground from '../components/QuizBackground'
import QuizContainer from '../components/QuizContainer'
import QuizLogo from '../components/QuizLogo'
import Widget from '../components/Widget'
import Input from '../components/Input'
import Button from '../components/Button'
import Footer from '../components/Footer'
import GitHubCorner from '../components/GitHubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const Home = () => {
  const router = useRouter()
  const [name, setName] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()

    router.push(`/quiz?name=${name}`)

    console.log('Submitted')
  }, [])

  const handleChange = useCallback((event) => {
    setName(event.target.value)
    console.log(event.target.value)
  }, [])

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={handleSubmit}>
                <Input onChange={handleChange} placeholder="Diz aí seu nome" />

                <Button type="submit" disabled={name.length === 0}>
                  Jogar
                  {name}
                </Button>
              </form>
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
        <GitHubCorner projectUrl="https://github.com/omariosout" />
      </QuizBackground>
    </>
  )
}

export default Home
