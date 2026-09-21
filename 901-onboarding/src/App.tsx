import { useState } from 'react'
import TeamList from './TeamList'
import { getTeamStatus } from './getTeamStatus'
import type { Team } from './types'

function App() {
  const [teamStatusAttr, setTeamStatusAttr] = useState<string | null>(null)

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

  function dispatch(eventName: string, detail?: unknown) {
    if (
      eventName === 'requestTeamStatus' &&
      typeof detail === 'object' &&
      detail !== null &&
      'teamId' in detail &&
      typeof detail.teamId === 'string'
    ) {
      setTeamStatusAttr(null)
      getTeamStatus(detail.teamId).then((result) => {
        setTeamStatusAttr(JSON.stringify(result))
      })
    }
  }

  return (
    <TeamList
      teams={teams}
      attributes={{ 'team-status': teamStatusAttr }}
      dispatch={dispatch}
    />
  )
}

export default App
