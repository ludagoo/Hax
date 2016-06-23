import Page from '../js/page'

export default (new Page({
	'id': 'Channel',
	'view': 'list',
	'icon': state => state.get('media') === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => new Map([[ 'page', 'Channels' ],[ 'media', state.get('media') ]]),
	'data': state => {

		let channelid =  +state.get('channelid')

		return xbmc.get({
			method: 'PVR.GetChannelDetails',
			params: {
				'properties': [ "thumbnail", "channeltype", "hidden", "locked", "channel", "lastplayed" ],
				'channelid': channelid
			}
		})
		.then(result => result.channeldetails || {})
		.then(details => ({
			thumbnail: details.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(details.thumbnail),
			pageName: { 'radio': 'Radio ', 'tv': 'TV ' }[details.channeltype] + 'Channel',
			title: details.label,
			actions: [ {
				label: 'Play',
				thumbnail: 'img/buttons/play.png',
				link: "javascript:(() => { xbmc.Open({ 'item': { 'channelid': "+channelid+" } }) })()"
			} ]
		}))

	}
}));