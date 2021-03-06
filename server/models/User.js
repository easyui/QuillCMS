const mongoose = require('mongoose')
const shortid = require('shortid')
import moment from 'moment'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  // 数据库中存储ID 唯一
  _id: {
    type: String,
    'default': shortid.generate
  },
  username: String,       // 用户名 唯一 必填
  password: String,       // 密码 必填
  email: String,          // 邮箱 唯一 必填
  phone: {
    type: String,
    default: ''
  },          // 电话号码 唯一
  role: {
    type: String,
    default: 'member'
  },           // 角色标识 super admin member
  enable: {
    type: Boolean,
    default: true        // 角色状态 开启，禁用
  },
  // 其他信息字段
  nickname: {
    type: String,
    default: ''
  },
  realname: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  sex: {
    type: Number,
    default: 1
  },
  age: {
    type: Number,
    default: 18
  },
  signature: {
    type: String,
    default: ''
  },      // 个性签名
  province: {
    type: String,
    default: ''
  },       // 省份
  city: {
    type: String,
    default: ''
  },           // 城市
  address: {
    type: String,
    default: ''
  },        // 地址
  // 积分
  coin: {
    type: Number,
    default: 0
  },
  // 发文数
  postsNum: {
    type: Number,
    default: 0
  },
  // 关注人的数量
  followsNum: {
    type: Number,
    default: 0
  },
  // 粉丝的数量
  fansNum: {
    type: Number,
    default: 0
  },
  // 关注的用户ID集合
  follow_users: [
    {
      type: String,
      default: []
    }
  ],
  // 粉丝ID集合
  fans_users: [
    {
      type: String,
      default: []
    }
  ],
  // 统计字段
  register_time: {
    type: Date,
    default: Date.now
  },
  update_time: {
    type: Date,
    default: Date.now
  },
  　register_ip: {
    type: String,
    default: ''
  },
  last_login_time: {
    type: Date,
    default: Date.now
  },
  last_login_ip: {
    type: String,
    default: ''
  }
})

UserSchema.set('toJSON', { getters: true, virtuals: true })
UserSchema.set('toObject', { getters: true, virtuals: true })

UserSchema.path('register_time').get(function (v) {
  return moment(v).utc().zone(-8).format("YYYY-MM-DD HH:mm:ss")
})
UserSchema.path('update_time').get(function (v) {
  return moment(v).utc().zone(-8).format("YYYY-MM-DD HH:mm:ss")
})
UserSchema.path('last_login_time').get(function (v) {
  return moment(v).utc().zone(-8).format("YYYY-MM-DD HH:mm:ss")
})

export default mongoose.model('User', UserSchema)