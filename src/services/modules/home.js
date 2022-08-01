import myRequest from '../request'
export function getHotSuggests() {
  return myRequest.get({
    url: '/home/hotSuggests'
  })
}
