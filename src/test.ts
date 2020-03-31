import { WolfClient, User, DeviceType } from 'wolfapi-ts';
import {
	ExtendedMessage,
	ExtendedGroup,
	ExtendedUser,
	Message,
	CGroup
} from 'wolfapi-ts';
import { Plugin } from 'wolfapi-ts';

import {
	Language,
	OnlineState,
	LookingFor,
	RelationshipStatus,
	Gender
} from 'wolfapi-ts';

class Main {
	public bot: WolfClient;

	async login() {
		//All of this is pretty self explanatory.
		this.bot = new WolfClient();

		this.bot.On.LoginSuccess = user => {
			// TO send a message in a joiuned group
			this.bot.Messaging.groupMessage(18137681, 'hello wolf');
			// TO send a private message putt users Id
			this.bot.Messaging.privateMessage(76855746, 'hello wolf');
			// TO join a group put group name in "mytestroom " and If group is password protected putt password in space of "null"
			this.bot.Action.joinGroup('mytestroom', null, result => {
				console.log(result.alreadyInGroup);
			});
			//To leave a group putt group id
			this.bot.Action.leaveGroup(18137681, result => {
				console.log(result);
			});
			//to fetch the list of all groupememeber
			this.bot.Info.groupMemberList(18137681, resp => {
				console.log(resp[1].sort.nickname);

				console.log(resp);
			});

			console.log(user.nickname);
		};
		this.bot.On.LoginFailed = resp => {
			console.log(resp);
		};

		this.bot.On.Log = data => {
			console.log(data);
		};
		this.bot.On.Disconnected = () => {
			console.log('disconnected');
		};
		this.bot.On.Connected = () => {
			console.log('connected');
		};

		await this.bot.login('faisal.hafeez77@gmail.com', 'qw4hddqcrg');
	}
}
new Main().login();
