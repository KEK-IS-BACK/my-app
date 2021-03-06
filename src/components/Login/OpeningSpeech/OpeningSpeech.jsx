import React from "react";
import './OpeningSpeech.css'

const OpeningSpeech = () => {
  return (
    <div className='openingSpeech'>
      <p>Данная социальная сеть находится в разработке и не является окончательным вариантом.</p>
      <p>На данный момент она обладает малым функционалом и не может похвастаться своей красотой. </p>
      <p>В ней также присутствуют некоторые баги</p>
      <p>Для проверки того как работает соц сеть вы можите воспользоваться следующимим данными</p>
      <p className='openingSpeech__login'>Email: art123456789063@gmail.com</p>
      <p className='openingSpeech__password'>Password: 123qweasd</p>
      <h2>Функционал</h2>
      <ul>
        <ul>
          <h4>Логин</h4>
          <li>На данном этапе настроена валидация формы login со стороны клиента, а также вывод
            ошибок с сервера.
          </li>
          <li>Подключена простая капча</li>
          <li>Редирект неавторизованныx пользователей на странциу логина</li>
          <li>Выход и редирект на страницу логина</li>
        </ul>

        <ul>
          <h4>Профиль</h4>
          <li>Изменение статуса по наведению и клику</li>
          <li>Загрузка фотографии профиля по наведению</li>
          <li>Изменение основной информации пользователя</li>
          <li>Добавление постов. API не дает возможности сохранять посты, поэтому они сохраняются в state и уничтожаются
            при перезагрузке
          </li>
        </ul>

        <ul>
          <h4>Пользователи</h4>
          <li>Загрузка списка пользователей</li>
          <li>Просмотр страниц пользователей</li>
          <li>Подписка на пользователей. Формально она происходит и синхронизирована с сервером, но не несет за собой
            никакого функционала.
          </li>
        </ul>

        <h4>Ближайшее будущее</h4>
        <ul>
          <li>Типизация сети с помощью TypeScript</li>
          <li>Добавление темной темы интерфеса в настройках</li>
        </ul>
      </ul>
      <p>Вся социальная сеть построена на базе API: <a
        href="https://social-network.samuraijs.com/">https://social-network.samuraijs.com/</a></p>
      <p>Исходный код: <a href="https://github.com/KEK-IS-BACK/my-app">https://github.com/KEK-IS-BACK/my-app</a></p>
      <p>Автор: Гладков Артем</p>

      <p>Был использован HashRouter вместо BrowserRouter для того чтобы сайт хоть как то работал на github pages.</p>
    </div>
  )
}

export default OpeningSpeech