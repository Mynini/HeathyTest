/*
* 初始化
*   配置对象
*
* 数据驱动视图
*   页面中的表现/功能 是通过数据的形式来反馈的
*
* el
*   指定vue处理的模板边界范围
*
* data配置项
*   存储应用中所需要用到的数据，他是一个对象
*
* MIME
*
* 模板
*
* {{表达式}}
*
* 指令
*   v-for
*
* computed
*   计算属性，产生派生数据，data存放原始数据，computed存放根据原始数据计算（派生）出来的数据
*
* v-if
* v-show
*
* v-on/@
* */

const app = new Vue({

    el: '#app',

    data: {
        appName: '妙味云盘',
        // 显示模式：缩略图、列表
        showMode: 'thumb',
        // 显示的文件类型
        showType: 'all',
        // 类型与MIME的映射关系
        MIMEMAPS: {
            doc: ['text/html','text/css'],
            pic: ['image/png', 'image/gif'],
            music: ['audio/mp3'],
            video: ['video/mp4']
        },
        // 所有的文件夹、文件信息
        files: [
            // 每一个对象就是一个文件夹、文件信息
            {
                // 文件夹、文件的名称
                name: '文件夹1',
                // 类型，如果为空，则为文件夹
                type: ''
            },
            {
                name: '文件夹2',
                type: ''
            },
            {
                name: '1.html',
                type: 'text/html'
            },
            {
                name: '1.css',
                type: 'text/css'
            },
            {
                name: '朋友.mp3',
                type: 'audio/mp3'
            },
            {
                name: 'vue案例.mp4',
                type: 'video/mp4'
            }
        ]
    },
    // 计算属性，存放派生数据
    computed: {
        // 每一个计算属性都是一个函数，函数的返回值就是这个函数对应的属性的值，计算属性使用的时候，使用的是方法对应的属性
        folderFiles() {
            return this.showType == 'all' ? this.files.filter( file => file.type == '' ) : [];
        },
        otherFiles() {
            // console.log(this.MIMEMAPS[this.showType])
            let otherFiles = this.files.filter( file => file.type != '' );
            if (this.showType == 'all') {
                return otherFiles;
            } else {
                console.log(otherFiles.filter(file => this.MIMEMAPS[this.showType].includes(file.type)))
                return otherFiles.filter(file => this.MIMEMAPS[this.showType].includes(file.type));
            }
        }
    },
    // methods，存放所有vue中使用的函数
    methods: {
        changeShowMode(type) {
            this.showMode = type;
        },
        changeShowType(type) {
            this.showType = type;
        }
    }

});

// console.log(app)