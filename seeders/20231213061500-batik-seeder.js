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
      return queryInterface.bulkInsert('batiks', [
      {
          name: 'Batik Truntum',
          url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/1_truntum.jpg',
          origin: 'Daerah Istimewa Yogyakarta',
          meaning: 'Motif batik ini diciptakan oleh Kanjeng Ratu Kencana (Permaisuri Ingkang Sinuhun Sri Susuhunan Pakubuwana III dari Surakarta). Motif batik ini bermakna cinta yang tumbuh kembali. Ia menciptakan motif ini sebagai simbol cinta yang tulus tanpa syarat, abadi, dan semakin lama semakin terasa subur berkembang (tumaruntum).',
          making_process: '- Molani: Membuat pola pada bahan yang akan digunakan untuk membatik. Pola ini mungkin disebut kanjengan \n- Menulis tangan: Setelah molani selesai, tangan penulis digunakan untuk menulis nama pemilik atau motif yang ingin dicatat pada batik \n- Mbabar: Pewarnaan batik truntum dilakukan dengan menggunakan cara mbabar, yang melibatkan memperawatkan bahan dengan lain selama proses pembatikan',
          usage_purpose: 'Kain bermotif truntum biasa dipakai oleh orang tua pengantin pada hari pernikahan. Ada alasan mengapa orangtua pengantin memakai batik motif truntum. Orangtua yang menggunakan batik truntum ini diharapkan agar bisa menuntun dan memberi contoh kepada pengantin saat akan memasuki kehidupan rumah tangga.',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name: 'Batik Tambal',
          url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/2_tambal.jpg',
          origin: 'Daerah Istimewa Yogyakarta',
          meaning: 'Motif batik tambal memiliki arti tambal bermakna menambal atau memperbaiki hal-hal yang rusak. Dalam perjalanan hidupnya, manusia harus memperbaiki diri menuju kehidupan yang lebih baik, lahir maupun batin. Dahulu, kain batik bermotif tambal dipercaya bisa membantu kesembuhan orang yang sakit.',
          making_process: '- Molani: Membuat pola pada bahan yang akan digunakan untuk membatik. Pola ini mungkin disebut kanjengan \n- Menulis tangan: Setelah molani selesai, tangan penulis digunakan untuk menulis nama pemilik atau motif yang ingin dicatat pada batik \n- Mbabar: Pewarnaan batik tambal dilakukan dengan menggunakan cara mbabar, yang melibatkan memperawatkan bahan dengan lain selama proses pembatikan',
          usage_purpose: 'Saat ini batik tambal sudah mengalami banyak perkembangan, dimana sudah tidak hanya lembaran kain saja namun sudah banyak dibuat dalam bentuk lain seperti kemeja, gaun, blouse hingga tas yang dilapisi dengan kain batik tersebut. Batik tambal tidak hanya digunakan untuk orang sakit saja, namun dapat digunakan untuk pakaian sehari-hari maupun untuk pakaian formal.',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        name: 'Batik Sogan',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/3_sogan.jpg',
        origin: 'Yogyakarta dan Solo',
        meaning: 'Batik Sogan adalah salah satu jenis batik klasik. Nama Sogan diambil dari pohon soga yang digunakan dalam proses pembuatan batik ini. Batik Sogan sendiri berasal dari Yogyakarta dan Solo. Namun, kedua batiknya tidak mirip. Perbedaan batiknya terletak di warna. Umumnya batik Sogan Yogya berwarna coklat tua, hitam dan putih. Sementara batik Sogan Solo didominasi warna orange muda dan coklat.',
        making_process: '- Pengkhetelan: Membuat pola atau motif batik pada kertas \n- Menyorek: Memindahkan pola dari kertas ke kain \n- Menyanting: Melekatkan malam atau jaringan pada kain untuk menjaga pola \n- Menembok: Menyusun kain yang telah diperkhet dan disanting dengan lain \n- Nyelup: Melakukan proses nyelup untuk menjaga pola pada kain \n- Pewarnaan: Menggunakan cara mbabar untuk memperawatkan bahan dengan lain selama proses pembatikan \n- Pembersihan: Menyaring dan membersihkan kain yang telah melalui proses pembatikan',
        usage_purpose: 'Dulunya, batik ini dipakai raja-raja di Jawa khususnya keraton kesultanan Solo. Namun, sekarang dapat dipakai oleh siapa saja, baik warga keraton maupun orang biasa.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Simbut',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/4_simbut.jpg',
        origin: 'Banten',
        meaning: 'Motif ini memiliki corak menyerupai daun talas dengan warna yang cerah. Berasal dari Suku Baduy di Banten, motif batik Simbut menyimpan filosofi tentang kedekatan manusia dengan alam sekitar. Ciri khas motif batik khas Banten ini adalah warnanya yang cenderung cerah, namun tetap tidak mencolok. Garis yang digunakan dalam motif batik simbut cenderung tebal dan berukuran besar.',
        making_process: '- Membuat pola: Pola atau motif batik dibuat pada kertas. \n- Menggambar: Pola yang telah dibuat pada kertas kemudian digambar pada kain. \n- Mengaplikasikan malam: Malam atau lilin diterapkan pada bagian-bagian tertentu pada kain yang ingin dijaga agar tetap berwarna asli. \n- Pewarnaan: Kain dicelupkan dalam larutan pewarna sogan yang dicelupkan secara berulang-ulang. \n- Pembersihan: Setelah proses pewarnaan selesai, kain dicuci dan malam dihilangkan untuk menghasilkan motif batik simbut yang khas.',
        usage_purpose: 'Motif ini memiliki corak menyerupai daun talas dengan warna yang cerah. Berasal dari Suku Baduy di Banten, motif batik Simbut menyimpan filosofi tentang kedekatan manusia dengan alam sekitar',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Sekar Jagad',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/5_sekar_jagad.jpg',
        origin: 'Solo dan Yogyakarta',
        meaning: 'Sekar Jagad diambil dari kata “kar” yang dalam Bahasa Belanda berarti peta, dan “jagad” yang berarti dunia dalam bahasa Jawa. Jika digabungkan, filosofi di balik motif Sekar Jagad tidak sekadar sebagai peta dunia saja. Melainkan, juga menggambarkan keindahan keberagaman di Indonesia, sehingga membuat siapa saja melihatnya terpesona.',
        making_process: 'Proses pembuatan batik pada umumnya melibatkan beberapa tahap, seperti membuat pola, menggambar pola pada kain, mengaplikasikan malam pada bagian-bagian tertentu pada kain, pewarnaan, dan pembersihan \nSetiap motif batik memiliki ciri khas dan teknik pembuatan yang berbeda-beda, tergantung pada daerah asal dan tradisi yang berkembang di masyarakat setempat',
        usage_purpose: 'Batik sekar jagad yang mengandung makna kecantikan, ungkapan cinta dan keindahan umumnya sering dikenakan dalam pesta pernikahan. Selain itu motif batik sekar jagad yang menggambarkan bentuk kebaikan biasanya juga kerap dipakai oleh orang ahli, orang pintar, dukun istana dan keraton.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Pring Sedapur',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/6_pring_sedapur.jpg',
        origin: 'Sidomukti, Jawa Timur',
        meaning: 'Pring Sedapur merupakan motif batik yang terkenal unik dan indah. Pasalnya, motif batik khas Jawa Timur ini memadukan corak pohon bambu, dengan unsur-unsur alam. Menjadikan tanaman bambu sebagai objek utama, batik motif Pring Sedapur melambangkan persatuan dan kekuatan.',
        making_process: 'Untuk mengembangkan produk batik Pring Sedapur, dapat dilakukan dengan menciptakan inovasi motif-motif baru yang lebih menarik dan juga campur \nProses pembuatan batik pada umumnya melibatkan beberapa tahap, seperti membuat pola, menggambar pola pada kain, mengaplikasikan malam pada bagian-bagian tertentu pada kain, pewarnaan, dan pembersihan \nSetiap motif batik memiliki ciri khas dan teknik pembuatan yang berbeda-beda, tergantung pada daerah asal dan tradisi yang berkembang di masyarakat setempat',
        usage_purpose: 'Motif batik khas Jawa Timur ini memadukan corak pohon bambu, dengan unsur-unsur alam. Menjadikan tanaman bambu sebagai objek utama, batik motif Pring Sedapur melambangkan persatuan dan kekuatan. Dengan kata lain, motif batik ini mengajarkan manusia untuk hidup bersama dan rukun satu sama lain.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Poleng',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/7_poleng.jpg',
        origin: 'Bali',
        meaning: 'Kain poleng memiliki beberapa nilai sejarah dan filosofis. Pada masyarakat Bali, filosofi ini dapat ditemui dengan sifat Bhineda yaitu keseimbangan baik dan buruk. Hal ini merupakan nilai nilai agama, moral, dan humanis yang dipegang sebagai tujuan hidup dan ajaran hidup bagi umat Hindu khususnya di Bali. Kain-kain poleng yang ditaruh dan diikat pada pohon yang dianggap angker atau berhantu memberikan tanda bahwa pohon tersebut "berpenghuni".',
        making_process: 'Proses pembuatan batik pada umumnya melibatkan beberapa tahap, seperti membuat pola, menggambar pola pada kain, mengaplikasikan malam pada bagian-bagian tertentu pada kain, pewarnaan, dan pembersihan \nSetiap motif batik memiliki ciri khas dan teknik pembuatan yang berbeda-beda, tergantung pada daerah asal dan tradisi yang berkembang di masyarakat setempat',
        usage_purpose: 'Kain ini sering dipasang di berbagai tempat seperti pohon,patung, gapura, dan spanduk. Tak hanya sampai disitu, kain ini juga tidak pernah absen pada pertunjukkan seni. Bahkan ketika ada pagelaran budaya juga perayaan keagamaan yang terkadang dipakai sebagai udeng atau penutup kepala pecalang(petugas keamanan). Untuk kegunaan estetis, kain poleng juga dapat digunakan sebagai pakaian, batik, taplak meja, dan horden.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Parang',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/8_parang.jpg',
        origin: 'Solo dan Yogyakarta',
        meaning: 'Batik parang ini memiliki makna petuah untuk tidak pernah menyerah, ibarat ombak laut yang tak pernah berhenti bergerak. Batik parang juga menggambarkan jalinan yang tidak pernah putus, baik dalam arti upaya untuk memperbaiki diri, upaya memperjuangkan kesejahteraan, maupun bentuk pertalian keluarga.',
        making_process: '- Membuat motif pada kain: Membuat pola atau motif batik pada kertas. \n- Pembatikan: Proses pembatikan pada bahan kain putihan untuk menciptakan kain batik. \n- Pencelupan atau pewarnaan: Menggunakan lilin batik untuk memperawatkan motif pada kain. \n- Pelorotan atau pencucian: Melakukan proses pelorotan atau pencucian untuk menjaga motif batik yang telah dicetak pada kain.',
        usage_purpose: 'Meski terlihat sederhana menyerupai huruf “S” yang disusun diagonal, batik motif Parang tidak boleh sembarangan digunakan, salah satunya saat menghadiri pernikahan. Pasalnya, batik motif Parang bisa diartikan sebagai senjata yang dianggap membawa kesialan dalam pernikahan.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Nitik',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/9_nitik.jpg',
        origin: 'Yogyakarta',
        meaning: 'Batik nitik merupakan batik dengan motif yang tersusun dari ribuan titik-titik. Rupanya batik nitik merupakan adaptasi dari anyaman kain tenun patola India (kain cinde). Kata nitik berasal dari bahasa jawa yang berarti “memberi titik”. Nitik merupakan ragam hias ceplokan yang tersusun atas garis-garis halus, balok-balok kecil, segi empat, serta titik-titik halus yang sepintas menyerupai tenunan. Selain membentuk pola geometris, batik nitik juga terdiri dari bentuk-bentuk yang melambangkan keanekaragaman alam, seperti bunga, daun, dan sulur. ',
        making_process: 'Motif Batik nitik dibuat menggunakan canting khusus membelah ujung canting menjadi empat hingga pada saat ditorehkan (dibalikkan) membentuk titik segi empat.',
        usage_purpose: 'Pada upacara perkawinan gaya Jogja biasanya dipakai oleh mempelai setelah siraman. Selain itu juga pada saat seorang istri sedang memiliki bayi, motif ini juga sering digunakan untuk menggendong bayi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Mega Mendung',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/10_mega_mendung.jpg',
        origin: 'Cirebon, Jawa Barat',
        meaning: 'Batik Mega Mendung adalah jenis motif terkenal batik khas Indonesia. Penggambaran mega mendung menunjukkan akulturasi antar budaya dan ornamentasi Tiongkok.Nama megamendung sendiri berarti awan sejuk. Konon inspirasi motif batik ini adalah bentuk awan pada genangan air hujan dan cuaca mendung. Kekhasan motif megamendung adalah pola garis awan dengan bentuk yang agak lonjong. Komposisi warna dasar motif ini adalah merah dan biru yang menggunakan tujuh gradasi warna.',
        making_process: 'Proses produksinya yang dahulu dikerjakan secara batik tulis dan batik cap, dengan pertimbangan ekonomis diproduksi secara besar-besaran dengan cara disablon (printing) di pabrik-pabrik. Walaupun kain bermotif megamendung yang dihasilkan dengan proses seperti ini sebenarnya tidak bisa disebut dengan batik.',
        usage_purpose: 'Wujud motif mega mendung pun yang dulunya hanya dikenal dalam wujud kain batik, sekarang bisa ditemui dalam berbagai macam bentuk barang. Ada yang berupa hiasan dinding lukisan kaca, produk-produk interior seperti ukiran kayu maupun produk-produk peralatan rumah tangga seperti sarung bantal, sprei, taplak meja dan lain-lain.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Lasem',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/11_lasem.jpg',
        origin: 'Lasem, Kabupaten Rembang, Jawa Tengah',
        meaning: 'Motif batik Lasem memiliki filosofi yang berasal dari kepercayaan Tiongkok dan merupakan hasil akulturasi budaya Tiongkok-Jawa. Motif batik Lasem yang khas antara lain motif burung Hong, naga, tanaman bambu, bunga peony, dan qilin. Motif burung Hong dan kupu-kupu melambangkan hubungan antara pria dan wanita, sedangkan motif naga dipercaya menyimbolkan kekuasaan, kekuatan, dan nasib baik. Motif bunga peony mengacu pada fuguihua yang memiliki arti kehormatan, keindahan, dan kecantikan abadi. Warna khas batik Lasem adalah merah, hijau botol, dan biru tua, yang dikenal dengan sebutan Batik Tiga Negeri.',
        making_process: '- Pengetelan: Tahap awal dalam pembuatan batik Lasem, di mana kain disiapkan dan proses pengetelan dilakukan untuk menetralisir serat benang yang mengandung bahan kimia dari proses pabrik. \n- Mola: Membuat motif atau pola batik pada kain menggunakan pensil atau langsung dengan menggunakan canting. \n- Nglengkrengi: Proses pengaplikasian lilin pada bagian-bagian tertentu kain sesuai dengan pola yang telah dibuat. \n- Nerusi: Melakukan proses penutupan bagian yang tidak ingin diwarnai dengan menggunakan lilin. \n- Nembok: Proses penyusunan kain yang telah diberi lilin dengan kain lainnya. \n- Ngelir: Tahap pewarnaan batik dengan cara dicelup atau digledek, dan bisa dilakukan secara bertahap untuk bagian-bagian detail. \n- Nglorot: Proses penghilangan lilin dengan menggunakan air panas. \n- Nggebuki: Proses terakhir yang melibatkan pemukulan kain batik yang telah dilipat dengan menggunakan alat pemukul dari kayu jati untuk menghasilkan tekstur batik yang halus dan rapi.',
        usage_purpose: 'Batik Lasem memiliki makna yang dalam sebagai representasi dari kekayaan budaya dan sejarah Indonesia, serta sebagai simbol dari keragaman dan keindahan warisan budaya bangsa.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Kawung',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/12_kawung.png',
        origin: 'Yogyakarta',
        meaning: 'Motif kawung membawa makna kesucian dan panjang umur. Ciri khas dari motif batik kawung adalah bentuknya yang seperti irisan buah kawung atau kolang-kaling.',
        making_process: '- Pengetelan: Tahap awal dalam pembuatan batik Kawung, di mana kain disiapkan dan proses pengetelan dilakukan untuk menetralisir serat benang yang mengandung bahan kimia dari proses pabrik. \n- Mola: Membuat motif atau pola batik pada kain menggunakan pensil atau langsung dengan menggunakan canting. \n- Nglengkrengi: Proses pengaplikasian lilin pada bagian-bagian tertentu kain sesuai dengan pola yang telah dibuat. \n- Nerusi: Melakukan proses penutupan bagian yang tidak ingin diwarnai dengan menggunakan lilin. \n- Nembok: Proses penyusunan kain yang telah diberi lilin dengan kain lainnya. \n- Ngelir: Tahap pewarnaan batik dengan cara dicelup atau digledek, dan bisa dilakukan secara bertahap untuk bagian-bagian detail. \n- Nglorot: Proses penghilangan lilin dengan menggunakan air panas. \n- Nggebuki: Proses terakhir yang melibatkan pemukulan kain batik yang telah dilipat dengan menggunakan alat pemukul dari kayu jati untuk menghasilkan tekstur batik yang halus dan rapi.',
        usage_purpose: 'Dulunya batik kawung hanya digunakan oleh kalangan tertentu saja, atau biasanya diperuntukkan bagi sentana dalem: orang-orang yang memiliki hubungan keluarga Raja.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Insang',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/13_insang.jpg',
        origin: 'Pontianak',
        meaning: 'Batik corak insang menggambarkan peradaban yang merupakan cerminan dari kehidupan masyarakat Pontianak yang pada waktu itu bermukim di sepanjang Sungai Kapuas',
        making_process: 'Proses pembuatan batik pada umumnya melibatkan beberapa tahap, seperti membuat pola, menggambar pola pada kain, mengaplikasikan malam pada bagian-bagian tertentu pada kain, pewarnaan, dan pembersihan \nSetiap motif batik memiliki ciri khas dan teknik pembuatan yang berbeda-beda, tergantung pada daerah asal dan tradisi yang berkembang di masyarakat setempat',
        usage_purpose: 'Pada mulanya, fungsi kain ini bagi masyarakat adalah untuk menunjukkan identitas dan status sosialnya. Kain ini juga digunakan sebagai hantaran pengantin serta penilaian akan keterampilan anak gadis.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Geblek Renteng',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/14_geblek_renteng.jpg',
        origin: 'Kulon Progo, Yogyakarta',
        meaning: 'Geblek dijadikan motif utama karena merupakan makanan asli khas Kulon Progo. Di antara motif geblek tersebut, ditorehkan lambang Binangun yang digambarkan sebagai kuncup bunga yang akan mekar, memiliki makna bahwa Kulon progo merupakan daerah yang sebentar lagi akan mekar menjadi permata indah dari pulau jawa.',
        making_process: '- Penyusunan Motif: Tahap awal dalam pembuatan batik Geblek Renteng, di mana motif-motif khas yang terdiri dari pola-pola geometris disusun dengan rapi. \n- Pengaplikasian Lilin: Proses pengaplikasian lilin menggunakan teknik canting atau cap untuk melindungi bagian-bagian tertentu kain yang tidak ingin diwarnai. \n- Pewarnaan: Kain kemudian diwarnai dengan pewarna tekstil menggunakan teknik pencelupan. \n- Penghilangan Lilin: Setelah proses pewarnaan selesai, kain dicuci untuk menghilangkan lilin dan mengungkapkan motif batik yang diinginkan. \n- Pengeringan dan Penyelesaian: Setelah proses pencucian, kain dikeringkan dan proses penyelesaian dilakukan sebelum kain siap digunakan.',
        usage_purpose: 'Batik geblek renteng pada dasarnya dibuat untuk sewek atau kain panjang yang biasa dipakai oleh orang-orang jawa di jaman dahulu, bahkan masih digunakan pada upacara kebudayaan.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Cendrawasih',
        url_batik: 'https://storage.googleapis.com/ambatik_bucket/batik_photo/15_cendrawasih.jpg',
        origin: 'Papua',
        meaning: 'Motif Cendrawasih Menggambarkan kekayaan,keindahan dan keanggunan alam dan fauna Papua.',
        making_process: 'Seperti halnya pembuatan batik pada umumnya, pembuatan batik Cendrawasih melibatkan beberapa tahapan penting, seperti membuat pola, menggambar pola pada kain, mengaplikasikan malam pada bagian-bagian tertentu pada kain, pewarnaan, dan pembersihan. Setiap motif batik memiliki ciri khas dan teknik pembuatan yang berbeda-beda, tergantung pada daerah asal dan tradisi yang berkembang di masyarakat setempat. \n',
        usage_purpose: 'Cendrawasih dianggap sebagai burung surga dan masyarakat setempat memiliki kepercayaan bahwa burung tersebut menghubungkan kehidupan surga dan bumi. Tak heran jika fauna endemik tersebut menjadi simbol yang sakral bagi masyarakat Papua. Jika memakai batik motif Cendrawasih maka pemakainya, aura anggun, gagah dan menawan akan terpancar.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('batiks', null, {});

  }
};
