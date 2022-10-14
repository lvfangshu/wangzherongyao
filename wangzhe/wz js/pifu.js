(function () {
	let container = document.querySelector("#tganime_slide_slidein"),
		wrapper = container.querySelector(".slide-content"),
		slideList = Array.from(wrapper.querySelectorAll(".item_content")),
		panginationList = Array.from(container.querySelectorAll(".item_subnav a"));
	
		let count = slideList.length,
		step = 2,
		interval = 1000,
		speed = 200,
		autoTimer = null,
		w = container.offsetWidth;
		//

	const autoFocus = function autoFocus() {
		let temp = step;
		// if (temp >= count - 1) temp = 0;
		panginationList.forEach((pagination, index) => {
			if (index === temp) {
				pagination.className = "active";
				return;
			}
			pagination.className = "";
		})
	}
	// 初始化样式
	const swiperInit = function swiperInit() {
		// 克隆
		// let clone = slideList[0].cloneNode(true)//深度克隆
		// wrapper.appendChild(clone);
		// count++;
		// slideList.push(clone);
		// wrapper.style.width = `${count * w}px`;

		// 控制默认选中
		// if (step < 0) step = 0;
		// if (step > count - 1) step = count - 1;
		wrapper.style.transitionDuration = '0ms';
		wrapper.style.left = `${-step * w}px`;
		autoFocus();
	}
	swiperInit()
	// 控制切换
	const moveToNext = function moveToNext() {
		step++;
		if (step >= count) {
			//立即运动到第一张（无缝衔接）
			wrapper.style.transitionDuration = `0ms`//无动画
			wrapper.style.left = `0`;//跳转到第一张
			step = 1;//运动到第二章
			wrapper.offsetWidth;//获取元素样式，刷新渲染队列，让上述样式立即渲染一次
		}

		wrapper.style.transitionDuration = `${speed}ms`;
		wrapper.style.left = `${-step * w}px`
		autoFocus()//分页器重新调用
	}
	const moveToprev = function moveToprev() {
		step--;
		// if (step < 0) {
		// 	//立即运动到克隆的第一张
		// 	wrapper.style.transitionDuration = `0ms`
		// 	wrapper.style.left = `${-(count - 1) * w}px`
		// 	step = count - 2;
		// 	wrapper.offsetWidth;//获取元素样式，刷新渲染队列，让上述样式立即渲染一次
		// }

		wrapper.style.transitionDuration = `${speed}ms`;
		wrapper.style.left = `${-step * w}px`
		autoFocus()//分页器重新调用
	}
	// // 控制运动
	// if (autoTimer === null) {
	// 	autoTimer = setInterval(moveToNext, interval)
	// }
	// container.onmouseenter = function () {
	// 	clearInterval(autoTimer);
	// 	autoTimer = null;
	// }
	// container.onmouseleave = function () {
	// 	if (autoTimer === null) {
	// 		// 如果定时器为null,重新设置定时器
	// 		autoTimer = setInterval(moveToNext, interval);
	// 	}
	// }
	// 页卡切换的时候，也要控制自动轮播暂停、重启
	// document.onvisibilitychange = function () {
	// 	if (document.hidden) {
	// 		// 离开页面
	// 		clearInterval(autoTimer);
	// 		autoTimer = null;
	// 		return;
	// 	}
	// 	// 重新进入
	// 	if (autoTimer === null) {
	// 		autoTimer = setInterval(moveToNext, interval)
	// 	}
	// }
	// 点击左右导航按钮控制切换
	


	// 防抖：在用户频繁触发的时候，我们“只识别一次”
	// 点击一个按钮，需要向服务器发送请求「大概需要10ms」，我们做防抖可以保证：第一次触发后，在10ms内，你再点击N次也不触发！！

	// 节流：在用户频繁触发的时候，我们期望“降低触发频率”
	// window.onscroll事件，在滚动条滚动中，每间隔5~7ms「浏览器最快反应时间」就会触发一次，触发的频率太快了，我们可以基于函数的节流操作，控制触发频率「例如：500ms」


	// 点击分页器切换
	panginationList.forEach((pagination, index) => {
		pagination.onmouseenter= function () {
			if (step === index) return;
			step = index;
			wrapper.style.transitionDuration = `${speed}ms`;
			wrapper.style.left = `${-step * w}px`;
			// pagination.style.borderBottomColor="#f3c258"
			
			autoFocus()//分页器重新调用
		}
	
	})

})()