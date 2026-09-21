export const Permissions = { Anyone: 'Anyone', SiteMember: 'SiteMember' }
export const webMethod = <Args extends unknown[], Result>(
  permission: string,
  fn: (...args: Args) => Result,
) => {
  void permission
  return fn
}
