class Subject {
  constructor(name) {
    this.name = name
    this.state = {}
    this.observers = []
  }
  //修改状态
  notify(newState) {
    this.state = newState,
      this.observers.map(o => o.update(newState))
  }
  //添加观察者
  attach(observer) {
    this.observers.push(observer)
  }
  //删除观察者
  detach(observer) {
    this.observers.splice(this.observers.indexOf(observer), 1)
  }
}

export default Subject