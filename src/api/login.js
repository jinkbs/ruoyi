import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  // return request({
  //   url: '/login',
  //   headers: {
  //     isToken: false
  //   },
  //   method: 'post',
  //   data: data
  // })
   return Promise.resolve({"msg":"操作成功","code":200,"token":"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjhlOGQ2ODI4LTQzYmUtNDQ1Yi1hZmU5LWVkNTlhNzIwZDVhYiJ9.LDzUBlBnXDfaJhUDh3ZOmcdivUdjSCaDkhdEEfGnbW5dPvqkMZC1PfSmVlgdKbEmVaajpA5Rzvb7tjQOKWT_qg"})
 
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  // return request({
  //   url: '/getInfo',
  //   method: 'get'
  // })
  return Promise.resolve({"msg":"操作成功","code":200,"permissions":["*:*:*"],"roles":["admin"],"user":{"searchValue":null,"createBy":"admin","createTime":"2021-09-09 17:25:28","updateBy":null,"updateTime":null,"remark":"管理员","params":{},"userId":1,"deptId":103,"userName":"admin","nickName":"若依","email":"ry@163.com","phonenumber":"15888888888","sex":"1","avatar":"","status":"0","delFlag":"0","loginIp":"110.86.6.58","loginDate":"2021-12-21T16:24:34.000+08:00","dept":{"searchValue":null,"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"params":{},"deptId":103,"parentId":101,"ancestors":null,"deptName":"研发部门","orderNum":"1","leader":"若依","phone":null,"email":null,"status":"0","delFlag":null,"parentName":null,"children":[]},"roles":[{"searchValue":null,"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"params":{},"roleId":1,"roleName":"超级管理员","roleKey":"admin","roleSort":"1","dataScope":"1","menuCheckStrictly":false,"deptCheckStrictly":false,"status":"0","delFlag":null,"flag":false,"menuIds":null,"deptIds":null,"admin":true}],"roleIds":null,"postIds":null,"roleId":null,"admin":true}})
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}