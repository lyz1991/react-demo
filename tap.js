let {SyncBailHook} = require('tapable');//SyncBailHook同步熔断保险钩子,即return一个非undefined的值，则不再继续执行后面的监听函数

class Lesson{
	constructor(){
		this.hooks = {
			arch: new SyncBailHook(['name'])
		}
	}
	tap(){
		this.hooks.arch.tap('node',function(name){
			console.log('node',name)
			// return undefined;
			// return '想停止学习'//当返回的内容为非undefined的时候，会停止往下执行监听函数
		})
		this.hooks.arch.tap('react',function(name){
			console.log('react',name)
		})
	}
	start(){
		this.hooks.arch.call('yuhua');
	}
}

let l = new Lesson();
l.tap();
l.start();