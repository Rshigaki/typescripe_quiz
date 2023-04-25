// TypeScriptクイズ大会

// 1. `User` typeに対し、「理想的な使用例」が成功するよう適切なtype defintionを与えてください。

type User = {
  name: string,
  age: number,
  isPrivate: boolean,
}

function showUserInfo(user: User) {
  console.log(user.name)
  console.log(user.age)
  console.log(user.isPrivate)
}

// 理想的な使用例
showUserInfo({
  name: 'John Smith',
  age: 16,
  isPrivate: false,
})

// エラー例
// showUserInfo({
//   name: 'Mary Sue',
//   isPrivate: false,
// })

// const usr: User = {
//   name: 'Gombe Nanashino',
//   age: 100,
// }

// 2. 外部APIから`User` typeのobjectを取得する処理を適切に修正してください。

const fetchObjectFromApi = async (): Promise<User> => {
  const result = await fetch('https://example.com/api/v0/users/1')
  if (!result.ok) throw new Error('Request failed.')
  const userJson = await result.json();
  const user: User = {
    name: userJson.name,
    age: userJson.age,
    isPrivate: userJson.isPrivate,
  }
  if(user.age < 0 || user.age > 100) throw new Error('Age is invalid.');
  return user
}
