import NavBar from "@/components/nav-bar/";

let NewSong = () => import('@/view/new-song/new-song')
let Rank = () => import('@/view/rank/rank')
let Plist = () => import('@/view/plist/plist')
let Singer = () => import('@/view/singer/singer');


export let routers = [
	{
		path:'/',
		title:"新歌",
		name:"NewSong",
		components:{
			navBar:NavBar,
			default:NewSong

		}
	},
	{
		path:'/rank',
		title:'排行',
		name:'Rank',
		components:{
			navBar:NavBar,
			defaul:Rank
		}
	},
	{
		path:'/plist',
		title:'歌单',
		name:'plist',
		components:{
			navBar:NavBar,
			default:Plist
		}
	},
	{
		path:'/singer',
		title:"歌手",
		name:"singer",
		components:{
			navBar:NavBar,
			default:Singer
		}
	}
];