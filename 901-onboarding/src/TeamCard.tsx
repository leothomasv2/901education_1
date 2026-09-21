import type { Team } from './types'

type TeamCardProps = {
  team: Team
  isSelected: boolean
  onSelect: () => void
}

function TeamCard({ team, isSelected, onSelect }: TeamCardProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onSelect}
      style={{
        border: isSelected ? '3px solid #646cff' : '1px solid #cccccc',
        backgroundColor: isSelected ? '#e8e9ff' : 'white',
        color: '#213547',
        margin: '8px',
        padding: '16px',
        cursor: 'pointer',
      }}
    >
      <h2>{team.teamName}</h2>
      <p>{team.school}</p>
    </button>
  )
}

export default TeamCard
