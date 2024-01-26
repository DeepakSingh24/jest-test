import { useState, useEffect } from 'react'
import { SkillsProps } from './skills.types'
export const Skills = (props: SkillsProps) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setIsLoggedIn(true), 1001)
  }, [])

  return (
    <div>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true)
          }}
        >
          Login
        </button>
      )}
    </div>
  )
}
