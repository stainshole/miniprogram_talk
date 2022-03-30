// components/example/example.js
Component({
    /**
     * 组件的属性列表
     * 传递进来的值
     */
    properties: {
        teamList: {
            type: Object,
        }
    },

    observers: {
        ['teamList.motto'](val){
            console.log(val)
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     * 处理函数
     */
    methods: {

    }
})
