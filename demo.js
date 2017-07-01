import{ observable, computed, autorun, reaction }from'mobx';

const todos = observable({
  a:22,
  b:33
});

// autorun 对它函数中使用的任何东西作出反应
const autorun1 = autorun(
  () => console.log(todos.a)
);

// todos.push({ title: "explain reactions", done: false });
// 输出:
// reaction 1: Make coffee, find biscuit, explain reactions
// reaction 2: Make coffee, find biscuit, explain reactions
// autorun 1: Make coffee, find biscuit, explain reactions

todos.b = 23