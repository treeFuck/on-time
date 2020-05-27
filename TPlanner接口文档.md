## TPlanner接口文档

## 一、公用环境变量

{{base_url}} : http://47.102.155.74:8080

## 二. 状态码定义

- 操作成功
  - 1
- 操作失败
  - -1
- 用户未注册
  - 3001

## 三、用户登录模块

- URL：{{base_url}}/wx/login

- 请求方式：POST

- 请求格式：application/json

- 备注：用户登录成功后需要响应头拿取authorization字段并保存其值，并在后续每次请求头带上该字段

- 请求数据：

  ```json
  {
  	"openId": "jksasjdkasjdasd",
  	"name": "沛",
  	"wechatIcon": "http://thirdwx.qlogo.cn/mmopen/vi_32/LrNDia6COlhH146730AsLibyOKWjF4jPX3jnY718icRCLJrAUecJWK3icFw5vlb9PE9yJJ5rBKCJdmicUmibomYphRLg/132"
  }
  ```

- 返回响应数据：

  ```json
  {
      "message": "success",
    	"code": "1",
    	"data": {
      	"userId": 1,
      	"name": "沛",
     	 	"wechatIcon": 	"http://thirdwx.qlogo.cn/mmopen/vi_32/LrNDia6COlhH146730AsLibyOKWjF4jPX3jnY718icRC			LJrAUecJWK3icFw5vlb9PE9yJJ5rBKCJdmicUmibomYphRLg/132",
      "openId": null,
      "unionId": null
      }
  }
  ```



## 四、个人计划

### 4.1



## 五、团队计划 

### 5.1 新增团队

- URL：{{base_url}}/group/addGroup

- 请求方式：POST

- 请求格式：application/json

- 备注：请求头带上authorization字段

- 请求数据：

  ```json
  {
  	"groupName": "攻城狮",
  	"limit": 3
  }
  ```

- 响应数据：

  ```json
  {
    "message": "success",
    "code": "1",
    "data": {
      "groupId": 3,
      "groupName": "测试团队",
      "creatorId": 1,
      "groupPlanList": null,
      "groupMemberList": [],
      "limit": 6
    }
  }
  ```

### 5.2 更新团队成员列表（删除）

- URL：{{base_url}}/group/updateMember

- 请求方式：POST

- 请求格式：application/json

- 备注：请求头带上authorization字段

- 请求数据：

  ```json
  {
  	"userId": 3,
  	"groupId": 2,
  	"type": "delete"
  }
  ```

- 响应数据：

  ```json
  {
      "message": "success",
      "code": "1",
      "data": {
          "groupId": 2,
          "groupName": "专业团队",
          "creatorId": null,
          "groupPlanList": [],
          "groupMemberList": [
              {
                  "userId": 1,
                  "name": "沛",
                  "wechatIcon": "http://thirdwx.qlogo.cn/mmopen/vi_32/LrNDia6COlhH146730AsLibyOKWjF4jPX3jnY718icRCLJrAUecJWK3icFw5vlb9PE9yJJ5rBKCJdmicUmibomYphRLg/132",
                  "openId": null,
                  "unionId": null
              }
          ],
          "limit": 6
      }
  }
  ```

### 5.3 更新团队成员列表（添加）

- URL：{{base_url}}/group/updateMember

- 请求方式：POST

- 请求格式：application/json

- 备注：请求头带上authorization字段

- 请求数据：

  ```json
  {
  	"userId": 3,
  	"groupId": 2,
  	"type": "add"
  }
  ```

- 响应数据：

  ```
  {
      "message": "success",
      "code": "1",
      "data": {
          "groupId": 2,
          "groupName": "专业团队",
          "creatorId": null,
          "groupPlanList": [],
          "groupMemberList": [
              {
                  "userId": 1,
                  "name": "沛",
                  "wechatIcon": "http://thirdwx.qlogo.cn/mmopen/vi_32/LrNDia6COlhH146730AsLibyOKWjF4jPX3jnY718icRCLJrAUecJWK3icFw5vlb9PE9yJJ5rBKCJdmicUmibomYphRLg/132",
                  "openId": null,
                  "unionId": null
              },
              {
                  "userId": 3,
                  "name": "test2",
                  "wechatIcon": "test2",
                  "openId": null,
                  "unionId": null
              }
          ],
          "limit": 6
      }
  }
  ```

### 5.4 解散某个团队

- URL：{{base_url}}/group/deleteGroup?groupId=3

- 请求方式：GET

- 请求格式：application/json

- 备注：请求头带上authorization字段

- 请求数据：无

- 响应数据：

  ```
  {
    	"message": "success",
    	"code": "1",
    	"data": "success"
  }
  ```

## 六、日程表

### 6.1 修改子任务状态

- URL：{{base_url}}/schedule/updateTaskStatus

- 请求方式：POST

- 请求格式：application/json

- 备注：请求头带上authorization字段

- 请求数据：

  ```json
  {
  	"taskId": 1,
      //status为1代表已完成，0代表未完成
  	"status": 1
  }
  ```

- 响应数据：

  ```json
  {
      "message": "success",
      "code": "1",
      "data": {
          "taskId": 1,
          "planId": null,
          "userId": null,
          "taskName": null,
          "lasting": null,
          "startTime": null,
          "endTime": null,
          "priority": null,
          "status": 1
      }
  }
  ```

  

