import { Permissions, webMethod } from './wix-web-methods-mock'
import wixData from './wix-data-mock'

export type TeamStatus = {
  id: string
  teamName: string
  approved: boolean
} | null

export const getTeamStatus = webMethod(
  Permissions.Anyone,
  async (teamId: string): Promise<TeamStatus> => {
    const team = await wixData.get('Teams', teamId)

    if (!team) {
      return null
    }

    return {
      id: team._id,
      teamName: team.teamName,
      approved: team.approved,
    }
  },
)
