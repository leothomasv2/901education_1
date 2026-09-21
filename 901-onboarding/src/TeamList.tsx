import { useState } from 'react'
import TeamCard from './TeamCard'
import type { Team } from './types'

type TeamListProps = {
  teams: Team[]
}

function TeamList({ teams }: TeamListProps) {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null)

  if (teams.length === 0) {
    return <p>No teams yet.</p>
  }

  const selectedTeam = teams.find((team) => team.id === selectedTeamId)

  return (
    <section>
      <p>Selected: {selectedTeam?.teamName ?? 'none'}</p>
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          isSelected={team.id === selectedTeamId}
          onSelect={() => setSelectedTeamId(team.id)}
        />
      ))}
    </section>
  )
}

export default TeamList
