import TeamCard from './TeamCard'
import type { Team } from './types'

function App() {
  const team: Team = {
    id: '1',
    teamName: 'Code Champions',
    school: '901 Education Academy',
  }

  return <TeamCard team={team} />
}

export default App
