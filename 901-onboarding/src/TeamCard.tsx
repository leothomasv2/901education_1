import type { Team } from './types'

type TeamCardProps = {
  team: Team
}

function TeamCard({ team }: TeamCardProps) {
  return (
    <article>
      <h2>{team.teamName}</h2>
      <p>{team.school}</p>
    </article>
  )
}

export default TeamCard
