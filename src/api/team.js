import request from '../utils/req'

// 添加团队
export async function addTeam(teamData) {
  try {
    console.log('API');
    const result = await request.post({
      url: '/group/addGroup',
      params: teamData
    })
    console.log('result :>> ', result);
    return result
  } catch (error) {
    console.log(error);
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