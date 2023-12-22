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
    return queryInterface.bulkInsert('articles', [
      {
        title: 'Istana Berbatik, Jokowi Pakai Batik Parang yang Biasa Dikenakan Raja',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel1.png',
        author: 'Devi Puspitasari - detikNews',
        content: 'Jakarta - Presiden Joko Widodo (Jokowi) hadiri acara Istana Berbatik di depan Istana Merdeka, Jalan Medan Merdeka Utara, Jakarta Pusat. Presiden Jokowi mengenakan batik coklat dengan motif Parang Barong yang biasa dikenakan raja. \n\nBerdasarkan keterangan dari Biro Pers Sekretariat Presiden, Minggu (1/10/2023), nama motif yang dipakai Presiden Jokowi adalah Batik Parang Barong Seling Kembang atau lengkapnya Parang Barong Seling Kembang Udan Riris. \n\nMotif batik yang dipakai oleh Jokowi memiliki makna, Motif Parang atau Memerangi. Motif itu memiliki makna seorang pemimpin harus berani bersikap tegas memerangi ketidak benaran yang ada. Motif batik Parang biasa dikenakan oleh Para Raja. \n\nKemudian, motif Udan Riris. Motif Hujan Gerimis memberikan kesejukan di tengah kondisi yang gersang/kering. Sementara itu, Ibu Negara Iriana Jokowi mengenakan kain batik motif truntum sebagai atasan, dan motif parang sebagai bawahan.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Jokowi: Kita Harus Berani Perkenalkan Batik ke Acara Internasional',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel2.png',
        author: 'Yodie Hardiyan - Bisnis.com',
        content: 'Bisnis.com, JAKARTA--- Presiden Joko Widodo menyatakan masyarakat Indonesia harus berani memperkenalkan batik ke acara-acara internasional. Pernyataan itu disampaikan oleh Jokowi dalam acara peringatan Hari Batik Nasional ke-10 di Puro Mangkunegaran, Kota Surakarta, Rabu, (2/10/2019). \n\n“Kita juga harus berani memperkenalkan batik ke acara-acara internasional dan menjadikan batik sebagai duta budaya Indonesia pada masyarakat dunia,” tuturnya. Dalam kesempatan itu, Jokowi bercerita pertemuannya dengan mantan Perdana Menteri Australia, Malcolm Turnbull, beberapa waktu lalu. Saat itu, Turnbull datang dengan mengenakan batik yang telah disiapkan oleh Ibu Negara Iriana. Presiden mengaku dibuat pangling dengan penampilan Turnbull itu. “Saya pangling karena batiknya bagus sehingga betul-betul mengubah (gambaran) bahwa beliau bukan dari Australia, kelihatan dari Solo,” ucapnya. \n\nPresiden juga sangat senang mendengar bahwa pelajaran soal batik diberikan dalam muatan lokal di sejumlah sekolah. Saat Presiden menanyakan hal tersebut kepada salah satu pelajar SMK yang hadir dalam acara tersebut, pelajar itu menyampaikan bahwa pelajaran membatik diberikan di sekolah sebanyak tiga kali dalam seminggu. “Saya kira tiga kali sudah lebih dari cukup asal komitmen itu kita pegang terus sehingga komitmen untuk menjaga pengakuan Unesco yang menetapkan batik menjadi warisan kemanusiaan untuk budaya lisan dan nonbendawi betul-betul terus akan bisa kita pegang,” ujarnya.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Menjadikan sebagai Souvenir, Cara UMKM Batik di Tuban Tingkatkan Penjualan',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel3.png',
        author: 'Humas BAZNAS RI',
        content: 'Berbagai cara kreatif dilakukan oleh Usaha Mikro Kecil Menengah (UMKM) untuk meningkatkan penjualan, salah satunya dengan menjadikan produk sebagai souvenir. Seperti yang dilakukan oleh UMKM binaan Badan Amil Zakat Nasional (BAZNAS) di Tuban Jawa Timur, Putri Berdikari Batik. \n\n"Kali ini, kami mendapatkan pesanan souvenir dari BAZNAS. Inilah salah satu cara kami meningkatkan penjualan, yaitu dengan menjadikan produk batik kami sebagai souvenir lembaga atau perusahaan tertentu," kata Warsimah, divisi pemasaran Koperasi Produksi Putri Berdikari Batik di sela-sela melakukan proses packaging batik, Senin (18/9/2023) di Galeri Mustahik Dusun Bongkol 1 RT 4 RW 1 Sumurgung, Tuban. \n\nMenurut Warsimah, pesanan berupa souvenir dapat meningkatkan penjualan produk karena biasanya dalam jumlah yang cukup banyak.\n\nNamun dalam menjual produk tersebut pihaknya harus menyiapkan packaging yang baik dan menarik untuk produk batik tulis dengan pewarna alam itu. \n\n"Untuk dijual sebagai souvenir, tidak saja kualitas batiknya yang harus bagus, tapi packagingnya pun harus bagus. Biasanya harus sesuai dengan keinginan costumer," ujar Warsimah. \n\nPada kesempatan tersebut, BAZNAS memesan sekitar 77 kotak berisi kain batik tulis khas Tuban tersebut dengan berbagai motif dan warna. Nantinya, batik-batik yang diproduksi oleh mustahik ini akan diberikan sebagai souvenir dalam berbagai kegiatan.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sejarah Batik di Indonesia',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel4.png',
        author: 'Verelladevanka Adryamarthanino , Tri Indriawati ',
        content: 'Batik adalah salah satu hasil karya perpaduan antara seni dan teknologi oleh leluhur bangsa Indonesia. Indonesia yang terdiri atas sekitar 17.000 pulau telah memiliki motif batik beraneka ragam dengan keunikannya tersendiri. Maka dari itu, batik masuk ke dalam Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi atau Masterpieces of the Oral and Intangible of Humanity sejak 2 Oktober 2009, oleh UNESCO. Sejak saat itu, 2 Oktober ditetapkan sebagai Hari Batik Nasional. \n\nLalu, bagaimana sejarah batik di Indonesia? Asal-usul nama batik berasal dari Bahasa Jawa, yaitu amba yang berarti tulis, dan nitik yang berarti titik. Jika digabungkan, maka artinya adalah menulis dengan lilin. Hal ini sesuai dengan bagaimana proses pembuatan batik berlangsung, yaitu di atas sebuah kain menggunakan canting yang ujungnya berukuran kecil, sehingga memberikan kesan "orang sedang menulis titik-titik."',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hadiri Puncak Peringatan Hari Batik Nasional, Ketua Dekranas Dukung Peningkatan Edukasi Ragam Batik',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel5.png',
        author: 'DAS/AS - BPMI Setwapres',
        content: 'Jakarta, wapresri.go.id - Hari Batik Nasional diperingati setiap tanggal 2 Oktober sejak ditetapkannya Batik Indonesia sebagai Warisan Budaya Tak Benda oleh UNESCO pada tahun 2009. Hal ini menjadi bentuk pengakuan internasional terhadap karya budaya milik bangsa, yang meningkatkan citra positif Indonesia di mata dunia. \n\nUntuk itu, Ketua Dewan Kerajinan Nasional (Dekranas) Ibu Hj. Wury Maruf Amin mendukung penuh upaya peningkatan edukasi kepada masyarakat, utamanya kepada generasi muda dalam memperkaya wawasan keragaman batik tanah air.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pengertian Motif Batik dan Filosofinya',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel6.png',
        author: 'Hadi Nugroho',
        content: 'Batik adalah hasil karya bangsa Indonesia yang merupakan perpaduan antara seni dan teknologi oleh leluhur bangsa Indonesia. Batik Indonesia dapat berkembang hingga sampai pada suatu tingkatan yang tak ada bandingannya baik dalam desain/motif maupun prosesnya. Corak ragam batik yang mengandung penuh makna dan filosofi akan terus digali dari berbagai adat istiadat maupun budaya yang berkembang  di Indonesia. Motif Batik menurut Kamus Besar Bahasa Indonesia, motif adalah corak atau pola. Motif adalah suatu corak yang di bentuk sedemikian rupa hinga menghasilkan suatu bentuk yang beraneka ragam. \n\nMotif batik adalah corak atau pola  yang menjadi kerangka gambar pada batik berupa perpaduan antara garis, bentuk dan isen menjadi satu kesatuan yang mewujudkan batik secara keseluruhan. Motif-motif batik itu antara lain adalah motif hewan, manusia, geometris, dan motif lain. Motif batik sering juga dipakai untuk menunjukkan status seseorang. Membatik merupakan tradisi turun-menurun. Karena itu, sering motif batik manjadi ciri khas dari batik yang diproduksi keluarga tertentu (Wikipedia, 2015). \n\nIndonesia mempunyai beberapa motif yang terkait dengan budaya setempat. Beberapa faktor yang mempengaruhi lahirnya motif-motif batik antara lain adalah letak geografis, misalnya di daerah pesisir akan menghasilkan batik dengan motif yang berhubungan dengan laut, begitu pula dengan yang tinggal di pegunungan akan terinspirasi oleh alam sekitarnya; sifat dan tata penghidupan daerah; kepercayaan dan adat di suatu daerah; serta keadaan alam sekitar termasuk flora dan fauna',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Menilik Sejarah Batik, Salah Satu Duta Budaya Indonesia',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel7.png',
        author: 'Romanti',
        content: 'Indonesia, dengan kekayaan budayanya yang beragam, terkenal di seluruh dunia karena berbagai macam produk budayanya. Salah satunya batik, sebuah warisan budaya yang sangat berharga. Setiap tahun, Indonesia merayakan Hari Batik Nasional pada 2 Oktober sebagai bentuk penghargaan dan kebanggaan terhadap warisan budaya ini. \n\nSejarah Hari Batik Nasional dimulai dari pengakuan batik sebagai warisan budaya takbenda oleh UNESCO pada tahun 2009. Pengakuan ini terjadi dalam sidang ke-4 Komite Antar Pemerintah tentang Warisan Budaya Tak Benda di Abu Dhabi pada tanggal 2 Oktober 2009. Pada saat itu, batik diakui bersama dengan beberapa unsur budaya lainnya, seperti wayang, keris, noken, dan tari Saman, sebagai Bagian dari Warisan Budaya Takbenda Manusia atau Representative List of the Intangible Cultural Heritage of Humanity. \n\nAwalnya, batik diperkenalkan kepada dunia internasional oleh Presiden Soeharto saat mengikuti konferensi Perserikatan Bangsa-Bangsa. Batik Indonesia kemudian didaftarkan untuk mendapatkan status Intangible Cultural Heritage (ICH) melalui UNESCO pada tanggal 4 September 2008 di Jakarta. Pada 9 Januari 2009, pengajuan batik untuk Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi UNESCO diterima secara resmi, dan batik dikukuhkan sebagai bagian dari Warisan Budaya Tak Benda dalam sidang keempat Komite Antar-Pemerintah yang diselenggarakan oleh UNESCO di Abu Dhabi pada tanggal 2 Oktober 2009. \n\nPresiden ke-6 Indonesia, Susilo Bambang Yudhoyono (SBY), kemudian menjadikan tanggal 2 Oktober sebagai Hari Batik Nasional melalui Keputusan Presiden (Keppres) Nomor 33 Tahun 2009 yang dikeluarkan pada tanggal 17 November 2009. Melalui Keputusan Presiden ini, Kementerian Dalam Negeri kemudian menerbitkan Surat Edaran yang mengimbau seluruh pegawai pemerintah di tingkat pusat, provinsi, dan kabupaten untuk mengenakan batik setiap Hari Batik Nasional. \n\nSejarah batik di Indonesia terkait dengan perkembangan kerajaan Majapahit dan penyebaran ajaran Islam di Jawa. Batik mulai dikembangkan pada masa kerajaan Mataram, kemudian berlanjut di masa kerajaan Solo dan Yogyakarta. Batik awalnya hanya digunakan dalam keraton untuk pakaian para raja dan keluarganya, tetapi kemudian mulai diproduksi oleh masyarakat umum dan menjadi populer sebagai pakaian. Batik tradisional menggunakan bahan pewarna alami, seperti tumbuhan seperti pohon mengkudu, soga, soda abu, dan tanah lumpur.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Bangga Batik Indonesia yang Mendunia',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel8.png',
        author: 'Iwan Santosa',
        content: 'Batik adalah salah satu kebanggaan budaya Indonesia. Kebanggaan ini semakin meningkat setelah UNESCO menetapkan batik sebagai warisan kemanusiaan untuk budaya lisan dan budaya takbenda atau Masterpieces of the Oral and Intangible Heritage of Humanity, pada 2 Oktober 2009. \n\nAdanya pengakuan UNESCO atas batik sebagai warisan budaya Indonesia merupakan sebuah pengakuan yang luar biasa. Pengakuan tersebut menandai perjuangan Indonesia membuktikan betapa khasnya batik sebagai budaya Indonesia. Batik pernah diklaim oleh negara tetangga, Malaysia, dan mereka pun pernah melayangkan keberatan atas pengakuan UNESCO tersebut.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'UMKM Batik Masih Butuh Dukungan untuk Bangkit',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel9.png',
        author: 'Bowo Pribadi dan Ichsan Emrald Alamsyah',
        content: 'REPUBLIKA.CO.ID, UNGARAN -- Seiring dengan berbagai pelonggaran aktivitas masyarakat, UMKM Batik di Kota Semarang maupun daerah lain di sekitarnya mulai menggeliat. Kendati begitu, upaya untuk membangkitkan kembali UMKM batik masih membutuhkan dukungan. \n\nSalah satunya adalah dukungan yang memungkinkan para pelaku UMKM batik bisa lebih dekat lagi dengan pasar. dengan begitu perputaran roda usaha para perajin batik bisa berputar lebih cepat lagi. \n\nHal ini terungkap dari pameran UMKM Batik bertajuk ‘Batik Corner’ yang digelar dalam rangka memperingati hari batik Nasional, di Melva Balemong Hotel & Resort Ungaran, Kabupaten Semarang, Rabu (6/10). Pemilik usaha Wastra Batik Semarang, Olif mengungkapkan, pelonggaran berbagai aktivitas masyarakat telah memberikan angin segar kepada para pelaku usaha batik yang ada di Kota Semarang dan sekitarnya. \n\nHal ini terungkap dari pameran UMKM Batik bertajuk ‘Batik Corner’ yang digelar dalam rangka memperingati hari batik Nasional, di Melva Balemong Hotel & Resort Ungaran, Kabupaten Semarang, Rabu (6/10). Pemilik usaha Wastra Batik Semarang, Olif mengungkapkan, pelonggaran berbagai aktivitas masyarakat telah memberikan angin segar kepada para pelaku usaha batik yang ada di Kota Semarang dan sekitarnya. \n\nDemikian halnya, kata Olif, upaya untuk memasarkan produk batik secara daring juga telah berjalan dan terus menunjukkan perbaikan. Namun begitu, agar usaha batik bisa kembali sehat masih membutuhkan dukungan. \n\nKhususnya dalam mendekatkan produk mereka kepada pasar/ konsumen. "Karena berbagai kegiatan pameran maupun kegiatan lain yang dapat membantu memperkenalkan batik kami, intensitasnya juga masih kurang," lanjutnya. \n\nHal ini diamini oleh Adisti, pemilik UMKM Batik Adisti, Ungaran, Kabupaten Semarang. menurutnya pandemi Covid-19 telah memberikan dampak bagi pelaku UMKM batik. Selain penurunan penjualan, dampak yang paling terasa adalah merumahkan sementara para pekerja.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Menperin: Memakai Batik, Menghormati Warisan Budaya, Memperkokoh Perekonomian Nasional',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel10.png',
        author: 'Kementrian Perindustrian Republik Indonesia',
        content: 'Batik Indonesia telah diakui sebagai warisan budaya takbenda (intangible cultural heritage) oleh UNESCO pada 2 Oktober 2009, yang kemudian diperingati sebagai Hari Batik Nasional. Batik Indonesia dikenal memiliki kaitan erat dengan gambaran adat istiadat serta budaya di berbagai wilayah. Hampir setiap daerah memiliki ciri khas motif, karakteristik, maupun warna batik dengan keunikan masing-masing. \n\n“Bagi saya pribadi, batik itu in my blood. Memakai batik merupakan cara kita untuk menghormati tradisi dan warisan budaya bangsa yang begitu baik, menghormati kearifan lokal, dan menunjukkan kecintaan kita terhadap produk-produk dalam negeri, juga mengembangkan industri kecil dan menengah (IKM) berbasis batik di Indonesia, dan tentu akan membantu memperkokoh perekonomian nasional,” kata Menteri Perindustrian Agus Gumiwang Kartasasmita dalam Peringatan Hari Batik Nasional Tahun 2022 di Senayan, Jakarta, Minggu (2/10). \n\nDi samping itu, batik juga memiliki nilai seni yang tinggi sehingga sangat fashionable untuk digunakan dalam berbagai acara atau kegiatan baik resmi maupun kasual. “Jadi, ada makna dan manfaat besar dalam kebiasaan atau tradisi kita menggunakan batik, baik dari aspek fesyen, aspek sosial budaya, maupun aspek ekonomi,” imbuh Menperin. \n\nPengembangan industri batik, ujar Menperin, membutuhkan kolaborasi dari berbagai pihak. Pemerintah bekerja sama dengan berbagai stakeholder seperti asosiasi, pelaku usaha, desainer, akademisi, marketplace, hingga influencer untuk dapat mengembangkan, memperkenalkan, serta mempromosikan potensi kekayaan batik Indonesia. “Dalam kesempatan ini, Bank Mandiri hadir mendukung kegiatan komunitas, dan juga Yayasan Batik Indonesia (YBI) yang terus menerus mengawal pengembangan batik dan telah ditetapkan sebagai Non-Governmental Organization (NGO) berdasarkan hasil Sidang UNESCO di Paris pada tanggal 7 Juli 2022,” kata Agus.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Batik Sebagai Warisan Budaya',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel11.png',
        author: 'Susana Stela',
        content: 'Batik merupakan kain bergambar yang pembuatannya secara khusus dengan menuliskan pada kain itu kemudian pengolahannya diproses dengan cara tertentu yang memiliki kekhasan. Sebagai keseluruhan teknik, teknologi, serta pengembangan motif dan budaya yang terkait oleh UNESCO telah ditetapkan sebagai warisan kemanusiaan untuk budaya lisan dan nonbendawi sejak 2 Oktober 2009. Sejak saat itu setiap tanggal 2 Oktober ditetapkan sebagai Hari Batik Nasional. \n\nDi Indonesia batik klasik secara garis besar dapat dikelompokkan menjadi tiga, pertama adalah batik keraton, kelompok kedua adalah batik saudagaran, dan kelompok ketiga adalah batik petani. Motif batik sendiri yang tergolong klasik jumlahnya ribuan, tetapi diantara itu ada motif-motif yang tergolong sebagai babon atau motif induk yang legendaries. Motif ini banyak digunakan dalam ritual kehidupan orang jawa. Mulai dari kelahiran, pertumbuhan dalam kehidupan seseorang hingga pernikahan beserta berbagai lambang dalam menjalani kehidupan hingga upacara kematian. \n\nTatanan seperti ini bermula semenjak era Keraton Mataram Islam yang berdiri sekitar abad ke-16, tepatnya pada tahun 1582 di Pulau Jawa. Sejak saat ini motif-motif batik menyertai simbolisasi dalam setiap kehidupan dengan berbagai harapan dan doa, bukan sekedar strata yang awalnya sangat populer di kalangan Keraton. Motif-motif legendaris inilah yang banyak ingin diketahui oleh para peminat batik agar tidak salah dalam menyiratkan niat dan keinginan saat memilih motif batik sebagai wastra yang sekaligus bermakna busana. \n\nBatik sendiri juga memiliki variasi yang berbeda pada motif yang sama antar daerah, karena pada motif klasik jaman dahulu sebuah karya itu hanya mengandalkan susunan ragam hias yang dijadikan ide dasar sekaligus berisi filosofi motif tersebut. Ketika untuk kedua kalinya dibuat kembali maka berpatokan pada susunan elemen-elemen yang telah ditentukan pada karya pertama. Dengan demikian, antara motif Sidomukti yang satu dengan Sidomukti lain akan sulit dibuat sama persis, apalagi jika Sidomukti tersebut dibuat di wilayah lain maka yang sering kali dijadikan patokan adalah unsur-unsur ragam hias sesuai kandungan filosofi batik tersebut.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Asal Usul Nama Batik dan Perjalanannya Jadi Warisan Budaya Dunia',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel12.png',
        author: 'A. Syamsul Arifin',
        content: 'Jakarta, NU Online Setiap tanggal 2 Oktober diperingati masyarakat Indonesia sebagai Hari Batik Nasional. Di tahun 2023 ini bertepatan pada Senin, hari ini. Ditetapkannya sebagai momen penting bagi warga Indonesia setelah United Nations Educational, Scientific and Cultural Organization (UNESCO) mengukuhkan batik Indonesia dalam daftar Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi di Abu Dhabi, Uni Emirat Arab pada 2 Oktober 2009 lalu. Secara bahasa, mengutip dari laman Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbud Ristek), kata batik berasal dari bahasa Jawa, ambatik. Gabungan dari kata amba dan titik. Amba sendiri memiliki arti menulis. Sedangkan titik berarti sebagaimana umumnya, sebuah titik. \n\nKata batik merujuk pada kain dengan corak yang dihasilkan oleh bahan malam (wax) yang diaplikasikan ke atas kain sehingga dapat menahan masuknya bahan pewarna. Malam atau lilin berfungsi untuk menutup permukaan pada kain yang akan dibatik, sehingga kain yang telah ditutup lilin, tidak bisa menyerap warna. Tidak sembarang orang bisa menekuni seni membatik. Selain karena pengerjaannya yang tidak instan, juga membutuhkan ketelitian dan konsentrasi yang terpusat. Karena itu, tik pada kata batik dalam bahasa jawa mempunyai makna berkaitan dengan suatu pekerjaan halus, lembut, dan kecil yang mengandung unsur keindahan. Secara etimologis, kata batik berarti menitikkan malam dengan canting sehingga membentuk corak yang terdiri atas susunan titikan dan garisan. \n\nHasil pengerjaan batik pun cukup beragam dan punya kekhasan tersendiri di setiap daerah. Di Pekalongan, misalnya, mayoritas batik yang dihasilkan pengrajin memiliki khas motif membentuk garis-garis tegas. Garis-garis ini akan menghasilkan corak dan motif seperti dedaunan dan bunga-bunga kecil, sehingga menghasilkan bentuk yang hidup. Sedangkan, khas batik Yogyakarta biasanya disebut batik kawung, yang memiliki makna erat hubungannya dengan kehidupan kerajaan. Motif batik ini ditandai dengan empat buah bulatan lonjong yang saling silang. Sebagian besar motif batik Kawung menggunakan ragam hias dengan pola geometris \n\nSementara ciri khas batik Madura, ditandai dengan adanya warna merah pada motif bunga, tangkai atau daun. Secara garis besar, karakteristik batik Madura memang dapat dilihat dari dua hal, yaitu warna dan motifnya. Begitu pula di daerah-daerah yang lain tentu juga memiliki kekhasan tersendiri dalam hal produk batik.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hari Kartini dan Masa Depan Industri Batik Emak-emak',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel13.png',
        author: 'Dipo Alam | CNN Indonesia',
        content: 'Jakarta, CNN Indonesia -- Perayaan Hari Kartini selalu identik dengan kebaya dan batik. Sayangnya, berbeda dengan tahun-tahun sebelumnya, setelah lebih setahun dihantam pandemi, perayaan Hari Kartini tahun ini dibayangi kabar ambruknya 75 persen pengrajin batik di tanah air. \n\nPandemi Covid-19 memang telah membuat para pelaku IKM (Industri Kecil Menengah) di sektor TPT (Tekstil dan Produk Tekstil), khususnya batik, jatuh ke titik nadir. \n\nAngka penjualan di berbagai sentra produksi batik, mulai dari Cirebon, Pekalongan, Solo, Yogyakarta, hingga ke Pamekasan, terus merosot tajam. \n\nJika pada 2019 nilai transaksi perdagangan batik nasional mencapai Rp3,6 triliun, maka pada 2020 nilainya tinggal Rp910 juta saja. \n\nImbasnya, sebagian besar produsen batik, khususnya yang berskala UMKM (Usaha Mikro, Kecil dan Menengah), telah berhenti total. Menurut data Asosiasi Perajin dan Pengusaha Batik Indonesia (APPBI), dari 151.656 pengrajin batik yang tercatat, kini hanya tinggal 37.914 pengrajin saja yang masih berproduksi. \n\nGulung tikarnya industri batik rakyat ini tentu telah berimbas kepada para pengrajin batik. Mereka terpaksa harus dirumahkan dan beralih profesi untuk mempertahankan hidupnya. Menurut APPBI, para pengrajin batik ini kemudian beralih profesi menjadi buruh, nelayan, petani, serta pekerjaan serabutan lainnya. \n\nSecara ekonomi, sebenarnya tidak ada persoalan dari alih profesi semacam itu. \n\nNamun, dari sisi yang lain, misalnya kebudayaan, alih profesi tadi bisa mengancam kelangsungan tradisi batik di tanah air. \n\nSebab, membatik adalah seni keterampilan motorik halus, sementara pekerjaan-pekerjaan baru yang kini dijalani oleh mantan pengrajin batik tadi umumnya adalah pekerjaan kasar. \n\nJika tidak ada intervensi untuk memutus mortalitas industri batik rakyat, dan mengembalikan para pengrajin tadi ke profesi awalnya, kita akan menghadapi kendala serius dalam memulihkan keterampilan para pembatik tadi. Menurut penulis, isu ini perlu mendapat perhatian yang serius.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ketahui Macam Batik dan Penjelasannya, Kenali Makna dari Setiap Motifnya',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel14.png',
        author: 'merdeka.com',
        content: 'Merdeka.com - Batik adalah salah satu kerajinan tradisional khas Indonesia yang telah mendunia. Seni membatik umumnya dilakukan di atas selembar kain dengan menggunakan lilin khusus. Gambar-gambar yang dihasilkan dari teknik membatik pun sangat beragam, sesuai dengan ciri khas daerah asalnya. Makna filosofis yang terkandung dalam motif batik pun begitu kuat dan kental dengan adat istiadat, terutama bagi masyarakat Jawa. \n\nMengutip dari Ensiklopedia Batik dan Kain Hias Nusantara, kata batik berasal dari gabungan dua kata dalam Bahasa Jawa yaitu amba dan titik. ”Amba” artinya kain dan “Titik” adalah cara memberi motif pada kain dengan cara memberi motif pada kain dengan menggunakan malam cair dengan cara di titik-titik. \n\nKesenian batik di Indonesia semakin meluas dan telah menjadi milik rakyat, khususnya Suku Jawa pada akhir abad ke-18 atau awal ke-19. Batik yang dihasilkan berjenis batik tulis. Pada 2009 Batik Indonesia secara resmi diakui UNESCO dengan dimasukkan ke dalam daftar representatif sebagai budaya tak-benda warisan manusia (Representative List of the Intangible Cultural Heritage of Humanity).',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mengapa Melestarikan Batik sebagai Wujud Cinta Tanah Air?',
        url_banner: 'https://storage.googleapis.com/ambatik_bucket/artikel_banner/artikel15.png',
        author: 'Vanya Karunia Mulia Putri , Serafica Gischa Tim Redaksi',
        content: 'KOMPAS.com - Batik merupakan salah satu warisan budaya bangsa Indonesia yang harus dilestarikan. Salah satu caranya dengan bangga membeli dan mengenakan batik. Dilihat dari asal usul bahasanya, kata batik berasal dari bahasa Jawa, ambhatik. Menurut Dodi Marwadi dalam buku Kebanggaan Indonesia: Batik Menjadi Warisan Dunia (2021), amba berarti lebar, luas, dan kain. Sedangkan kata titik atau matik dalam bahasa Jawa merupakan kata kerja yang artinya membuat titik. Istilah ambhatik terus berkembang sampai akhirnya menjadi kata batik yang kita kenal dan gunakan hingga saat ini. Mengutip dari buku Eksplorasi Batik Tanah (2019) karya Irma Russanti, batik dianggap sebagai ikon budaya bangsa Indonesia yang memiliki keunikan sebagai simbol dan tradisi, serta memuat filosofi mendalam. Baca juga: Saran Menggunakan Pensil dengan Hemat untuk Melestarikan Lingkungan Mengapa melestarikan batik sebagai wujud cinta tanah air? Cinta tanah air adalah sikap kebangsaan serta semangat untuk mencintai negara Indonesia. Hal ini bisa diwujudkan lewat beberapa tindakan. \n\nSalah satunya melestarikan batik dengan membeli dan memakainya. Sebagai orang Indonesia, kita memang seharusnya bangga dan mau melestarikan batik. Karena batik berasal dari nilai-nilai kebudayaan bangsa Indonesia yang diwariskan secara turun-temurun. Setujukah bahwa melestarikan batik sebagai warisan budaya bangsa adalah merupakan wujud cinta terhadap tanah air? Ya, setuju. Karena sikap cinta tanah air bisa diwujudkan lewat beberapa tindakan. Salah satunya melestarikan batik. Cinta tanah air adalah sikap kebangsaan dan semangat untuk mencintai negara Indonesia. Sikap cinta tanah air juga dapat diartikan sebagai rasa bangga dan peduli terhadap bangsa serta negaranya. Dengan melestarikan batik sebagai warisan budaya bangsa, hal ini berarti kita mencintai dan bangga menggunakan batik.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      const condition = {
        title: ['Istana Berbatik, Jokowi Pakai Batik Parang yang Biasa Dikenakan Raja', 
        'Jokowi: Kita Harus Berani Perkenalkan Batik ke Acara Internasional',
        'Menjadikan sebagai Souvenir, Cara UMKM Batik di Tuban Tingkatkan Penjualan',
        'Sejarah Batik di Indonesia',
        'Hadiri Puncak Peringatan Hari Batik Nasional, Ketua Dekranas Dukung Peningkatan Edukasi Ragam Batik',
        'Pengertian Motif Batik dan Filosofinya',
        'Menilik Sejarah Batik, Salah Satu Duta Budaya Indonesia',
        'Bangga Batik Indonesia yang Mendunia',
        'UMKM Batik Masih Butuh Dukungan untuk Bangkit',
        'Menperin: Memakai Batik, Menghormati Warisan Budaya, Memperkokoh Perekonomian Nasional',
        'Batik Sebagai Warisan Budaya',
        'Asal Usul Nama Batik dan Perjalanannya Jadi Warisan Budaya Dunia',
        'Hari Kartini dan Masa Depan Industri Batik Emak-emak',
        'Ketahui Macam Batik dan Penjelasannya, Kenali Makna dari Setiap Motifnya',
        'Mengapa Melestarikan Batik sebagai Wujud Cinta Tanah Air?'
      ]
      };
      // await queryInterface.bulkDelete('likes', null, {});

     // Then remove records from the parent table (e.g., users)
      await queryInterface.bulkDelete('articles', condition, {});
  }
};
