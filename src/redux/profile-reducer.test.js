import profileReducer, {addPost} from "./profile-reducer";

test('Добавление поста в state', () => {
  // 1 Инициализация теста, входящие данные
  const action = addPost('New post TEST 123')
  const state = {
    posts: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, modi!',
        likeCount: 10
      }
    ]
  }
  // 2. Исполнение теста
  let newState = profileReducer(state, action)

  // 3.Сравнение полученного и ожидаемого результата
  expect(newState.posts.length).toBe(2)
})