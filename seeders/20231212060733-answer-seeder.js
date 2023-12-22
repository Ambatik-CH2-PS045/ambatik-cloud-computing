'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('answers', [
      //QUIZ TYPE 1

      // Question 1
      { answer: 'Batik Tambal', truth: '0', questionId: '1',  createdAt: new Date(), updatedAt: new Date()},
      { answer: 'Batik Truntum', truth: '1', questionId: '1', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Batik Sogan', truth: '0', questionId: '1', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Batik Simbut', truth: '0', questionId: '1', createdAt: new Date(), updatedAt: new Date() },

      // Question 2
      { answer: 'Atik', truth: '0', questionId: '2', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Titik', truth: '0', questionId: '2', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Ambatik', truth: '1', questionId: '2', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Nitik', truth: '0', questionId: '2', createdAt: new Date(), updatedAt: new Date() },

      // Question 3
      { answer: '1 Oktober', truth: '0', questionId: '3', createdAt: new Date(), updatedAt: new Date() },
      { answer: '2 Oktober', truth: '1', questionId: '3', createdAt: new Date(), updatedAt: new Date() },
      { answer: '3 Oktober', truth: '0', questionId: '3', createdAt: new Date(), updatedAt: new Date() },
      { answer: '4 Oktober', truth: '0', questionId: '3', createdAt: new Date(), updatedAt: new Date() },

      // Question 4
      { answer: 'Nitik', truth: '0', questionId: '4', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Insang', truth: '1', questionId: '4', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Lasem', truth: '0', questionId: '4', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Cendrawasih', truth: '1', questionId: '4', createdAt: new Date(), updatedAt: new Date() },
    
      // Question 5
      { answer: 'Cap', truth: '0', questionId: '5', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Lukis', truth: '0', questionId: '5', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Tulis', truth: '1', questionId: '5', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Cetak ', truth: '0', questionId: '5', createdAt: new Date(), updatedAt: new Date() },
  
      // QUIZ TYPE 2

      // Question 1
      { answer: 'Tambal', truth: '0', questionId: '6', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Lasem', truth: '0', questionId: '6', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Poleng', truth: '1', questionId: '6', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Nitik ', truth: '0', questionId: '6', createdAt: new Date(), updatedAt: new Date() },

      //Question 2
      { answer: 'Nitik', truth: '1', questionId: '7', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Poleng', truth: '0', questionId: '7', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Truntum', truth: '0', questionId: '7', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Lasem ', truth: '0', questionId: '7', createdAt: new Date(), updatedAt: new Date() },

      //Question 3
      { answer: 'Kawung', truth: '0', questionId: '8', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Mega mendung', truth: '1', questionId: '8', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Geblek renteng', truth: '0', questionId: '8', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Sekar jagad ', truth: '0', questionId: '8', createdAt: new Date(), updatedAt: new Date() },
    
      //Question 4
      { answer: 'Cemplung', truth: '0', questionId: '9', createdAt: new Date(), updatedAt: new Date()},
      { answer: 'Malam', truth: '0', questionId: '9', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Tulis', truth: '0', questionId: '9', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Canting ', truth: '1', questionId: '9', createdAt: new Date(), updatedAt: new Date()},
  
      //Question 5
      { answer: 'Sekar jagad', truth: '1', questionId: '10', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Mega mendung', truth: '0', questionId: '10', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Poleng', truth: '0', questionId: '10', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Kawung ', truth: '0', questionId: '10', createdAt: new Date(), updatedAt: new Date() },

      // QUIZ TYPE 3

      //Question 1
      { answer: 'Motif', truth: '0', questionId: '11', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Warna', truth: '0', questionId: '11', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Bahan kain', truth: '0', questionId: '11', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Metode pewarnaan ', truth: '1', questionId: '11', createdAt: new Date(), updatedAt: new Date() },
      
      //Question 2
      { answer: 'Logam', truth: '1', questionId: '12', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Kayu', truth: '0', questionId: '12', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Kain', truth: '0', questionId: '12', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Plastik', truth: '0', questionId: '12', createdAt: new Date(), updatedAt: new Date() },
      
      //Question 3
      { answer: 'Menyemprotkan cat', truth: '0', questionId: '13', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Mencelupkan kain ke dalam larutan pewarna', truth: '1', questionId: '13', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Melukis langsung di atas kain', truth: '0', questionId: '13', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Menggunakan spidol permanen', truth: '0', questionId: '13', createdAt: new Date(), updatedAt: new Date() },

      //Question 4
      { answer: 'Asal-usul manusia', truth: '0', questionId: '14', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Keharmonisan dan kekompakan keluarga', truth: '0', questionId: '14', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Cinta Sejati', truth: '1', questionId: '14', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Pembawa keberuntungan ', truth: '0', questionId: '14', createdAt: new Date(), updatedAt: new Date() },
      
      //Question 5
      { answer: 'Gajah', truth: '0', questionId: '15', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Singa', truth: '0', questionId: '15', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Matahari', truth: '1', questionId: '15', createdAt: new Date(), updatedAt: new Date() },
      { answer: 'Pohon Beringin ', truth: '0', questionId: '15', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('answers', null, {});
  }
};
