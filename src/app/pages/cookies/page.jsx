import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-8 ">
        <h1 className="text-3xl font-bold mb-8">
          Политика использования файлов cookie - TradeNewsNet
        </h1>
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Политика использования файлов cookie
            </h2>

            <h2>Что такое файлы cookie?</h2>
            <p>
              Файлы cookie - это небольшие текстовые файлы, которые сохраняются
              на вашем устройстве при посещении нашего сайта. Они помогают нам
              улучшать работу сайта и предоставлять вам более качественный
              контент.
            </p>

            <h2>Какие файлы cookie мы используем?</h2>
            <p>Мы используем следующие типы файлов cookie:</p>
            <ul>
              <li>
                <strong>Необходимые файлы cookie:</strong> Обеспечивают работу
                основных функций сайта
              </li>
              <li>
                <strong>Аналитические файлы cookie:</strong> Помогают нам
                понять, как посетители взаимодействуют с сайтом
              </li>
              <li>
                <strong>Функциональные файлы cookie:</strong> Запоминают ваши
                предпочтения и настройки
              </li>
            </ul>

            <h2>Как управлять файлами cookie?</h2>
            <p>
              Вы можете изменить настройки своего браузера, чтобы отключить или
              ограничить использование файлов cookie. Обратите внимание, что это
              может повлиять на функциональность сайта.
            </p>

            <h2>Срок хранения файлов cookie</h2>
            <p>
              В зависимости от их типа, файлы cookie могут храниться на вашем
              устройстве различное время:
            </p>
            <ul>
              <li>Сессионные cookie: удаляются после закрытия браузера</li>
              <li>
                Постоянные cookie: остаются на устройстве до истечения срока
                действия или удаления
              </li>
            </ul>

            <h2>Обновление политики</h2>
            <p>
              Мы оставляем за собой право обновлять данную политику. Рекомендуем
              периодически проверять эту страницу на наличие изменений.
            </p>

            <h2>Дополнительная информация</h2>
            <p>
              Если у вас есть вопросы относительно использования файлов cookie
              на нашем сайте, пожалуйста, свяжитесь с нами по адресу:
              info@tradenewsnet.com
            </p>
          </section>
          {/* Add more sections */}
        </div>
      </div>
    </div>
  );
};

export default page;
