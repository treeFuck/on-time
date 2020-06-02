import request from '../utils/req'

// 获取日程列表
function getSchedule(send) {
    return request.post({
        url: '/schedule/sortTask',
        params: send
    })
}

// 修改子任务状态
function updateTaskStatus(send) {
    return request.post({
        url: '/schedule/updateTaskStatus',
        params: send
    })
}
export default {
    getSchedule,
    updateTaskStatus
}