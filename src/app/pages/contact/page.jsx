import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-8 ">
        <h1 className="text-3xl font-bold mb-8">Контакты</h1>
        <div className="space-y-6 text-gray-700">
          <h1>Свяжитесь с нами</h1>
          <p>По всем вопросам, пожалуйста, обращайтесь по электронной почте:</p>
          <p className="email">info@tradenewsnet.com</p>
          <p>
            Мы стремимся ответить на все запросы в течение одного рабочего дня.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
