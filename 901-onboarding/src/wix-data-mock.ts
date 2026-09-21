type TeamRow = {
  _id: string
  teamName: string
  school: string
  approved: boolean
}

const mockTeams: Record<string, TeamRow> = {
  '1': {
    _id: '1',
    teamName: 'Code Champions',
    school: '901 Education Academy',
    approved: true,
  },
  '2': {
    _id: '2',
    teamName: 'Tech Titans',
    school: 'Central High School',
    approved: false,
  },
  '3': {
    _id: '3',
    teamName: 'Digital Dragons',
    school: 'Eastside Preparatory School',
    approved: true,
  },
  '4': {
    _id: '4',
    teamName: 'Byte Builders',
    school: 'Westview Academy',
    approved: false,
  },
  '5': {
    _id: '5',
    teamName: 'Logic Legends',
    school: 'Northside High School',
    approved: true,
  },
}

async function get(
  collectionId: string,
  itemId: string,
): Promise<TeamRow | null> {
  void collectionId
  const team = mockTeams[itemId]
  if (team) {
    return team
  }
  return null
}

export default {
  get,
}
