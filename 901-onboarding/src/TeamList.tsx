import { useState } from 'react'
import TeamCard from './TeamCard'
import type { TeamStatus } from './getTeamStatus'
import type { Team } from './types'

type TeamListProps = {
  teams: Team[]
  attributes: Record<string, string | null>
  dispatch: (eventName: string, detail?: unknown) => void
}

function TeamList({ teams, attributes, dispatch }: TeamListProps) {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null)

  if (teams.length === 0) {
    return <p>No teams yet.</p>
  }

  const selectedTeam = teams.find((team) => team.id === selectedTeamId)
  const teamStatusAttr = attributes['team-status']
  const teamStatus: TeamStatus | undefined =
    teamStatusAttr === null
      ? undefined
      : (JSON.parse(teamStatusAttr) as TeamStatus)

  function selectTeam(teamId: string) {
    setSelectedTeamId(teamId)
    dispatch('requestTeamStatus', { teamId })
  }

  return (
    <section>
      <p>Selected: {selectedTeam?.teamName ?? 'none'}</p>
      {selectedTeamId && (
        <p>
          {teamStatus?.id !== selectedTeamId
            ? 'Loading...'
            : teamStatus.approved
              ? 'Approved.'
              : 'Pending Approval.'}
        </p>
      )}
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          isSelected={team.id === selectedTeamId}
          onSelect={() => selectTeam(team.id)}
        />
      ))}
    </section>
  )
}

export default TeamList
