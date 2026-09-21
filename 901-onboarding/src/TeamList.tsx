import TeamCard from './TeamCard'
import type { Team } from './types'

type TeamListProps = {
  teams: Team[]
}

function TeamList({ teams }: TeamListProps) {
  if (teams.length === 0) {
    return <p>No teams yet.</p>
  }

  return (
    <section>
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </section>
  )
}

export default TeamList
