

export const CHANGE_VIEW = 'CHANGE_VIEW'

export function changeView(pollView) {
  console.log("Changing View");

  return {
    type: CHANGE_VIEW,
    pollView : pollView
  }
}
