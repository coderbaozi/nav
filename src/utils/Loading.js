import {
	LoadingPlugin
} from 'tdesign-vue-next';

const Loading = {
	start : () => {
		return LoadingPlugin({
			size: 'small',
			fullscreen: true,
			text: 'loading',
			delay: 100,
		});
	}
};	
export default Loading;
