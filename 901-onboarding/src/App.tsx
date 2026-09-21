import TeamList from './TeamList'
import { getTeamStatus } from './getTeamStatus'
import type { TeamStatus } from './getTeamStatus'
import type { Team } from './types'

getTeamStatus('1').then((result: TeamStatus) => console.log('Team 1:', result))
getTeamStatus('999').then((result: TeamStatus) =>
  console.log('Team 999:', result),
)

function App() {
  const teams: Team[] = [
    {
      id: '1',
      teamName: 'Code Champions',
      school: '901 Education Academy',
    },
    {
      id: '2',
      teamName: 'Tech Titans',
      school: 'Central High School',
    },
    {
      id: '3',
      teamName: 'Digital Dragons',
      school: 'Eastside Preparatory School',
    },
    {
      id: '4',
      teamName: 'Byte Builders',
      school: 'Westview Academy',
    },
    {
      id: '5',
      teamName: 'Logic Legends',
      school: 'Northside High School',
    },
  ]

  return <TeamList teams={teams} />
}

export default App
