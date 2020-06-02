import request from '../utils/req'

// 获取计划列表
function getPlan() {
    return request.get({
        url: '/personal_plan/get',
    })
}
// 添加计划
function addPlan(plan) {
    return request.post({
        url: '/personal_plan/set',
        params: plan
    })
}

// 删除子任务
function delTask(taskId) {
    return request.post({
        url: '/personal_plan/delete_task',
        params: taskId
    })
}

// 更新计划
function updatePlan(plan) {
    return request.post({
        url: '/personal_plan/update',
        params: plan
    })
}
// 删除计划
function delPlan(planId) {
    return request.post({
        url: '/personal_plan/delete_plan',
        params: planId
    })
}

export default {
    getPlan,
    addPlan,
    delTask,
    updatePlan,
    delPlan
}