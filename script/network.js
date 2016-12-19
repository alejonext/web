const net  = {
	facebook : 'facebook-square',
	twitter : 'twitter-square',
	google  : 'google-plus-square',
	tumblr : 'google-plus-square',
	reddit : 'reddit-square',
	linkedin : 'linkedin-square',
	pinterest : 'pinterest-square',
	email : 'envelope-o',
	github : 'github',
	android : 'android',
	apple : 'apple',
	code : 'code'
};

export const name = 'network';
export default function () {
	return {
		restrict : 'A',
		template : '<a class="{{item}}" href="{{url}}"><i ng-if="icon" class="fa fa-{{icon}} fa-lg"></i><span ng-if="!icon">{{network}}</span></a>',
		scope :  {
	      network: '=',
	      url : '=',
	      item : '=',
	    },

		link($scope) {

			$scope.icon = net[$scope.network];
		}
	}
}