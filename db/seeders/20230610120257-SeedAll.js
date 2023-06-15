/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Alena',
          email: '1@1',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bek',
          email: '2@2',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chyrgal',
          email: '3@3',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Languages',
      [
        {
          langName: 'Russian',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          langName: 'English',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          langName: 'Spanish',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          langName: 'French',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          langName: 'German',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          langName: 'Italian',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          langName: 'Portuguese',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          langName: 'Arabic',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          langName: 'Hindi',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          langName: 'Chinese',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          catName: 'Colors',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: 'Food',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: 'Animals',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: 'Sports',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: 'Weather',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: 'Cars',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: 'Work',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: 'Music',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: 'Movies',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: 'Geography',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Words',
      [
        {
          word: 'Red',
          langId: 2,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'green',
          langId: 2,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'blue',
          langId: 2,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'yellow',
          langId: 2,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'white',
          langId: 2,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'meat',
          langId: 2,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'vegetables',
          langId: 2,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'fruits',
          langId: 2,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'beverages',
          langId: 2,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'desserts',
          langId: 2,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'dog',
          langId: 2,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'cat',
          langId: 2,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'lion',
          langId: 2,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'tiger',
          langId: 2,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'elephant',
          langId: 2,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'football',
          langId: 2,
          catId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'basketball',
          langId: 2,
          catId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'tennis',
          langId: 2,
          catId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'volleyball',
          langId: 2,
          catId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'golf',
          langId: 2,
          catId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'rain',
          langId: 2,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'snow',
          langId: 2,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'sun',
          langId: 2,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'wind',
          langId: 2,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'thunderstorm',
          langId: 2,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'models',
          langId: 2,
          catId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'types',
          langId: 2,
          catId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'professions',
          langId: 2,
          catId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'positions',
          langId: 2,
          catId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'business trips',
          langId: 2,
          catId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'genres',
          langId: 2,
          catId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'singers',
          langId: 2,
          catId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'bands',
          langId: 2,
          catId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'genres',
          langId: 2,
          catId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'actors',
          langId: 2,
          catId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'directors',
          langId: 2,
          catId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'movies',
          langId: 2,
          catId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'countries',
          langId: 2,
          catId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'cities',
          langId: 2,
          catId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'rivers',
          langId: 2,
          catId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'mountains',
          langId: 2,
          catId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: 'Красный',
          langId: 1,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Зеленый',
          langId: 1,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Голубой',
          langId: 1,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Желтый',
          langId: 1,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Белый',
          langId: 1,
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Мясо',
          langId: 1,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Овощи',
          langId: 1,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Фрукты',
          langId: 1,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Напитки',
          langId: 1,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Десерты',
          langId: 1,
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Собака',
          langId: 1,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Кошка',
          langId: 1,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Лев',
          langId: 1,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Тигр',
          langId: 1,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Солнце',
          langId: 1,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Дождь',
          langId: 1,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Снег',
          langId: 1,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Ветер',
          langId: 1,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Гроза',
          langId: 1,
          catId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Марка',
          langId: 1,
          catId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Модель',
          langId: 1,
          catId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Тип',
          langId: 1,
          catId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Профессия',
          langId: 1,
          catId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Должность',
          langId: 1,
          catId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Командировка',
          langId: 1,
          catId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Жанр',
          langId: 1,
          catId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Певец',
          langId: 1,
          catId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Группа',
          langId: 1,
          catId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Инструмент',
          langId: 1,
          catId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Жанр',
          langId: 1,
          catId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Актер',
          langId: 1,
          catId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Режиссер',
          langId: 1,
          catId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Фильм',
          langId: 1,
          catId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Страна',
          langId: 1,
          catId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Город',
          langId: 1,
          catId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Река',
          langId: 1,
          catId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Гора',
          langId: 1,
          catId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          word: 'Океан',
          langId: 1,
          catId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Learneds',
      [
        {
          userId: 1,
          wordId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 1,
          wordId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          wordId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          wordId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          wordId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          wordId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          wordId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          wordId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Languages', null, {});
    await queryInterface.bulkDelete('Words', null, {});
    await queryInterface.bulkDelete('Learneds', null, {});
  },
};
