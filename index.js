const tool = (() => {
    const obj = {
        // 数组中所有元素满足函数条件，返回true
        add:(arr,fn=Boolean) => arr.every(fn),
        //判断数组中的元素是否都相等
        allEqual:arr => arr.every(it => it === arr[0]),
        //返回两个或多个数的平均数
        average:(...nums) => nums.reduce((acc,val) => acc+val,0) / nums.length,
        averageBy:(arr,fn) => arr.map(typeof fn === 'function' ? fn : v => v[fn]).reduce((acc,val) => acc + val,0) / arr.length,
        //检测页面是否滚动到页面底部
        bottomVisible:() => {
            document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)
        },
        // 首字母转大写
        capitalize:([first,...rest]) => first.toUpperCase() + rest.join(''),
        // 返回当前是今年的第几天
        dayOfYear:date => Math.floor((date - new Date(date.getFullYear(),0,0)) / 1000 / 60 / 60 /24)
        

    }

    return obj
})()

console.log(tool.dayOfYear(new Date()))