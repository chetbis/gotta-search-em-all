import React from 'react'
import Container from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../shared'

type ControlsProps = {
  pokemonIndex: number | string
  changePokemonIndex: (newIndex: number) => void
}

const Controls = ({ pokemonIndex, changePokemonIndex }: ControlsProps) => {
  return (
    <Container>
      <Button onClick={() => changePokemonIndex(Number(pokemonIndex) - 1)}>
        <FontAwesomeIcon icon={faArrowDown} />
      </Button>
      <span>
        No:{' '}
        <input
          type="text"
          className="input"
          value={pokemonIndex}
          onChange={(e) => changePokemonIndex(Number(e.target.value))}
        />
      </span>
      <Button onClick={() => changePokemonIndex(Number(pokemonIndex) + 1)}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </Container>
  )
}

export default Controls