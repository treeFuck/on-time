import request from '../utils/req'

// 添加团队
export async function addTeam(teamData) {
  try {
    const result = await request.post({
      url: '/group/addGroup',
      params: teamData
    })
    return result
  } catch (error) {
    console.log(error);
  }
}

// 更新成员
export async function updateMember(value) {
  try {
    //type: add, delete
    const {
      userId,
      groupId,
      type
    } = value
    console.log('添加队友的value :>> ', value);
    const result = await request.post({
      url: '/group/updateMember',
      params: {
        userId,
        groupId,
        type
      }
    })
    return result
  } catch (error) {
    console.log('error :>> ', error);
  }
}

// 删除团队
export async function deleteGroup(groupId) {
  try {
    const result = await request.get({
      url: '/group/deleteGroup',
      params: {
        groupId
      }
    })
    return result
  } catch (error) {
    console.log('error :>> ', error);
  }
}

// 获取团队列表
export async function getTeamList() {
  try {
    const result = await request.get({
      url: '/group/getGroup'
    })
    return result
  } catch (error) {
    console.log('error :>> ', error);
  }
}

// 获取特定团队的所有计划
export async function getGroupPlan(groupId) {
  try {
    const result = await request.get({
      url: '/group/getGroupPlan',
      params: {
        groupId
      }
    })
    return result
  } catch (error) {
    console.log('error :>> ', error);
  }
}

// 添加团队大计划
export async function addGroupPlan(value) {
  try {
    //type为团队Id
    const {
      planName,
      groupId: type,
      taskList
    } = value
    console.log('value :>> ', value);
    const result = await request.post({
      url: '/group/addGroupPlan',
      params: {
        planName,
        type,
        taskList
      }
    })
    return result
  } catch (error) {
    console.log('error :>> ', error);
  }
}

// 修改团队大计划
export async function updateGroupPlan(value) {
  try {
    const { type, planName, planId, taskList } = value
    
    const result = await request.post({
      url: '/group/updateGroupPlan',
      params: {
        planName,
        planId,
        type,
        taskList
      }
    })
    return result
  } catch (error) {
    console.log('error :>> ', error);
  }
}

// 删除团队大计划
export async function deleteGroupPlan(planId) {
  try {
    const result = await request.get({
      url: '/group/deleteGroupPlan',
      params: {
        planId
      }
    })
    return result
  } catch (error) {
    console.log('error :>> ', error);
  }
}

// 删除团队某个子计划
export async function deleteGroupTask(taskId) {
  try {
    const result = await request.get({
      url: '/group/deleteGroupTask',
      params: {
        taskId
      }
    })
    return result
  } catch (error) {
    console.log('error :>> ', error);
  }
}

//获取全部团队计划
export async function getListGroupPlan() {
  try {
    const result = await request.get({
      url: '/group/getListGroupPlan'
    })
    return result.data
  } catch (error) {
    console.log('error :>> ', error);
  }
}

// 修改子任务状态
export async function updateTaskStatus({ taskId, status }) {
  return request.post({
    url: '/schedule/updateTaskStatus',
    params: { taskId, status }
  })
}